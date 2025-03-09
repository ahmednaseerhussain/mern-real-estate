import User from '../models/user.model.js';
import bycryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
export const signup = async (req, res, next) => {
    const {username, email, password} = (req.body);
    const hashedPassword = bycryptjs.hashSync(password, 10);
   const newUser = new User({username, email, password: hashedPassword});
   try {
       await newUser.save();
      res.status(201).json({message: 'User created successfully!'});
    
   } catch (error) {
    next(error);
   }
};

export const signin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User not found!'));
        const validPassword = bycryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(400, 'Invalid password!'));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        const {password: pass, ...rest} = validUser._doc;
        res.cookie('acces_token', token, {httpOnly: true}).status(200).json(rest);
        
    }
    catch (error) {
        next(error);
    }   
}