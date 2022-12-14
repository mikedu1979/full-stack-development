let express = require("express");
let cookieParser = require("cookie-parser");
//setup express app
let app = express();

app.use(cookieParser());

//basic route for homepage
app.get("/", (req, res) => {
  res.send("welcome to express app");
});

//JSON object to be added to cookie
let users = {
  name: "Lily",
  Age: "35",
};

//Route for adding cookie
app.get("/setuser", (req, res) => {
  res.cookie("userData", users,{maxAge: 4000 });
  res.send("user data added to cookie");
});

// //Iterate users data from cookie
app.get("/getuser", (req, res) => {
  //shows all the cookies
  res.send(req.cookies);
});

//Route for destroying cookie
app.get("/logout", (req, res) => {
  //it will clear the userData cookie
  res.clearCookie("userData");
  res.send("user logout successfully");
});

//server listens to port 3000
app.listen(9000, (err) => {
  if (err) throw err;
  console.log("listening on port 9000");
});
