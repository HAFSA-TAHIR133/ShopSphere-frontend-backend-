import bcrypt from "bcrypt";
import db from "../models/index.js";
import {generateAccessToken,generateRefreshToken} from "../utils/jwt.js";

const { User, RefreshToken } = db;

class AuthService {

    async signup(data) {

        const { firstName, lastName, email, password } = data;

        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        return user;
    }

    async login(data) {

        const { email, password } = data;

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            throw new Error("User not found");
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        const accessToken = await generateAccessToken(user);

        const refreshToken = await generateRefreshToken(user);

        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);

        await RefreshToken.create({
            userId: user.id,
            token: refreshToken,
            expiresAt: expiresAt,     
            deviceName: deviceName || 'Unknown'
        });
  
        // 5. Set refresh token as HTTP-only cookie
        res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,  // 7 days
        sameSite: 'strict'
        });

        return {
            accessToken,
            refreshToken
        };
    }

    async logout(refreshToken) {

        await RefreshToken.destroy({
            where: {
                token: refreshToken
            }
        });

        return true;
    }

}

export default new AuthService();