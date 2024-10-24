function FormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("addr").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    let gender;
    const disease = document.getElementById("disease").value;
    const email = document.getElementById("email").value;
    const pin = document.getElementById("pin").value;

    // using extended regular expressions for pattern matching :)
    const nameRegex = /^[A-Za-z]+(\s[a-z]+)?$/;
    const emailRegex = /^([A-Za-z])+[0-9]*(\.[A-Za-z0-9]+)*\@[A-Za-z]+\.[A-Za-z]{2,}$/;
    const ageRegex = /^[0-9]{1,2}$/
    const pinRegex = /^\d+$/;

    clearErrors();


    let errorMessages = [];

    if (name === "") {
        errorMessages.push("Name cannot be empty");
        document.getElementById("nameError").textContent = "Name cannot be empty";
    }
    else if (!nameRegex.test(name)) {
        errorMessages.push("Invalid Name: Name should only contain letters and spaces");
        document.getElementById("nameError").textContent = "Invalid Name: Name should only contain letters and spaces";
    }

    if (address === "") {
        errorMessages.push("Address cannot be empty");
        document.getElementById("addrError").textContent = "Address cannot be empty";
    }

    if (dob === "") {
        errorMessages.push("Date of birth cannot be empty");
        document.getElementById("dobError").textContent = "Date of birth cannot be empty";
    }

    if (age === "") {
        errorMessages.push("Age must be a number");
        document.getElementById("ageError").textContent = "Age must be a number";
    }
    else if (!ageRegex.test(age)) {
        errorMessages.push("Invalid age")
        document.getElementById("ageError").textContent = "Invalid age";
    }

    if (!genderFemale && !genderMale) {
        errorMessages.push("Select at least one gender");
        document.getElementById("genderError").textContent = "Select at least one gender";
    }
    else if (genderMale) {
        gender = "Male";
    }
    else {
        gender = "Female";
    }

    if (disease === "0") {
        errorMessages.push("Select a disease");
        document.getElementById("diseaseError").textContent = "Select a disease";
    }

    if (email === "") {
        errorMessages.push("Email cannot be empty");
        document.getElementById("emailError").textContent = "Email cannot be empty";
    }
    else if (!emailRegex.test(email)) {
        errorMessages.push("Invalid email");
        document.getElementById("emailError").textContent = "Invalid email";
    }

    if (pin.length !== 6) {
        errorMessages.push("Pin should contain 6 digits");
        document.getElementById("pinError").textContent = "Pin should contain 6 digits";
    }
    else if (!pinRegex.test(pin)) {
        errorMessages.push("Pin should only contain digits");
        document.getElementById("pinError").textContent = "Pin should only contain digits";
    }

    if (errorMessages.length > 0) {
        alert("Form is not valid");
        event.preventDefault();
        return false;
    }
    else {
        const outdiv = document.getElementById("output");
        outdiv.innerHTML = (
`Name: ${name}<br>
Address: ${address}<br>
Birth Date: ${dob} <br>
Age: ${age} <br>
Gender: ${gender} <br>
Disease: ${disease}<br>
Email: ${email}<br>
`
        )

    function clearErrors() {
            document.querySelectorAll('.error').forEach(function(element) {
                element.textContent = '';
            });
        }
}
