import User from "../models/userSchema.js";

const getAllUser = async (req, res) => {
  try {
    const user = await User.find({ state: true });

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        msg: `The user with the id: ${id} not found`,
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  const { name, email, pictureURL, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password,
      pictureURL,
    });

    const { password, ...rest } = user;

    res.status(202).json({
      ...rest,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await User.findByIdAndUpdate(id, { state: false });
    res.status(204).json({
      msg: "User has been deleted",
      usuario,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export { getUserById, getAllUser, updateUser, deleteUser };
