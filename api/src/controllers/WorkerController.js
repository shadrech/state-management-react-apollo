import * as User from "../models/Worker";

export async function createUser(req, res) {
  try {
    const data = await User.create(req.body);
    res.json({
      user: {
        _id: data._id,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        bio: req.bio,
        skills: req.skills,
        organizationId: req.organizationId
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export async function getUser(req, res) {
  try {
    const users = await User.fetch();
    res.json({ users });
  } catch (error) {
    res.status(500).json(error);
  }
};

export async function updateUser(req, res) {
  try {
    const user = await User.update(req.params.id, req.body);
    res.json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};

export async function removeUser(req, res) {
  try {
    await User.remove(req.params.id)
    res.json(`User ${req.params.id} has been successfully deleted!`);
  } catch (error) {
    res.status(500).json(error);
  }
}
