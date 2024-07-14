function validateForm() {
    // Define regular expressions to check for special characters and numbers
    let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let numbers = /[0-9]/;

    // Get all the values input
    let firstNameEl = document.forms["contact"]["firstname"];
    let lastNameEl = document.forms["contact"]["lastname"];
    let messageEl = document.forms["contact"]["message"];

    let firstNameError = document.getElementById('firstNameError');
    let lastNameError = document.getElementById('lastNameError');
    let messageError = document.getElementById('messageError');

    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let message = messageEl.value;

    // Used for input into write to file
    let country = document.forms['contact']['country'].value
    let category = document.forms['contact']['category'].value

    // Make booleans to check for specific issues for a descriptive alert message
    let fnameValid = true;
    let lnameValid = true;
    let messageValid = true;

    // First Name Validation
    // Requirements: must not be empty, must not include special characters or numbers
    if (firstName === "") {
        fnameValid = false;
    } else if (specialChars.test(firstName)) {
        fnameValid = false;
    } else if (numbers.test(firstName)) {
        fnameValid = false;
    }

    // Last Name Validation
    // Requirements: must not be empty, must not include special characters or numbers
    if (lastName === "") {
        lnameValid = false;
    } else if (specialChars.test(lastName)) {
        lnameValid = false;
    } else if (numbers.test(lastName)) {
        lnameValid = false;
    }

    // Message Validation
    // Requirements: must be between 30 and 500 characters inclusive
    if (message.length < 30 || message.length > 500) {
        messageValid = false;
    }

    console.log("First Name:", firstName, "Valid:", fnameValid);
    console.log("Last Name:", lastName, "Valid:", lnameValid);
    console.log("Message:", message, "Valid:", messageValid);

    // Check if all booleans are true
    if (fnameValid && lnameValid && messageValid) {
        writeToFile(firstName, lastName, country, category, message)
        return true;
    } else {
        
        if (fnameValid != true) {
            firstNameEl.classList.add('invalid');
            firstNameError.classList.add('unhide');
            
        } else {
            firstNameEl.classList.remove('invalid');
            firstNameError.classList.remove('unhide');
        }
        if (!lnameValid) {
            lastNameEl.classList.add('invalid');
            lastNameError.classList.add('unhide');
            
        } else {
            lastNameEl.classList.remove('invalid');
            lastNameError.classList.remove('unhide');
        }
        if (!messageValid) {
            messageEl.classList.add('invalid');
            messageError.classList.add('unhide');
            
        } else {
            messageEl.classList.remove('invalid');
            // messageError.classList.remove('unhide');
        }

        return false;
    }
}

// Without use a server-side language I cant download it to the host's directory
// So the file just saves locally right now
function writeToFile(firstName, lastName, country, category, message) {
    // Construct the text content
    const content = `First Name: ${firstName}\nLast Name: ${lastName}\nCountry: ${country}\nCategory: ${category}\nMessage: ${message}`;

    // Create a blob from the content
    const blob = new Blob([content], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'contact_form.txt';

    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}
