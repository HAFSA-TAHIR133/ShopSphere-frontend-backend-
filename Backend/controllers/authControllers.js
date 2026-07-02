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

            // 5. Set refresh token as HTTP-only cookie
            res.cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,  // 7 days
            sameSite: 'strict'
            });

            return res.status(200).json({
                success: true,
                message: "Login successful",
                data: tokens.accessToken
            });

        } catch (error) {
            next(error);
        }
    };

    async verifyEmail(req,res,next){
        try {

            const email = await AuthService.verifyEmail(req.body);

            if (!email) {
            return res.status(404).json({
                message: "Email not found",
            });
            }

            res.json({
            message: "Email verified",
            });

        } 
        catch (error) {
            next(error);
        }

    }

    async resetPassword(req, res,next) {
        try{
            const { email, newPassword } = await AuthService.resetPassword(req.body);

            res.json({
            message: "Password reset successfully",
            });
        }
        catch (error) {
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