const config = require('../config')
const axios = require('axios');



function callBook (req, res){
  var jsonText = req.body;
  console.log(jsonText)
  // const functionUrl = `http://localhost:7071/api/f29bot2?code=${config.functionKey}`;
  // const functionUrl = `http://localhost:7071/api/epar_agent?code=${config.functionKey}`;
  //const functionUrl = `http://127.0.0.1:7071/api/f29_agent?code=${config.functionKey}`;
  const functionUrl = `https://f29f.azurewebsites.net/api/f29_agent?code=${config.functionKey}`;
  axios.post(functionUrl, jsonText)
  .then(async response => {
      try {
          // const jsonObject = JSON.parse(response.data.table);
        res.status(200).send(response.data)
      } catch (error) {
          console.log(error)
          var respu = {
              "msg": error,
              "status": 500
          }
          res.status(500).send(respu)
      }

  })
  .catch(error => {
      console.error(error);
      var respu = {
          "msg": error,
          "status": 500
      }
      res.status(500).send(respu)
  });
}


module.exports = {
	callBook
}
