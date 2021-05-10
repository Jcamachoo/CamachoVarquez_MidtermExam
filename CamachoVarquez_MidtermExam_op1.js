// 2.1.1 Get the total number of films

const pool = require("./db");

const sql = 'SELECT COUNT(film_id) as "Total Number of films" FROM film ' ;

pool.query(sql,(err,res)=> {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
})
pool.end();