
// { test_id: 4, input_type: '', input_name: '', input_value: '', },


/// Array of strings  -------____________------_____________-----

// Define your start ID, input type, and input name
const startId = 171;
const inputType = 'arrayOfStrings';  // Changed to 'arrayOfStrings'
const inputName = 'inputArray';  // Replace with your actual input name

// Function to log all objects as a single object
function logAllObjectsAsSingleObject() {
    // Retrieve the data from local storage
    const storedData = localStorage.getItem('paramsLog');
    
    // Check if data exists
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    // Parse the data if it's a JSON string
    const dataArray = JSON.parse(storedData);
    
    // Check if data is an array
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    // Create an array to hold all the objects
    const allObjects = [];

    // Iterate over the array and extract information
    dataArray.forEach((item, index) => {
        // Create an object with the predefined values and extracted input value
        const testCaseMatch = item.match(/inputArray:\s*\[([^\]]+)\]/);
        if (testCaseMatch) {
            const inputValueArray = testCaseMatch[1]
                .split(/\s*,\s*/)
                .map(s => s.replace(/["\s]/g, '')); // Clean up the strings
            
            // Convert the array to a JSON string representation
            let inputValueString = JSON.stringify(inputValueArray);
            
            // Replace double quotes with single quotes inside the string
            inputValueString = inputValueString.replace(/"/g, "'");
            
            // Add the constructed object to the array
            allObjects.push({
                test_id: startId + index,
                input_type: inputType,
                input_name: inputName,
                input_value: inputValueString,
            });
        } else {
            console.warn(`No 'inputArray' key found in item ${index + 1}`);
        }
    });

    // Log the array of objects as a single object
    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();




/// arrayOfIntegers  -------____________------_____________-----

const startId = 171;  // Starting ID
const inputType = 'arrayOfIntegers';  // Define your input type
const inputName = 'inputArray';  // Define your input name

function logAllObjectsAsSingleObject() {
    const storedData = localStorage.getItem('paramsLog');
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    const dataArray = JSON.parse(storedData);
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    const allObjects = [];

    dataArray.forEach((item, index) => {
        // Extract integers from the 'inputArray' key
        const valuesMatch = item.match(/inputArray:\s*\[([^\]]+)\]/);
        if (valuesMatch) {
            const inputValueArray = valuesMatch[1]
                .split(/\s*,\s*/)
                .map(s => parseInt(s, 10)); // Convert to integers

            // Convert array to string with spaces after commas
            const formattedInputValue = `[${inputValueArray.join(', ')}]`;

            allObjects.push({
                test_id: startId + index,
                input_type: inputType,
                input_name: inputName,
                input_value: formattedInputValue, // Use the formatted string
            });
        } else {
            console.warn(`No 'inputArray' key found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();




/// strings  -------____________------_____________-----

const startId = 200;  // Starting ID
const inputType = 'string';  // Define your input type
const inputName = 'inputString';  // Define your input inputString

function logAllObjectsAsSingleObject() {
    const storedData = localStorage.getItem('paramsLog');
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    const dataArray = JSON.parse(storedData);
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    const allObjects = [];

    dataArray.forEach((item, index) => {
        // Extract string value from the 'inputString' key
        const stringMatch = item.match(/inputString:\s*"([^"]+)"/);
        if (stringMatch) {
            const inputValue = stringMatch[1];

            allObjects.push({
                test_id: startId + index,
                input_type: inputType,
                input_name: inputName,
                input_value: inputValue, // Directly use the value without additional quotes
            });
        } else {
            console.warn(`No 'inputString' key found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();


/// matrix integers  -------____________------_____________-----

const startId = 205;  // Starting ID
const inputType = 'matrix';  // Define your input type
const inputName = 'matrix';  // Define your input name

function logAllObjectsAsSingleObject() {
    const storedData = localStorage.getItem('paramsLog');
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    const dataArray = JSON.parse(storedData);
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    const allObjects = [];

    dataArray.forEach((item, index) => {
        // Extract 2D array from the 'matrix' key
        const arrayMatch = item.match(/matrix:\s*\[\[([^\]]+)\]\]/);
        if (arrayMatch) {
            // Clean and format the 2D array
            const inputValueArray = arrayMatch[1]
                .split(/\s*,\s*/)
                .map(s => s.split(/\s*\[\s*|\s*\]\s*/).filter(Boolean).map(Number)) // Convert to nested arrays of numbers

            allObjects.push({
                test_id: startId + index,
                input_type: inputType,
                input_name: inputName,
                input_value: JSON.stringify(inputValueArray), // Convert array to JSON string
            });
        } else {
            console.warn(`No 'matrix' key found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();


/// matrix booleans  -------____________------_____________-----

const startId = 205;  // Starting ID
const inputType = 'matrix';  // Define your input type
const inputName = 'matrix';  // Define your input name

function logAllObjectsAsSingleObject() {
    const storedData = localStorage.getItem('paramsLog');
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    const dataArray = JSON.parse(storedData);
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    const allObjects = [];

    dataArray.forEach((item, index) => {
        // Extract 2D array from the 'matrix' key
        const arrayMatch = item.match(/matrix:\s*(\[\[.*\]\])/s);
        if (arrayMatch) {
            // Parse the 2D array directly from the match
            const inputValueArray = JSON.parse(arrayMatch[1].replace(/\n\s*/g, ''));

            // Format the array to have spaces after commas
            const formattedArray = JSON.stringify(inputValueArray)
                .replace(/\],\[/g, '], [')  // Add space after inner arrays
                .replace(/,/g, ', ');       // Add space after each boolean

            allObjects.push({
                test_id: startId + index,
                input_type: inputType,
                input_name: inputName,
                input_value: formattedArray, // Use formatted array
            });
        } else {
            console.warn(`No 'matrix' key found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();



/// multiple number or just number  -------____________------_____________-----

const startId = 225;  // Starting ID
const inputType = 'number';  // Replace with your actual input type

function logAllObjectsAsSingleObject() {
    const storedData = localStorage.getItem('paramsLog');
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    const dataArray = JSON.parse(storedData);
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    const allObjects = [];

    dataArray.forEach((item, index) => {
        const keyValuePairs = item.match(/(\w+):\s*(\d+)/g);
        if (keyValuePairs) {
            keyValuePairs.forEach(pair => {
                const [key, value] = pair.split(': ').map(s => s.trim());
                allObjects.push({
                    test_id: startId + index,
                    input_type: inputType,
                    input_name: key,
                    input_value: value,
                });
            });
        } else {
            console.warn(`No valid key-value pairs found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

logAllObjectsAsSingleObject();


/// Strings

// Define your start ID, input type, and input names
const startId = 250;  // Starting ID
const inputType = 'string';  // Replace with your actual input type

// Function to log all objects as a single object
function logAllObjectsAsSingleObject() {
    // Retrieve the data from local storage
    const storedData = localStorage.getItem('paramsLog');
    
    // Check if data exists
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    // Parse the data if it's a JSON string
    const dataArray = JSON.parse(storedData);
    
    // Check if data is an array
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    // Create an array to hold all the objects
    const allObjects = [];

    // Iterate over the array and extract information
    dataArray.forEach((item, index) => {
        // Extract test case number
        const testCaseNumber = index + 1;
        
        // Extract all key-value pairs from the item
        const keyValuePairs = item.match(/(\w+):\s*"([^"]*)"/g);
        
        if (keyValuePairs) {
            keyValuePairs.forEach(pair => {
                const [key, value] = pair.split(': ').map(s => s.replace(/"/g, '').trim());

                // Add the constructed object to the array
                allObjects.push({
                    test_id: startId + index,
                    input_type: inputType,
                    input_name: key,
                    input_value: value,
                });
            });
        } else {
            console.warn(`No valid key-value pairs found in item ${index + 1}`);
        }
    });

    // Log the array of objects as a single object
    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();



/// arr + 1 num

const startId = 300;  // Starting ID
const inputTypeArray = 'arrayOfIntegers';  // Define your input type for array
const inputNameArray = 'inputArray';  // Define your input name for array
const inputTypeK = 'number';  // Define your input type for k
const inputNameK = 'k';  // Define your input name for k

function logAllObjectsAsSingleObject() {
    const storedData = localStorage.getItem('paramsLog');
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    const dataArray = JSON.parse(storedData);
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    const allObjects = [];

    dataArray.forEach((item, index) => {
        // Extract inputArray and k from each test case
        const arrayMatch = item.match(/inputArray:\s*(\[[^\]]*\])/);
        const kMatch = item.match(/k:\s*(\d+)/);

        if (arrayMatch && kMatch) {
            const inputArray = JSON.parse(arrayMatch[1]);
            const k = kMatch[1]; // Keep as string

            allObjects.push(
                {
                    test_id: startId + index,
                    input_type: inputTypeArray,
                    input_name: inputNameArray,
                    input_value: JSON.stringify(inputArray).replace(/\],\[/g, '], [').replace(/,/g, ', '),
                },
                {
                    test_id: startId + index,
                    input_type: inputTypeK,
                    input_name: inputNameK,
                    input_value: k,
                }
            );
        } else {
            console.warn(`No matching keys found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();






