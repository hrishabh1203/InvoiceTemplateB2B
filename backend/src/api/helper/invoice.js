const moment = require('moment');
const con = require("../../connection/index").con;
var getDaysArray = function(s,e) {for(var a=[],d=new Date(s);d<=e;d.setDate(d.getDate()+1)){ a.push(moment(new Date(d)).format('YYYY-MM-DD').toString());}return a;};

function file_path(res, username,file_path){
  console.log("ok")
  var query1="update user set thumbnail='"+file_path+"' where username='"+username+"'";
  commitQuery(query1)
  responseData = {'code':200, 'response': 'done'};
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).send(JSON.stringify(responseData));
        res.end();

}
function invoice(res, username){
    var query = "SELECT * FROM create_invoice WHERE username = '"+username+"'";
    con.query(query, function (err, result) {
      if (err) {
        console.log(err);
        const responseData = { 'code': 500, 'response': err };
        res.header('Access-Control-Allow-Origin', '*');
        res.status(500).send(JSON.stringify(responseData));
        res.end();
      }
      else {
        responseData = { 'code': 200, 'response': result };
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).send(JSON.stringify(responseData));
        res.end();
      }
    });
}
function cre_invoice(res, invoice_date, invoice_no, billed_to, amount, status, due_date, gstin, pan, irn_status, invoice_email, amount_paid, amount_due, sub_total, tags,username) {
  // console.log(thumbnail)
  // if(thumbnail.length>0){
  //   var query1="update user set thumbnail='"+thumbnail+"' where username='"+username+"'";
  //   commitQuery(query1)
  // }    
  var select = "SELECT invoice FROM create_invoice WHERE username = '" + username +   "' AND invoice = '" + invoice_no + "'"; 
      con.query(select, function (err, result) {
        console.log(result);
        if (result.length > 0) {
          return res.send({ "message": "Duplicate Entry" });
        } else {
          var query = "INSERT INTO `create_invoice` (username,date, invoice, billed_to, amount, status, payment_date, gstin, pan, irn_status, invoice_email, amount_paid, amount_due, sub_total, tags) VALUES ('" + username + "','" + invoice_date + "','" + invoice_no + "','" + billed_to + "','" + amount + "','" + status + "','" + due_date + "','" + gstin + "','" + pan + "','" + irn_status + "','" + invoice_email + "','" + amount_paid + "','" + amount_due + "','" + sub_total + "','" + tags + "')";
          commitQuery(query);
        }
      });
      
    }
    
    function commitQuery(query){
      if (!con){ 
        console.log("Could not connect to campEngine!");
      }
      else{
        console.log(query);
        con.query(query, function (err, result) {
          if (err){
            console.log(err);
          }
          else{
            console.log("Query Success!");
          }
        });
      }
    }
          // UTILITY FUNCTIONS
      
      
      module.exports = {
        invoice,
        cre_invoice,
        file_path
      }