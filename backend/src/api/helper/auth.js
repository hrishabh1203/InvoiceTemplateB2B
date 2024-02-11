/* eslint-env node */
const jwt = require("jsonwebtoken");
const secretKey = "kavacoin123456";

const con = require("../../connection/index").con;
const fs = require('fs')
const { query } = require('express');
const moment = require('moment');
const { off } = require('process');
const { exec } = require('child_process')


function login(res, username, password) {
  // var responseData={}
  if (!(username && password)) {
    const responseData = { 'code': 500, 'response': 'All inputs are required' };
    res.header('Access-Control-Allow-Origin', '*');
    res.status(500).send(JSON.stringify(responseData));
    res.end();
  }
  var q="select * from user WHERE `username` = '" + username + "'";
  con.query(q, function (err, result) {
    
    if (result.length > 0 && result[0].password == password) {
      // responseData['token'] = generateAccessToken(customer_id_password.customer_id);
      // var ip='';
      
        
        responseData = { 'code': 200, 'response': 'Login Succesful'};
        
        console.log(responseData)
        res.header('Access-Control-Allow-Origin', '*');
        res.status(500).send(JSON.stringify(responseData));
        res.end();
     


    }
    else {


      const responseData = { 'code': 500, 'response': 'Login Unsuccesful' };
      res.header('Access-Control-Allow-Origin', '*');
      res.status(500).send(JSON.stringify(responseData));
      res.end();
    }
  })
  

}






module.exports = {
  login}