import User from '../models/user.model.js';
import bycryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const authController = async (req, res, next) => {
    const {username, email, password} = (req.body);
    const hashedPassword = bycryptjs.hashSync(password, 12);
   const newUser = new User({username, email, password: hashedPassword});
   try {
       await newUser.save();
      res.status(201).json({message: 'User created successfully!'});
    
   } catch (error) {
    next(errorHandler(error.statusCode, error.message));
   }
};