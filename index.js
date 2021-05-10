const express = require("express"); 
const app = express();
const cors = require("cors"); 
const pool = require("./db"); 


app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.get('/', (req,res)=> {
    res.send('MIDTERM EXAM'); 
}); 

app.get('/midterm_2.1.7' , async(req, res) => {
    try{ 
const sql = 'SELECT * FROM midterm_232' ;
        const out = await pool.query(sql); 
        res.send(out.rows)

    } catch (error){console.error(error.message)}       
}); 
app.listen(1000, ()=> console.log('server has started')); 
