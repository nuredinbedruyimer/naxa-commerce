import jwt from "jsonwebtoken";

export const generateToken = (claims) => {
    const token = jwt.sign(claims, process.env.JWT_SECRET_KEY, {
        expiresIn: "6000min"  
    });

    return token;
};
