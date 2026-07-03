import db from "../models/index.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";


const { User } = db;

class UserService {

    async updateUserProfile(userId, body, file) {
    const { firstName, lastName, phone } = body;

    const user = await User.findByPk(userId);

    if (!user) return null;

    let profileImage = user.profileImage; // always use DB value

    if (file) {
        const result = await uploadToCloudinary(file.path);
        profileImage = result.secure_url;
    }

    await user.update({
        firstName: firstName ?? user.firstName,
        lastName: lastName ?? user.lastName,
        phone: phone ?? user.phone,
        profileImage
    });

    // IMPORTANT: return fresh data
    await user.reload();

    return user.toJSON();
}
};

export default new UserService();