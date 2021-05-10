const pool = require("./db");

const sql = 'SELECT * FROM midterm_231';

pool.query(sql,(err,res)=> {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows);
    }
})
pool.end();