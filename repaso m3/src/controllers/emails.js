const axios = require("axios");
const { API } = require("../utils");

const getEmailUser = async (req, res) => {
console.log('getEmailUser');
  const { id, name } = req.body;

  try {
    
    console.log({id});
    const { data: {email} } = await axios.get(`${API}/${id}`);
    console.log({email});
  
    res.status(202).send(`The email of the user with id ${id} is ${email}`)
  } catch (error) {
    res.status(400).send(error.message);
  }
}


module.exports = {
  getEmailUser,
}
