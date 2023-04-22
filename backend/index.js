const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

require('dotenv').config()
// console.log(process.env.API_KEY)
const apikey=process.env.API_KEY
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {

    const r = await axios.put('https://api.chatengine.io/users/',
    {username: username , secret: username, first_name: username},
    {headers: {"private-key":process.env.API_KEY}}
    // {headers: {"private-key": "71830928-e5b9-46d7-a174-939fe452e490"}}
    )
    return res.status(r.status).json(r.data)
  } catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);