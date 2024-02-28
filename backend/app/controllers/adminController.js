import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";
import jwt from 'jsonwebtoken';

export class adminController {

  // Admin Registration
  static async register(req, res) {
    try {
      if (!req.body.email) {
        return res
          .status(400)
          .json({ Status: false, error: "Email is required" });
      }

      const existingUser = await Admin.findOne({
        where: { email: req.body.email },
      });
      if (existingUser) {
        return res.status(400).json({ error: "Email is already registered" });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const register = await Admin.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      return res.status(200).json({ msg: "Registered successfully", register });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({
          Status: false,
          error: "Error during registration",
          status: "Query Error",
        });
    }
  }


  // Admin Login

  static async login(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(400).json({ Status: false, error: 'Email and password are required' });
      }
  
      // Find the user by email
      const user = await Admin.findOne({ where: { email: req.body.email } });
      if (!user) {
        return res.status(401).json({ Status: false, error: 'Email is not registered' });
      }
  
      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ Status: false, error: 'Invalid credentials' });
      }
  
    //   // Generate JWT token for authentication
       const token = jwt.sign({ userId: user.id, userType: user.userType }, 'jwt_secret_key', { expiresIn: '1d' });
  
    // , token 
      // Return the success response with JWT token
      return res.status(200).json({ Status: true, msg: 'Login successful', user, token});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ Status: false, error: 'Error during login', status: 'Query Error' });
    }
  };


}

export default adminController;
