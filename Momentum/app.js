var express = require("express");
var app = express();
var path = require("path");
var router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//add the router
app.use(express.static(__dirname + "/views"));
app.use(express.static("public"));

app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
