// 2.1.3 Get the films that have the maximum replacement cost

const pool = require("./db");

const sql = 'SELECT film_id, title FROM film WHERE replacement_cost =( SELECT MAX( replacement_cost ) FROM film) ORDER BY title' ;

pool.query(sql,(err,res)=> {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows);
    }
})
pool.end();