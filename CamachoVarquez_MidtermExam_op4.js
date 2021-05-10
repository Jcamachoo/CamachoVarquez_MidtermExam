const pool = require("./db");

const sql = 'SELECT * FROM midterm_list_of_films';

pool.query(sql,(err,res)=> {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows);
    }
})
pool.end();