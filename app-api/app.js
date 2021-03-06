const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password  :'root',
  database : 'expense_manager'
});
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/allUsers', (req, res) => {
  connection.connect();
  connection.query("select * from user", function(error, results){
    console.log("query response is ", results);
    res.json(results);
  })
  connection.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})