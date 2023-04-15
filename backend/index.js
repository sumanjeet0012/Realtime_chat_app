const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {

    const r = axios.PUT('https://api.chatengine.io/users/',
    {username: username , secret: username, first_name: username},
    {headers: {"private-key": "71830928-e5b9-46d7-a174-939fe452e490"}}
    )
    return res.status(r.status).json(r.data)
  } catch(e){
    return res.status(e.responce.status).json(e.responce.data)
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);