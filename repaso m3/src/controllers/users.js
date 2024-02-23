const axios = require("axios");
const { API } = require("../utils");

const getUsers = async (req, res) => {
  const { data } = await axios.get(API);

  res.json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { data } = await axios.get(`${API}/${id}`);

  res.status(201).json(data);
};

const getUserByQuery = (req, res) => {
  const { userid } = req.query;

  axios
    .get(`${API}/${userid}`)
    .then(({ data }) => res.status(201).json(data))
    .catch((err) => res.status(400).json(err));
};

const getUserByBody = (req, res) => {
  const { userid } = req.body;

  axios
    .get(`${API}/${userid}`)
    .then(({ data }) => res.status(202).json(data))
    .catch((err) => res.status(400).json(err));
};

const deleteUserByBody = (req, res) => {
  const { userid } = req.body;

  res.send(`User ${userid} deleted`);
}


module.exports = {
  getUsers,
  getUserById,
  getUserByQuery,
  getUserByBody,
  deleteUserByBody,
};
