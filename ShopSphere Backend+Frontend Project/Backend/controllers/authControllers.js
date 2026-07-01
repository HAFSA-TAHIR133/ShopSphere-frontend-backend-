import AuthService from "../services/authService.js";

class AuthController {

    async signup (req, res, next) {
        try {
            const user = await AuthService.signup(req.body);

            return res.status(201).json({
                success: true,
                message: "User created successfully",
                data: user
            });

        } catch (error) {
            next(error);
        }
    };

    async login (req, res, next) {
        try {

            const tokens = await AuthService.login(req.body);

            return res.status(200).json({
                success: true,
                message: "Login successful",
                data: tokens.accessToken
            });

        } catch (error) {
            next(error);
        }
    };

    async logout (req, res, next){
        try {

            await AuthService.logout(req.body.refreshToken);

            return res.status(200).json({
                success: true,
                message: "Logout successful"
            });

        } catch (error) {
            next(error);
        }
    };

}

export default new AuthController();