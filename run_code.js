const fs = require('fs');

// Read the code to execute from a file (which you'll mount into the container)
const codeToRun = fs.readFileSync('/usr/src/app/user_code.js', 'utf8');

try {
    // Safely execute the user's code
    console.log(eval(codeToRun));
} catch (error) {
    // Catch and log any errors
    console.error("Error executing user code:", error.message);
}
