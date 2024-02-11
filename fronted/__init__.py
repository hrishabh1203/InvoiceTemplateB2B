import os
import subprocess
from subprocess import Popen, PIPE
from subprocess import check_output
from flask import Flask, render_template, request, session, url_for
from werkzeug.utils import redirect
from datetime import date
import requests
# import api_requests
import hashlib
import base64
import json
import api_requests

app = Flask(__name__, template_folder='template')
app.config['SESSION_TYPE'] = 'filesystem1'
app.config['SECRET_KEY'] = '56565666565656665656566656'
app.config['KEY'] = 'Gj78jtgt&dashboardHnbhgd47'
app.config["SESSION_PERMANENT"] = True
@app.route('/upload',methods=['POST'])

def upload():
    if 'images' in request.files:
        file = request.files['images']
        file_path = './static/image/' + file.filename
        file.save(file_path)
        print(file_path)

        response = api_requests.file_path({'username': session.get('username'), 'file_path': file_path })

       
            
        return response
      
    return 'Image upload failed.'



@app.route('/',methods=['GET','POST'])

def index():
    if session.get("auth_data"):
        del session["auth_data"]
    error = ''
    auth_data = {}
    username = request.form.get('username')
    password = request.form.get('password')
    print(username)
    # ip = request.remote_addr
    if username and password:
        # print("hellpo")
        session["username"]=username

        # password = hashlib.md5(password.encode('utf-8')).hexdigest()
        response = api_requests.authorization({'username': username, 'password': password })
        print(response.get('response'))
        if response.get('response') in ['Login Unsuccesful', 'All inputs are required'] or 'forbidden' in response.get('response'):
            error = response.get('response')
        else:
            auth_data = response.get('response')
            print(auth_data)
            session["auth_data"] = auth_data
            session["token"] = 'Bearer654566512 '
            session["username"]=username
                
            return redirect(url_for("dashboard"))
    return render_template('index.html',error=error, auth_data= auth_data, session=session)


@app.route('/dashboard')
def dashboard():
    if not session.get('auth_data'):
        return redirect(url_for("index"))
    return render_template('dashboard.html',session=session)
@app.route('/sidebar')
def sidebar():
    return render_template('sidebar.html',session=session)

@app.route('/invoice')
def invoice():
    if not session.get('auth_data'):
        return redirect(url_for("index"))
    rep_data=api_requests.invoice({'authorization': session.get('token')},{'username':session.get('username')}).get('response')
    return render_template('invoice.html',rep_data=rep_data,session=session)

@app.route('/create_invoice')
def create_invoice():
    if not session.get('auth_data'):
        return redirect(url_for("index"))
    detail=api_requests.details({'authorization': session.get('token')},{'username':session.get('username')}).get('response')
    client=api_requests.client({'authorization': session.get('token')},{'username':session.get('username')}).get('response')

    print(client)
    return render_template('create_invoice.html',session=session,detail=detail,client=client)




@app.route('/client')
def client():
    if not session.get('auth_data'):
        return redirect(url_for("index"))
    rep_data=api_requests.client({'authorization': session.get('token')},{'username':session.get('username')}).get('response')

    return render_template('client.html',rep_data=rep_data,session=session)

@app.route('/creadit')
def creadit():
    if not session.get('auth_data'):
        return redirect(url_for("index"))
    rep_data=api_requests.credit({'authorization': session.get('token')},{'username':session.get('username')}).get('response')

    print(rep_data)
    return render_template('creadit_note.html',rep_data=rep_data,session=session)

@app.route('/signup')
def signup():

    return render_template('signup.html')

@app.route('/forget')
def forget():
    return render_template('forget.html')

@app.route('/invoicetheme')
def invoicetheme1():
    return render_template('./invoiceTemplate/invoicetheme.html')

@app.route('/template1')
def template1():
    return render_template('./invoiceTemplate/template1.html')

@app.route('/template2')
def template2():
    return render_template('./invoiceTemplate/template2.html')

@app.route('/template3')
def template3():
    return render_template('./invoiceTemplate/template3.html')

@app.route('/credit')
def credit():
    if not session.get('auth_data'):
        return redirect(url_for("index"))
    detail=api_requests.details({'authorization': session.get('token')},{'username':session.get('username')}).get('response')
    client=api_requests.client({'authorization': session.get('token')},{'username':session.get('username')}).get('response')

    print("aaaaaaa",detail)
    return render_template('credit.html',session=session,detail=detail,client=client)


@app.route('/profile_create')
def profile_create():
    if not session.get('auth_data'):
        return redirect(url_for("index"))
    return render_template('profile_create.html')

@app.route('/Inventry')
def Inventry():
    return render_template('Inventry.html')

@app.route('/admin')
def admin():
    
    if not session.get('auth_data'):
        return redirect(url_for("index"))
    userdata=api_requests.userdata({'authorization': session.get('token')},{'username':session.get('username')}).get('response')
    return render_template('admin.html',userdata=userdata)

# @app.route('/dashboard')
# def dashboard():
#     return render_template('dashboard.html')
if __name__ == '__main__':
     # app.run(debug=True, host="0.0.0.0", port="80", threaded=True)
    app.run(debug=True, port="8080", threaded=True)


# ... (previous code)

@app.route('/save_profile', methods=['POST'])
def save_profile():
    if request.method == 'POST':
        profile_data = request.form.to_dict()

        return jsonify({"response": "Profile data saved successfully"})
    else:
        return jsonify({"response": "Invalid request method"})

# ... (remaining code)
