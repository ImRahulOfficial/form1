function validateForm () {
  const name = document.getElementById('name').value
  const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const genderMale = document.getElementById('gender_male').checked;
    const genderFemale = document.getElementById('gender_female').checked;
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;
    const address = document.getElementById('address').value;

  console.log(name)
  let isValid = true
  if (!name) {
    document.getElementById('message_name').innerHTML = 'Name is required.'
    isValid = false
  } else {
    document.getElementById('message_name').innerHTML = ''
    isValid = true
  }
   
   if (!username) {
        document.getElementById('message_username').innerHTML = "Username is required.";
        isValid = false;
    }else{
       document.getElementById('message_username').innerHTML = "";
       isValid = true;
    }
    
    if (!password) {
        document.getElementById('message_password').innerHTML = "Password is required.";
        isValid = false;
    }else{
        document.getElementById('message_password').innerHTML = "";
        isValid = true;
     }


    if (!age) {
        document.getElementById('message_age').innerHTML = "Age is required.";
        isValid = false;
    }else{
        document.getElementById('message_age').innerHTML = "";
        isValid = true;
     }

    if (!email) {
        document.getElementById('message_email').innerHTML = "Email is required.";
        isValid = false;
    }else{
        document.getElementById('message_email').innerHTML = "";
        isValid = true;
     }

    if (!phone) {
        document.getElementById('message_phone').innerHTML = "Phone number is required.";
        isValid = false;
    }else{
        document.getElementById('message_phone').innerHTML = "";
        isValid = true;
    }

    if (!genderMale && !genderFemale) {
        document.getElementById('message_gender').innerHTML = "Gender is required.";
        isValid = false;
    }else{
        document.getElementById('message_gender').innerHTML = "";
        isValid = true;
    }

    if (!dob) {
        document.getElementById('message_dob').innerHTML = "Date of birth is required.";
        isValid = false;
    }else{
        document.getElementById('message_dob').innerHTML = "";
        isValid = true;
    }

    if (!course) {
        document.getElementById('message_course').innerHTML = "Course is required.";
        isValid = false;
    }else{
        document.getElementById('message_course').innerHTML = "";
        isValid = true;
    }

    if (!address) {
        document.getElementById('message_address').innerHTML = "Address is required.";
        isValid = false;
    }else{
        document.getElementById('message_addressf').innerHTML = "";
        isValid = true;
    }



  const successMessageElement = document.getElementById('success_message')

  if (isValid) {
    successMessageElement.innerHTML = 'Form successfully submitted!';
  } else {
    successMessageElement.innerHTML = '';
  }

  return isValid
}
