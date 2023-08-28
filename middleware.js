export { default } from "next-auth/middleware";
export const config = { matcher: ["/home"] };


const authorizeAdmin = (req, res, next) => {
    const user = req.user; // Assuming you have a middleware that adds user information to the request object
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
  };
  
module.exports = { authorizeAdmin };