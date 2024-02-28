import Employee from '../models/Employee.js';
import bcrypt from "bcrypt";


export class employeeController {
  static async addEmployee(req, res) {
    try {
      if (!req.body.email) {
        return res
          .status(400)
          .json({ Status: false, error: "Email is required" });
      }

      const existingUser = await Employee.findOne({
        where: { email: req.body.email },
      });
      if (existingUser) {
        return res.status(400).json({ error: "Email is already registered" });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      

  
      const employee = await Employee.create({
        employee_id: req.body.employee_id,
        name: req.body.name,
        date_of_birth: req.body.date_of_birth,
        mobile_no: req.body.mobile_no,
        alternate_no: req.body.alternate_no,
        city: req.body.city,
        address: req.body.address,
        postal_code: req.body.postal_code,
        qualification: req.body.qualification,
        year_of_experience: req.body.year_of_experience,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        gender: req.body.gender,
        marital_status: req.body.marital_status,
        email: req.body.email,
        password: hashedPassword,
      });

      return res.status(200).json({ msg: "Registered successfully", employee });
    } catch (error) {
      console.error(error);
      return res.status(500).json({Status: false, error: "Error during registration", status: "Query Error"})
  }
}
}

export default employeeController;
