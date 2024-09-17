import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    

    res.status(201).json({ });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Authenticate user and generate token
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    

    res.status(200).json({ });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
