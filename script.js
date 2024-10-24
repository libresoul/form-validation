function FormSubmit () {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const disease = document.getElementById("disease").value;
    const pin = document.getElementById("pin").value;

    let errorMessage = "";

    if (name === "") {
        errorMessage += "Name cannot be empty";
    }

    if (address === "") {
        errorMessage += "Address cannot be empty";
    }

    if (dob === "") {
        errorMessage += "Date of birth cannot be empty";
    }

    if (age === "") {
        errorMessage += "Age must be a number";
    }
    else if (age.length > 3) {
        errorMessage += "Age cannot exceed 3 digits";
    }

    if (!genderFemale && !genderMale) {
        errorMessage += "Select at least one gender";
    }

    if (disease === "") {
        errorMessage += "Select a disease";
    }

    if (pin.length !== 6) {
        errorMessage += "Pin should have 6 digits";
    }

    if (errorMessage) {
        alert(errorMessage);
    }
}