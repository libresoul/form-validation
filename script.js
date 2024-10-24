function FormSubmit() {
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


    let errorMessages = [];

    if (name === "") {
        errorMessages.push("Name cannot be empty");
    }
    else if (!nameRegex.test(name)) {
        errorMessages.push("Invalid Name: Name should only contain letters and spaces");
    }

    if (address === "") {
        errorMessages.push("Address cannot be empty");
    }

    if (dob === "") {
        errorMessages.push("Date of birth cannot be empty");
    }

    if (age === "") {
        errorMessages.push("Age must be a number");
    }
    else if (!ageRegex.test(age)) {
        errorMessages.push("Invalid age")
    }

    if (!genderFemale && !genderMale) {
        errorMessages.push("Select at least one gender");
    }
    else if (genderMale) {
        gender = "Male";
    }
    else {
        gender = "Female";
    }

    if (disease === "") {
        errorMessages.push("Select a disease");
    }

    if (email === "") {
        errorMessages.push("Email cannot be empty");
    }
    else if (!emailRegex.test(email)) {
        errorMessages.push("Invalid email");
    }

    if (pin.length !== 6) {
        errorMessages.push("Pin should contain 6 digits");
    }
    else if (!pinRegex.test(pin)) {
        errorMessages.push("Pin should only contain digits");
    }

    if (errorMessages) {
        alert(errorMessages.join("\n"));
        return false;
    }
}
