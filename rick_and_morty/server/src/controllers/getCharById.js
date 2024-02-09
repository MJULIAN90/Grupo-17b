const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (res, ID) => {
  // con async await
  try {
    const response = await axios(`${URL}${ID}`);
    const { id, name, status, species, origin, gender, image } = response.data;
    const character = {
      id,
      name,
      status,
      species,
      origin,
      image,
      gender,
    };
  
    console.log(character);
  
    res.writeHeader(200, { "Content-Type": "application/json" });
    // cadena de texto es decir string
    res.end(JSON.stringify(character));
    
  } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
    return res.end(error.message);
  }
  
  // con promesas
  // axios(`${URL}${id}`)
  //   .then(({data}) => {
  //     const { id, name, status, species, origin, gender, image } = data;
  //     console.log(data);

  //     const character ={
  //       id,
  //       name,
  //       status,
  //       species,
  //       origin,
  //       image,
  //       gender       
  //     };

  //     res.writeHeader(200, {'Content-Type': 'application/json'});
  //     // cadena de texto es decir string
  //     res.end(JSON.stringify(character));
  //   })

  //   .catch((err) => {
      
  //     res.writeHead(500, { 'Content-Type': 'text/plain' });
  //     return res.end(err.message);
      
  //   });
};

module.exports = getCharById;
