// 2.1.2 Calculate the total length of films grouped by film’s rating

const pool = require("./db");

const sql = 'SELECT rating, SUM( rental_duration ) FROM film GROUP BY rating ORDER BY rating' ;

pool.query(sql,(err,res)=> {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows);
    }
})
pool.end();