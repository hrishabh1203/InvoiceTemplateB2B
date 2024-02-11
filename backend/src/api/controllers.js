/* eslint-env node */
/**
 * Summary: Contains controller code for the APIs
 */

const DEBUG = require("../lib/debugger")("api-controllers");
const moment = require('moment');
const { con } = require("../connection");

// $$$$$$$$$$%%%%%%%%%%################ APPLICATION LEVEL APIs ####################%%%%%%%%$$$$$$$ //
// [/login] BASIC AUTH FUNCTIONS IN APPLICATION, INCLUDES(JWT)
function login(req, res) {
    var username="";
    var password = "";
    
    if (req.body.username)
     username = req.body.username;
     if (req.body.password) {
        password = req.body.password;
      }
    
    if (req.method == 'POST') {
      const helper = require("./helper/auth");
      helper.login(res, username, password)
    }
  }


function register(req, res) {
    if (req.method == 'POST') {
      const helper = require("./helper/register");
      
      var bussiness_name = req.body.bussiness_name;
      var username = req.body.username;
      var password = req.body.password;
      var address = req.body.address;
      var number = req.body.number;
      var email = req.body.email;
      var bussiness_category = req.body.bussiness_category;
      console.log(username)
      helper.register(res, bussiness_name,username,password,address,number,email,bussiness_category)
    }
  }



  function add_client(req, res) {
    if (req.method == 'POST') {
      const helper = require("./helper/add_client");
  
      var username = req.body.username;
      var position = req.body.position;
      var Business_name=req.body.Business_name;
      var industry=req.body.industry;
      var country=req.body.country;
      var city=req.body.office;
      var state=req.body.state;
      var street_address=req.body.street_address;
      var business_alias=req.body.business_alias;
      var unique_key=req.body.unique_key
      var number=req.body.number
      var email=req.body.email
      var vat=req.body.vat
      var zip=req.body.zip
      var gst=req.body.gst;
      var pan=req.body.pan;
      var account_h_name=req.body.account_h_name
      var account_no=req.body.account_no
      var ifsc_code=req.body.ifsc_code
      var swift=req.body.swift
      var bank=req.body.bank
     
      
  
      helper.add_client(res, username,position,Business_name,industry,country,city,state,street_address,business_alias,unique_key,number,email,vat,zip,gst,pan,account_h_name,account_no,ifsc_code,swift,bank)
    }
  }


  function client(req,res){
    if (req.method == 'GET') {
      const helper = require("./helper/add_client");
      var username="";

      if (req.query.username ){
        username=req.query.username
      

      }
      
       
      helper.client(res,username )
    }
  
  }

  function invoice(req, res) {
    if (req.method == 'GET') {
      const helper = require("./helper/invoice");
  
      var username = req.query.username;
      // var position = req.body.position;
      // var office = req.body.email;
      // var age= req.body.age;
      // var startdate = req.body.startdate;
      // var status = req.body.status;
    
      
  
      helper.invoice(res, username)
    }
  }


  

  function cre_invoice(req, res) {
    if (req.method == 'POST') {
      const helper = require("./helper/invoice");
      var username = req.body.username;
  
      var invoice_date = req.body.invoice_date;
      var invoice_no = req.body.invoice_no;
      var billed_to = req.body.billed_to;
      var amount= req.body.amount;
      var status = req.body.status;
      var due_date = req.body.due_date;  
      var gstin = req.body.gstin;
      var pan = req.body.pan;
      var irn_status = req.body.irn_status;
      var invoice_email= req.body.invoice_email;
      var amount_paid = req.body.amount_paid;
      var amount_due = req.body.amount_due;
      var sub_total = req.body.sub_total;
      var tags = req.body.tags;
      // var thumbnail=req.body.thumbnail;
    
      
  
      helper.cre_invoice(res, invoice_date ,invoice_no,billed_to ,amount,status , due_date 
        , gstin , pan , irn_status , invoice_email , amount_paid , amount_due , sub_total ,  tags,username)
    }
  }
  
  function credit(req, res) {
    if (req.method == 'GET') {
      const helper = require("./helper/credit");
  
      var username = req.query.username;
      // console.log("aniket",username)
      
    
      
  
      helper.credit(res, username)
    }
  }
  function file_path(req, res) {
    if (req.method == 'POST') {
      const helper = require("./helper/invoice");
      console.log("ok")
  
      var username = req.body.username;
      var file_path = req.body.file_path;

      // console.log("aniket",username)
      
    
      
  
      helper.file_path(res, username,file_path)
    }
  }
  
  function create_credit(req, res) {
    if (req.method == 'POST') {
      const helper = require("./helper/credit");
      
      var username = req.body.username;
      var date = req.body.date;
      var credit_note = req.body.credit_note;
      var invoice_no = req.body.invoice_no;
      var issued_to = req.body.issued_to;
      var credit_issued = req.body.credit_issued;
      var amount = req.body.amount;
      var status = req.body.status
      console.log(username)
      helper.create_credit(res,  username,date , credit_note , invoice_no,issued_to , credit_issued ,amount , status)
    }
  }

  
  function details(req, res){
    if (req.method == 'GET') {
      const helper = require("./helper/add_client");
      var username="";
      if (req.query.username){
        username=req.query.username
      }
      
       
      helper.details(res,username)
    }

  }
  
  function userdata(req, res){
    if (req.method == 'GET') {
      const helper = require("./helper/add_client");
      
      
       
      helper.userdata(res)
    }

  }

  function client_show(req, res){
    if (req.method == 'GET') {
      const helper = require("./helper/add_client");
      var Business_name="";
      if (req.query.Business_name){
        Business_name=req.query.Business_name
      }
      
       
      helper.client_show(res,Business_name)
    }

  }
module.exports = {

 login,
 register,
 add_client,
 client,
 invoice,
 cre_invoice,
 credit,
 details,
 create_credit,
 client_show,
 file_path,
 userdata
  
}