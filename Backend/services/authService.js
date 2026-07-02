import bcrypt from "bcrypt";
import db from "../models/index.js";
import {generateAccessToken,generateRefreshToken} from "../utils/jwt.js";

const { User, RefreshToken } = db;

class AuthService {

    async signup(data) {

        const { firstName, lastName, email, password,role } = data;

        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {
            throw new Error("User already exists");
        }
        // validation on role chceking to not bypass the admin role
        const sanitizedRole = role ? role.toLowerCase().trim() : "";
        const allowed_roles =["customer","seller"];
        if(!allowed_roles.includes(sanitizedRole)){
            throw new Error("Invalid role selected");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            throw new Error("Please enter a valid email address.");
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role:sanitizedRole
        });

        return user;
    }

    async login(data) {

        const { email, password,deviceName } = data;

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
  
        

        return {
            accessToken,
            refreshToken
        };
    }
    async verifyEmail(data){
        const {email}=data;
        const user = await User.findOne({where: { email }});
        if (!user) {
            return res.status(404).json({
                message: "Email not found",
            });
            }

            return true;
    }
    async resetPassword(data){
        const {email,newPassword}=data;
        const user = await User.findOne({ where: { email }});
        if (!user) {
        return res.status(404).json({
            message: "Email not found",
        });
        }
        const hashedPassword = await bcrypt.hash(newPassword,10);

        user.password = hashedPassword;
        await user.update({
            password: hashedPassword
        });
        return true;

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