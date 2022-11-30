//crear controllers encargados del login y registro
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import generateToken from "../helpers/token-volidation";
import axios from "axios";
import { response } from "express";


const signUpUser = async (req, res) => {
  if (req.body.googleAccessToken) {
    axios
      .get("https://sunny-holidays-backend.herokuapp.com/login", {
        headers: {
          Authorization: `Bearer ${req.body.googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const name = response.data.given_name;
        const lastName = response.data.given_name;
        const email = response.data.given_name;
        const pictureURL = response.data.given_name;

        const userExist = await User.findOne({ email });

        if (userExist)
          return res.status(400).json({
            msg: "User already exist",
          });

        const result = await User.create(name, lastName, email, pictureURL);

        const token = generateToken();

        res.status(200).json({
          result,
          token,
        });
      });
  } else {
    const { name, email, password, isUser, pictureURL, state } = req.body;

    try {
      const findUser = await User.findOne({ email: req.body.email });

      if (findUser) {
        return res.status(401).json({ msg: "This user already exist" });
      }

      const user = new User({
        name,
        email,
        password,
        isUser,
        pictureURL,
        state,
      });

      //encriptar la contraseña y guardarlo en db
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(password, salt);
      await user.save();

      res.status(200).json({
        user,
      });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  }
};

const signInUser = async (req, res) => {
  if (req.body.aud) {
    const { name, email, picture, password } = req.body;

    const userInDB = User.findOne({ email });

    const user = {
      name,
      email,
      picture,
      password,
    };

    if (!userInDB) {
      const user = await User.create(user);
    }

    const token = generateToken();

    res.status(200).json({
      user,
      token,
    });
  } else {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user.state) {
        return res.status(400).json({ msg: "This user has been deleted" });
      }

      if (!user) {
        return res.status(401).json({ msg: "Invalid email or password" });
      }

      //Comparar password con la password encriptada

      const match = await bcrypt.compare(req.body.password, user.password);

      if (!match) {
        return res.status(401).json({ msg: "Invalid email or password" });
      }

      const { password, ...rest } = user._doc;

      res.status(200).json({
        ...rest,
        token: generateToken(user._id),
      });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  }
};

export { signInUser, signUpUser };