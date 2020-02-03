const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mysql = require ("mysql")
const basicAuth = require('express-basic-auth')
const authDetails= require('../data/authDetails')
const dbDetails = require('../data/dbdetails.js')
const listAPI = require('../data/listAPI')
const app = express()


app.use(morgan('short'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(basicAuth(authDetails))

router = express.Router()

function sqlConnect (){
    return  mysql.createConnection( dbDetails )
}

router.get('/',(req,res)=>
{
    res.send(listAPI)
}
)

// Adds a new record to the sql database
router.post('/add_record', (req,res) => 
    {
        var newRecord = {
            name: req.body.name,
            password: req.body.password,
            role: req.body.role,
            location: req.body.location,
            phone: req.body.phone,
            email: req.body.email
        };
        
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call tutortinderdb.CreateNewUserRecord("${newRecord.name}","${newRecord.email}","${newRecord.password}","${newRecord.role}","${newRecord.location}","${newRecord.phone}")`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Error when trying to add to database")
           } else {
               console.log ("Successful status: ")
               console.log(rows[1][0]["Successful"])
               res.status(200).send(rows[1][0])
           }
       }
       )
       connection.end()
    }
)

// Adds a new record to the sql database
router.post('/get_user', (req,res) => 
    {
        var newRecord = {
            username: req.body.username,
            password: req.body.password
        };
        
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call tutortinderdb.FindUserDetails("${newRecord.username}","${newRecord.password}")`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Error when trying to add to database")
           } else {
               console.log ("Successful status: ")
               console.log(rows[0][0])
               res.status(200).send(rows[0][0])
           }
       }
       )
       connection.end()
    }
)

// Adds a new record to the sql database
router.post('/edit_edu', (req,res) => 
    {
        var newRecord = {
            Userid: req.body.Userid,
            year1: req.body.year1,
            year2: req.body.year2,
            year3: req.body.year3,
            edu1: req.body.edu1,
            edu2: req.body.edu2,
            edu3: req.body.edu3,
            budget: req.body.budget,
            amSpecialNeeds: req.body.amSpecialNeeds
        };
        
        connection = sqlConnect()
        connection.connect()
        
        
       queryString= `call tutortinderdb.editEducation(${newRecord.Userid},
       "${newRecord.year1}","${newRecord.year2}","${newRecord.year3}","${newRecord.edu1}"
       ,"${newRecord.edu2}","${newRecord.edu3}","${newRecord.budget}","${newRecord.amSpecialNeeds}")`


       console.log(queryString)

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Error when trying to add to database")
           } else {
               console.log ("Successful status: ")
               console.log(rows)
               res.status(200).send(rows)
           }
       }
       )
       connection.end()
    }
)

router.post('/edit_skill', (req,res) => 
    {
        var newRecord = {
            Userid: req.body.Userid,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3,
            price1: req.body.price1,
            price2: req.body.price2,
            price3: req.body.price3
        };
        
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call tutortinderdb.editSkill(${newRecord.Userid},
       "${newRecord.skill1}","${newRecord.skill2}","${newRecord.skill3}",
       "${newRecord.price1}","${newRecord.price2}","${newRecord.price3}")`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Error when trying to add to database")
           } else {
               console.log ("Successful status: ")
               console.log(rows)
               res.status(200).send(rows)
           }
       }
       )
       connection.end()
    }
)

router.post('/searchLocationSkill', (req,res) => 
    {
        var newRecord = {
            Userid: req.body.Userid,
            searchSkill: req.body.searchSkill,
            searchLocation: req.body.searchLocation
        };

        connection = sqlConnect()
        connection.connect()
        
       queryString= `call tutortinderdb.SearchLocationAndSkill("${newRecord.searchLocation}",
       "${newRecord.searchSkill}")`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Error when trying to add to database")
           } else {
               console.log ("Successful status: ")
               console.log(rows[0])
               res.status(200).send(rows[0])
           }
       }
       )
       connection.end()
    }
)

router.post('/get_user_by_id', (req,res) => 
    {
        var newRecord = {
            Userid: req.body.Userid
        };
        
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call tutortinderdb.FindUserDetailsByID(${newRecord.Userid})`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Error when trying to add to database")
           } else {
               console.log ("Successful status: ")
               console.log(rows[0][0])
               res.status(200).send(rows[0][0])
           }
       }
       )
       connection.end()
    }
)
// TO ADD THE SEARCH API

/*

//fetches all measurements from the sql database
router.get('/all_measurements', (req, res) => 
{
   
    connection = sqlConnect()
    connection.connect()

    queryString = "call smartgarden.SELECTALL"

    connection.query(queryString, (err,rows, fields) => 
    {
        if (err){
            console.log (err)
            res.status(500).send("Could not fetch data")
        } else {
            console.log ("Fetched users successfully: ")
            console.log(rows)
            res.send(rows[0])
        }
    })

    connection.end()
}
)

//FETCHES FROM THE DATABASE THE MOST CURRENT RECORD (WITHOUT UPDATING)
router.get('/current_record',(req,res) =>
    {
        
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call smartgarden.SELECTLAST(1)`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Could not fetch the most current record")
           } else {
               console.log ("Fetched new records successfully: ")
               console.log(rows)
               res.send(rows[0])
           }
       }
       )
       connection.end()
    }
)

//FETCHES FROM THE DATABASE THE MOST CURRENT RECORD (WITH UPDATING)
router.get('/current_record_update',(req,res) =>
    {
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call smartgarden.SELECTLASTUPDATE(1)`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Could not fetch the most current record")
           } else {
               console.log ("Fetched new records successfully: ")
               console.log(rows)
               res.send(rows[0])
           }
       }
       )
       connection.end()
    }
)

//FETCHES FROM THE DATABASE THE LAST MOST CURRENT RECORDS ACCORDING TO id PASSED IN ROUTE (WITHOUT UPDATING)
router.get('/current_records/:id',(req,res) =>
    {
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call smartgarden.SELECTLAST(${req.params.id})`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Could not fetch the most current records")
           } else {
               console.log ("Fetched new records successfully: ")
               console.log(rows)
               res.send(rows[0])
           }
       }
       )
       connection.end()
    }
)


//FETCHES FROM THE DATABASE THE LAST MOST CURRENT RECORDS ACCORDING TO id PASSED IN ROUTE (WITH UPDATING)
router.get('/current_records_update/:id',(req,res) =>
    {
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call smartgarden.SELECTLASTUPDATE(${req.params.id})`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Could not fetch the most current records")
           } else {
               console.log ("Fetched new records successfully: ")
               console.log(rows)
               res.send(rows[0])
           }
       }
       )
       connection.end()
    }
)

//FETCHES FROM THE DATABASE ALL UNFETCHED RECORDS (WITHOUT UPDATING)
router.get('/new_records',(req,res) =>
    {
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call smartgarden.FETCHNEW`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Could not fetch new records")
           } else {
               console.log ("Fetched new records successfully: ")
               console.log(rows)
               res.send(rows[0])
           }
       }
       )
       connection.end()
    }
)

//FETCHES FROM THE DATABASE ALL UNFETCHED RECORDS (WITH UPDATING)
router.get('/new_records_update',(req,res) =>
    {
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call smartgarden.FETCHNEWUPDATE`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Could not fetch new records")
           } else {
               console.log ("Fetched new records successfully: ")
               console.log(rows)
               res.send(rows[0])
           }
       }
       )
       connection.end()
    }
)

// Adds a new record to the sql database
router.post('/add_record', (req,res) => 
    {
        var newRecord = {
            temp: req.body.temp,
            fan: req.body.fan,
            timestamp: req.body.timestamp
        };
        
        connection = sqlConnect()
        connection.connect()
        
       queryString= `call smartgarden.ADDRECORD(${newRecord.temp},"${newRecord.fan}","${newRecord.timestamp}")`

       connection.query(queryString, (err,rows, fields) => 
       {
           if (err){
               console.log (err)
               res.status(500).send("Could not add record")
           } else {
               console.log ("Added record successfully: ")
               console.log(rows)
               res.send("Added record succesfully")
           }
       }
       )
       connection.end()
    }
)

*/

module.exports = router