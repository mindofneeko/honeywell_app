var express = require("express");
var app = express();
var sql = require('mssql/msnodesqlv8');
var config = {
  connectionString: 'Driver=SQL Server;Server={config.server}\\SQLEXPRESS;Database={config.test_table};Trusted_Connection=true;'
};

var Weather = require("./models/weather.js");

var weatherTest = new Weather(1,98,1,Date.UTC());
weatherTest.setLocationId(100);
console.log(weatherTest.getLocationId()); 

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

//  app.get('/nfl', function (req, res) {
   
//     sql.connect(config, err => {
//         new sql.Request().query('SELECT * from nfl_teams', (err, result) => {
//           if(err) { // SQL error, but connection OK.
//             console.log(" SQL Error: "+ err);
//           } else { // All is rosey in your garden.
//             res.send(result);
//             sql.close();
//           };
//         });
//       });
// });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
