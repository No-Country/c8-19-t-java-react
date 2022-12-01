//crear controllers encargados del login y registro
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import generateToken from "../helpers/token-volidation.js";

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    const findUser = await User.findOne({ email });

    if (findUser) {
      return res.status(401).json({ msg: "This user already exist" });
    }

    const user = new User({
      name,
      email,
      password,
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
};

const signIn = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user.state) {
      return res.status(404).json({ msg: "This user has been deleted" });
    }

    if (!user) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    //Comparar password con la password encriptada

    const match = await bcrypt.compare(req.body.password, user.password);

    console.log(match);

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
};

export { signIn, signUp };