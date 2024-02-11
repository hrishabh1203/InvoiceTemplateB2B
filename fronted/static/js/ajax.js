
const local_url = "http://localhost:8080/api/v1/";


function create_invoice() {
    var amount = $('.t-amount').html();
    var invoice_date = $('#invoice_date').val();
    var due_date = $('#due_date').val();
    var invoice_no = $('#invoice_no').val();
    var username = $('#username').html();
    var billed_to = $('#billed_to option:selected').val();
    // alert(billed_to)
    // alert(savrPro)
    // $.ajaxSetup({
    //     headers:{
    //        'Authorization': window.token
    //     }
    //  });
    $.post(local_url + "create_invoice",
        {
            username: username,
            amount: amount,
            invoice_date: invoice_date,
            due_date: due_date,
            invoice_no: invoice_no,
            billed_to: billed_to,



        },
        function (data, status) {
            // alert(status);
            console.log(data);
            var resp = JSON.parse(data);
            console.log(resp);
            if (status = 'success') {
                alert("Succesfully!!");

            }
            else {
                alert(resp.response);
            }
        });

}

function add_client() {
    var client = $('#client').val();
    var industry = $('#industry').val();
    var city = $('#city').val();
    var position = $('#Position').val();
    var vat = $('#vat').val();
    var username = $('#username').html();
    var state = $('#state').val();
    var zip = $('#zip').val();
    var steet = $('#steet').val();
    var Nick = $('#Nick').val();
    var Email = $('#Email').val();
    var Key = $('#Key').val();
    var Number = $('#Number').val();
    var s_country = $('#s_country option:selected').val();
    var account_holder = $('#account_h').val();
    var account_no = $('#account_n').val();
    var ifsc = $('#ifsc').val();
    var swift = $('#swift').val();
    var bank = $('#bank').val();
    var gst = $('#gst').val();
    var pan = $('#pan').val();

    $.post(local_url + "add_client",
        {
            username: username,
            position: position,
            office: city,
            Business_name: client,
            country: s_country,
            state: state,
            street_address: steet,
            business_alias: Nick,
            unique_key: Key,
            number: Number,
            email: Email,
            vat: vat,
            zip: zip,
            industry: industry,
            account_h_name: account_holder,
            account_no: account_no,
            ifsc_code: ifsc,
            swift: swift,
            bank: bank,
            gst: gst,
            pan: pan,
        },
        function (data, status) {
            // alert(status);
            console.log(data);
            var resp = JSON.parse(data);
            console.log(resp);
            if (resp.response == 'Client added !!!') {
                alert("Succesfully!!", "Successfully updated", "success");
                resetModalFields()
            }
            else {
                dangeralert(resp.response);
            }
        });

}

function resetModalFields() {
    $('#client').val('')
    $('#industry').val('')
    $('#city').val('')
    $('#Position').val('')
    $('#vat').val('');
    $('#username').html('')
    $('#state').val('')
    $('#zip').val('');
    $('#steet').val('')
    $('#Nick').val('')
    $('#Email').val('')
    $('#Key').val('');
    $('#Number').val('')
    $('#s_country option:selected').val('')
    $('#account_h').val('')
    $('#account_n').
    $('#ifsc').val('')
    $('#swift').val('')
    $('#bank').val('')
    $('#gst').val('');
    $('#pan').val('');
}


function fetch_client() {

    var billed_to = $('#billed_to option:selected').val();
    $.get(local_url + "client_show",
        {
            Business_name: billed_to,
        },


        function (data) {

            var resp = JSON.parse(data);
            const storedata = resp.response;
            console.log(storedata)
            for (let i = 0; i < storedata.length; i++) {
                detail_data = storedata[i]
            }
            let clientD = document.querySelector('.billed_2').querySelector('.Billed_size').children



            for (const x in clientD) {
                if (x == 0) {
                    if (detail_data.Business_name) {
                        clientD[x].classList.replace('d-none', 'd-flex')
                        clientD[x].lastElementChild.innerText = detail_data.Business_name
                    } else {
                        clientD[x].classList.replace('d-flex', 'd-none')
                    }
                }

                if (x == 1) {

                    let val = ''

                    if (detail_data.state) {
                        val = detail_data.state
                    }
                    if (detail_data.zip) {
                        val = val ? `${val}, ${detail_data.zip}` : detail_data.zip
                    }
                    if (detail_data.country) {
                        val = val ? `${val}, ${detail_data.country}` : detail_data.country
                    }
                    if (detail_data.street_address) {
                        val = val ? `${val}, ${detail_data.street_address}` : detail_data.street_address
                    }


                    if (val) {
                        clientD[x].classList.replace('d-none', 'd-flex')
                        clientD[x].lastElementChild.innerText = val
                    } else {
                        clientD[x].classList.replace('d-flex', 'd-none')
                    }
                }

                if (x == 2) {

                    if (detail_data.gst) {
                        clientD[x].classList.replace('d-none', 'd-flex')
                        clientD[x].lastElementChild.innerText = detail_data.gst
                    } else {
                        clientD[x].classList.replace('d-flex', 'd-none')
                    }
                }

                if (x == 3) {
                    if (detail_data.pan) {
                        clientD[x].classList.replace('d-none', 'd-flex')
                        clientD[x].lastElementChild.innerText = detail_data.pan
                    } else {
                        clientD[x].classList.replace('d-flex', 'd-none')
                    }
                }

                if (x == 4) {
                    if (detail_data.vat) {
                        clientD[x].classList.replace('d-none', 'd-flex')
                        clientD[x].lastElementChild.innerText = detail_data.vat
                    } else {
                        clientD[x].classList.replace('d-flex', 'd-none')
                    }
                }
            }


        });

}

function register() {
    var bussiness_name = $('#bn').val();
    console.log(bussiness_name)
    var password = $('#password').val();
    var address = $('#address').val();
    var email = $('#email').val();
    var name = $('#name').val();
    var num = $('#num').val();
    var bc = $('#bc').val();

    alert(bussiness_name)
    $.post(local_url + "register",
        {
            bussiness_name: bussiness_name,
            username: name,
            password: password,
            address: address,
            number: num,
            email: email,
            bussiness_category: bc,




        },
        function (data, status) {
            // alert(status);
            console.log(data);
            var resp = JSON.parse(data);
            console.log(resp);
            if (status = 'success') {
                alert("Succesfully!!");

            }
            else {
                alert(resp.response);
            }
        });

}


function save_profile() {
    // Retrieve profile data from the form
    var bussiness_name = $('#bussiness_name').val();
    var address = $('#address').val();
    var email = $('#email').val();
    var name = $('#name').val();
    var num = $('#num').val();
    var bc = $('#bc').val();

    // Send a POST request to save the profile data
    $.post(local_url + "save_profile",
        {
            bussiness_name: bussiness_name,
            address: address,
            email: email,
            username: name,
            number: num,
            bussiness_category: bc,
        },
        function (data, status) {
            console.log(data);
            var resp = JSON.parse(data);
            if (status === 'success') {
                alert("Profile data saved successfully!");
            } else {
                alert(resp.response);
            }
        }
    );
}
