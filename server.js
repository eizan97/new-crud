const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {origin : "http://localhost:8081"};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(express.json());

//parse requests of content0type - application/X-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

const db = require("./app/models");
db.sequelize
  .sync()
  .then(() => {
      console.log("Syenced db.");
    })
  .catch((err) => {
      console.log("Failed to sync db:" + err.message);
  });
  
//   db.sequelize.sync({ force:true }.then(()=>{
//       console.log("Drop and re-sync db.");
//   }));
  //simple route
  app.get("/", (req,res) =>{
      res.json({message:"Welcome to izzan application"})
    });
    
require ("./app/routes/tutorial.routes")(app);
    //set port, listen for requests
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}.`);
    });
    