import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    
    try {
        const SECRET = process.env.JWT_SECRET;
        const user = jwt.verify(token, SECRET);
        req.user = user;
        next();
    } catch {
        res.status(401).json({ error: "Invalid token" });
    }
};

export default auth