//Authentication check controller

import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
//for signup
export const signup = async (req, res) => {
  try {
    //step1: inputs from user
    const { fullName, username, password, confirmPassword, gender } = req.body;

    //step2: check passwords matches or not. if not the error would be retuned(res.status(400)"Passwords don't match").
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    //step3: check if user exists in our database. depending on username, ({ username }),
    const user = await User.findOne({ username });

    //step4: if user already exists it will return the error."Username already exists". but if not exist we will create a user(from line-32 "newUser") 
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWORD HERE
    //step6: we hash the password.
    const salt = await bcrypt.genSalt(10); //the higher it is, it would be more secure but at sametime it would slow.
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/
    //step7: we determine user profile
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //step5 and step8: we create the user with all this inputs.
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    })

    if (newUser) {
      // Generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);

      //step9: we save this user to database.
      await newUser.save();

      //step10: and then send it as response
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }

  } catch (error) {
    console.log("Error in signup controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
};
//for login
//it will take the password from the input and then check it/compare them, if it would be true then the value (const isPasswordCorrect = true) and if the user doest exist it will give error.
export const login = async(req, res) => {
  try {
    //step1: get input from user.
		const { username, password } = req.body;
    //step2:check if the user exist or not
		const user = await User.findOne({ username });
    //step3: check if the password is correct or NOT
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    //step3: and if any of them is false then return error("Invalid username or password")
		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}
 //step4: generate the token and set cookie.
		generateTokenAndSetCookie(user._id, res);

    //step5: send this respond of login.
		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = async (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};