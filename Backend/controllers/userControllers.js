import UserService from "../services/userService.js";

class UserController {

   async updateProfile(req, res) {
    try {
        console.log("Updating user ID:", req.user?.id);
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                message: "Unauthorized user"
            });
        }

        const userId = req.user.id;

        const updatedUser = await UserService.updateUserProfile(
            userId,
            req.body,
            req.file
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.json({
            success: true,
            message: "Profile updated successfully",
            user: updatedUser
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to update profile"
        });
    }
}
};

export default new UserController();