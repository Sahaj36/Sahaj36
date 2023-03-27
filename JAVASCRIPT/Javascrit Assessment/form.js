function reg_ex() {
    let reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById('email').value;

    if (reg_email.test(email)) {
        document.getElementById('msg11').innerHTML = ''
        return false;
    } else {
        document.getElementById('msg11').innerHTML = 'Enter Email Properly'
        return false;
    }

}

function reg_fname() {
    let reg_fname = /^[A-Za-z]+$/;
    let fname = document.getElementById('fname').value;

    if (reg_fname.test(fname)) {
        document.getElementById('msg1').innerHTML = ''
        return false;
    } else {
        document.getElementById('msg1').innerHTML = 'Digits Are Not Allowed';
        return false;
    }
}
function reg_mname() {
    let reg_mname = /^[A-Za-z]+$/;
    let mname = document.getElementById('mname').value;

    if (reg_mname.test(mname) == false) {
        document.getElementById('msg2').innerHTML = 'Digits Are Not Allowed'
        return false;
    }
}

function reg_lname() {
    let reg_lname = /^[A-Za-z]+$/;
    let lname = document.getElementById('lname').value;

    if (reg_lname.test(lname) == false) {
        document.getElementById('msg3').innerHTML = 'Digits Are Not Allowed'
        return false
    }
}

function reg_mobile() {
    let reg_mobile = /^[0-9]+$/;
    let mobile = document.getElementById('mobile').value;

    if (reg_mobile.test(mobile) == false) {
        document.getElementById('msg10').innerHTML = 'Alphabates Are Not Allowed'
        return false
    }
}

function reg_pass() {
    let reg_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    let pass = document.getElementById('pass'),value;

    if (reg_pass.test(pass)) {
        document.getElementById('msg12').innerHTML = ''
        return false;
    }
    else {
        document.getElementById('msg12').innerHTML = 'Enter Between 8-12 Character with(! @ # $ _ & *)'
        return false;
    }
}

function reg_cpass() {
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;

    if (pass === cpass) {
        document.getElementById('msg13').innerHTML = ''
        return false
    } else {
        document.getElementById('msg13').innerHTML = 'Both Password Are Not Same'
        return false
    }
}

function form_valid() {
    let fname = document.getElementById('fname').value;
    let mname = document.getElementById('mname').value;
    let lname = document.getElementById('lname').value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let other = document.getElementById('other').checked;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    let mobile = document.getElementById('pincode').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;

    if (fname == '' && mname == '' && lname == '' && male == false && female == false && other == false && address == '' && pincode == '' && state == '' && country == '' && dob == '' && mobile == '' && email == '' && pass == '' && cpass == '') {

        document.getElementById('msg1').innerHTML = 'Enter Your First Name';
        document.getElementById('msg2').innerHTML = 'Enter Your Middle Name';
        document.getElementById('msg3').innerHTML = 'Enter Your Last Name';
        document.getElementById('msg4').innerHTML = 'Select Gender';
        document.getElementById('msg5').innerHTML = 'Enter Address';
        document.getElementById('msg6').innerHTML = 'Enter Pincode';
        document.getElementById('msg7').innerHTML = 'Enter State';
        document.getElementById('msg8').innerHTML = 'Enter Country';
        document.getElementById('msg9').innerHTML = 'Enter DOB';
        document.getElementById('msg10').innerHTML = 'Enter Mobile No';
        document.getElementById('msg11').innerHTML = 'Enter Email Id';
        document.getElementById('msg12').innerHTML = 'Enter Password';
        document.getElementById('msg13').innerHTML = 'Enter Confirm Password';
        return false;
    }
}

function show_pass() {
    let pass = document.getElementById('pass');
    let cpass = document.getElementById('cpass');

    if (pass.type == "password" && cpass.type == "password") {
        pass.type = "text";
        cpass.type = "text";
        return false;

    } else {
        pass.type = "password";
        cpass.type = "password";
        return false;
    }

}