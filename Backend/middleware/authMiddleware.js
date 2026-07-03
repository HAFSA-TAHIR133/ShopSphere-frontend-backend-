import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const authMiddleware = async (req, res, next) => {
  const token = await  req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    
    next();
  } 
  catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};