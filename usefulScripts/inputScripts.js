
// { test_id: 4, input_type: '', input_name: '', input_value: '', },



/// Array of strings -------____________------_____________-----
//#region 
const startId = 880;  // Define your starting ID

// Function to log each object formatted as a single JSON-like structure
function logAllObjectsIndividually() {
    // Retrieve the data from local storage
    const storedData = localStorage.getItem('paramsLog');
    
    // Check if data exists
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    // Parse the data if it's a JSON string
    let dataArray;
    try {
        dataArray = JSON.parse(storedData);
    } catch (e) {
        console.error('Error parsing JSON data:', e);
        return;
    }
    
    // Check if data is an array
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    // Define regex pattern for 'arrayOfStrings'
    const arrayOfStringsPattern = /(\w+):\s*\[([^\]]+)\]/g;

    // Accumulate all object strings into a single array
    const objectStrings = [];

    // Iterate over the array and extract information
    dataArray.forEach((item, index) => {
        let foundMatch = false;
        let match;
        while ((match = arrayOfStringsPattern.exec(item)) !== null) {
            const [fullMatch, key, value] = match;

            // Extract the array part from the matched group
            const inputValueArray = value
                .split(/\s*,\s*/)
                .map(s => s.replace(/["\s]/g, '')); // Clean up the strings

            // Convert the array to a string with single quotes for the entire array
            const inputValueString = `'["${inputValueArray.join('","')}"]'`;

            // Manually format each object
            const objString = `{
    "test_id": ${startId + index},
    "input_type": "arrayOfStrings",
    "input_name": "${key}",
    "input_value": ${inputValueString}
}`;

            // Add the formatted object string to the array
            objectStrings.push(objString);
            foundMatch = true;  // Set flag to true if a match is found
        }

        if (!foundMatch) {
            console.warn(`No 'arrayOfStrings' key found in item ${index + 1}`);
        }
    });

    // Join all object strings with commas and print as a single string
    if (objectStrings.length > 0) {
        // Join all object strings with commas and no extra characters
        console.log(objectStrings.join(',\n'));
    }
}

// Call the function to log all objects together
logAllObjectsIndividually();

//#endregion


/// Array of strings or matrix -------____________------_____________-----
//#region 


const startId = 880;  // Define your starting ID

// Function to log each object formatted as a single JSON-like structure
function logAllObjectsIndividually() {
    // Retrieve the data from local storage
    const storedData = localStorage.getItem('paramsLog');
    
    // Check if data exists
    if (!storedData) {
        console.error('No data found in local storage.');
        return;
    }

    // Parse the data if it's a JSON string
    let dataArray;
    try {
        dataArray = JSON.parse(storedData);
    } catch (e) {
        console.error('Error parsing JSON data:', e);
        return;
    }
    
    // Check if data is an array
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect.');
        return;
    }

    // Define regex patterns for 'arrayOfStrings' and 'matrix'
    const arrayOfStringsPattern = /(\w+):\s*\[(\s*[\d\w#"]+\s*(?:,\s*[\d\w#"]+\s*)*)\]/g;
    const matrixPattern = /(\w+):\s*\[\[(.*?)\]\]/gs;

    // Accumulate all object strings into a single array
    const objectStrings = [];

    // Iterate over the array and extract information
    dataArray.forEach((item, index) => {
        let foundMatch = false;
        let match;

        // First, try to match matrices
        while ((match = matrixPattern.exec(item)) !== null) {
            const [fullMatch, key, value] = match;

            // Clean up and format the matrix correctly
            const formattedMatrix = value.trim().replace(/\s+/g, '');

            // Manually format each object
            const objString = `{
    "test_id": ${startId + index},
    "input_type": "matrix",
    "input_name": "${key}",
    "input_value": '[["${formattedMatrix.replace(/\]\[/g, '"],["')}"]]'
}`;

            // Add the formatted object string to the array
            objectStrings.push(objString);
            foundMatch = true;  // Set flag to true if a match is found
        }

        // If no matrix found, try to match arrays of strings
        if (!foundMatch) {
            while ((match = arrayOfStringsPattern.exec(item)) !== null) {
                const [fullMatch, key, value] = match;

                // Extract the array part from the matched group
                const inputValueArray = value
                    .split(/\s*,\s*/)
                    .map(s => s.replace(/["\s]/g, '')); // Clean up the strings

                // Convert the array to a string with single quotes for the entire array
                const inputValueString = `'["${inputValueArray.join('","')}"]'`;

                // Manually format each object
                const objString = `{
    "test_id": ${startId + index},
    "input_type": "arrayOfStrings",
    "input_name": "${key}",
    "input_value": ${inputValueString}
}`;

                // Add the formatted object string to the array
                objectStrings.push(objString);
                foundMatch = true;  // Set flag to true if a match is found
            }
        }

        if (!foundMatch) {
            console.warn(`No 'arrayOfStrings' or 'matrix' key found in item ${index + 1}`);
        }
    });

    // Join all object strings with commas and print as a single string
    if (objectStrings.length > 0) {
        // Join all object strings with commas and no extra characters
        console.log(objectStrings.join(',\n'));
    }
}

// Call the function to log all objects together
logAllObjectsIndividually();

//#endregion


/// arrayOfIntegers  -------____________------_____________----- input name by hand
//#region 
const startId = 171;  // Starting ID
const inputType = 'arrayOfIntegers';  // Define your input type
const inputName = 'rectangle';  // Define your input name

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
        // Extract integers from the 'rectangle' key
        const valuesMatch = item.match(/rectangle:\s*\[([^\]]+)\]/);
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
            console.warn(`No 'rectangle' key found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();
//#endregion


/// strings  -------____________------_____________-----
//#region 
// Define your start ID and input type
const startId = 711;  // Starting ID
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
    let dataArray;
    try {
        dataArray = JSON.parse(storedData);
    } catch (e) {
        console.error('Failed to parse JSON data:', e);
        return;
    }

    // Check if data is an array
    if (!Array.isArray(dataArray)) {
        console.error('Data format is incorrect. Expected an array.');
        return;
    }

    // Create an array to hold all the objects
    const allObjects = [];

    // Regular expression to match key-value pairs with optional quotes
    const keyValuePattern = /(\w+):\s*["']([^"']*)["']/g;

    // Iterate over the array and extract information
    dataArray.forEach((item, index) => {
        console.log(`Processing item ${index + 1}: ${item}`); // Debugging: Log each item
        
        let match;
        let foundAny = false;

        while ((match = keyValuePattern.exec(item)) !== null) {
            const key = match[1];        // Extracted key
            const value = match[2];      // Extracted value

            // Add the constructed object to the array
            allObjects.push({
                test_id: startId + index,
                input_type: inputType,
                input_name: key,
                input_value: value,
            });

            foundAny = true;
        }

        if (!foundAny) {
            console.warn(`No valid key-value pairs found in item ${index + 1}`);
        }
    });

    // Log the array of objects as a single object
    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();
//#endregion


/// matrix integers  -------____________------_____________----- input name by hand
//#region 
const startId = 464;  // Starting ID
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
        const arrayMatch = item.match(/matrix:\s*\[\[([\s\S]*?)\]\]/);
        if (arrayMatch) {
            // Clean and format the 2D array
            const cleanedArray = arrayMatch[1]
                .replace(/\[\s*([^\[\]]+?)\s*\]/g, '[$1]')  // Remove extra brackets
                .split(/\]\s*,\s*\[/g)  // Split rows by '],['
                .map(row => row
                    .replace(/^\[|\]$/g, '')  // Remove surrounding brackets
                    .split(/\s*,\s*/)  // Split by commas
                    .map(Number)  // Convert to numbers
                );

            // Convert cleaned array to JSON string
            const formattedArray = JSON.stringify(cleanedArray);

            allObjects.push({
                test_id: startId + index,
                input_type: inputType,
                input_name: inputName,
                input_value: formattedArray,
            });
        } else {
            console.warn(`No 'matrix' key found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();
//#endregion 


/// matrix booleans  -------____________------_____________----- input name by hand
//#region 
const startId = 205;  // Starting ID
const inputType = 'matrix';  // Define your input type
const inputName = 'adj';  // Define your input name

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
        // Extract 2D array from the 'adj' key
        const arrayMatch = item.match(/adj:\s*(\[\[.*\]\])/s);
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
            console.warn(`No 'adj' key found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();
//#endregion


/// multiple number or just number  -------____________------_____________-----
//#region 
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
//#endregion


/// Strings  -------____________------_____________-----  -------____________------_____________-----
//#region 
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
//#endregion


/// arr + 1 num  -------____________------_____________-----  -------____________------_____________-----
//#region 
const startId = 300;  // Starting ID
const inputTypeArray = 'arrayOfIntegers';  // Define your input type for array
const inputNameArray = 'votes';  // Define your input name for array
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
        // Extract votes and k from each test case
        const arrayMatch = item.match(/votes:\s*(\[[^\]]*\])/);
        const kMatch = item.match(/k:\s*(\d+)/);

        if (arrayMatch && kMatch) {
            const votes = JSON.parse(arrayMatch[1]);
            const k = kMatch[1]; // Keep as string

            allObjects.push(
                {
                    test_id: startId + index,
                    input_type: inputTypeArray,
                    input_name: inputNameArray,
                    input_value: JSON.stringify(votes).replace(/\],\[/g, '], [').replace(/,/g, ', '),
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
//#endregion


/// more Boolean  -------____________------_____________-----  -------____________------_____________----- input name by hand
//#region 

const startId = 500;  // Starting ID (you can adjust as needed)
const inputType = 'boolean';  // Define your input type
const inputNames = ['young', 'beautiful', 'loved'];  // Define the input names

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
        // Extract key-value pairs from each item
        const keyValuePairs = item.match(/(\w+):\s*(true|false)/g);
        if (keyValuePairs) {
            keyValuePairs.forEach(pair => {
                const [key, value] = pair.split(': ').map(s => s.trim());

                if (inputNames.includes(key)) {
                    allObjects.push({
                        test_id: startId + index,
                        input_type: inputType,
                        input_name: key,
                        input_value: value,
                    });
                }
            });
        } else {
            console.warn(`No valid key-value pairs found in item ${index + 1}`);
        }
    });

    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject();
//#endregion


/// nums + strings + booleans(not tested yet) + arr of ingeres
//#region 
const startId = 776;  // Define your starting ID

// Define your input types and their corresponding regex patterns
const inputTypes = {
    number: /(\w+):\s*(\d+)/g,
    string: /(\w+):\s*"([^"]*)"/g,
    boolean: /(\w+):\s*(true|false)/g,      // Example pattern for booleans
    arrayOfIntegers: /(\w+):\s*\[([^\]]+)\]/g,  // Pattern to match arrayOfIntegers and capture the key
    // Add more types and patterns as needed
};

// Function to log all objects as a single object
function logAllObjectsAsSingleObject(startId) {
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
        Object.keys(inputTypes).forEach(inputType => {
            const regex = inputTypes[inputType];
            let match;
            while ((match = regex.exec(item)) !== null) {
                const [fullMatch, key, value] = match;

                let inputValue;
                if (inputType === 'arrayOfIntegers') {
                    // Special handling for arrayOfIntegers
                    const inputValueArray = value.split(/\s*,\s*/).map(s => parseInt(s, 10)); // Convert to integers
                    inputValue = `[${inputValueArray.join(', ')}]`; // Convert array to string with spaces after commas
                } else {
                    inputValue = value.trim();
                }

                // Add the constructed object to the array
                allObjects.push({
                    test_id: startId + index,
                    input_type: inputType,
                    input_name: key.trim(),  // Use the extracted key as input_name
                    input_value: inputValue,
                });
            }
        });

        if (allObjects.length === 0) {
            console.warn(`No valid key-value pairs found in item ${index + 1}`);
        }
    });

    // Log the array of objects as a single object
    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject(startId);
//#endregion


// matrix included
//#region 
const startId = 776;  // Define your starting ID

// Define your input types and their corresponding regex patterns
const inputTypes = {
    number: /(\w+):\s*(\d+)/g,
    string: /(\w+):\s*"([^"]*)"/g,
    boolean: /(\w+):\s*(true|false)/g,
    matrix: /(\w+):\s*\[\[(.*?)\]\]/gs,  // Pattern to match matrices, including empty arrays
    arrayOfIntegers: /(\w+):\s*\[([^\[\]]*)\]/g,  // Pattern to match arrayOfIntegers, allowing empty arrays
};

// Function to log all objects as a single object
function logAllObjectsAsSingleObject(startId) {
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
        Object.keys(inputTypes).forEach(inputType => {
            const regex = inputTypes[inputType];
            let match;
            while ((match = regex.exec(item)) !== null) {
                const [fullMatch, key, value] = match;

                let inputValue;
                if (inputType === 'matrix') {
                    // Special handling for matrices
                    const rows = value.split(/\s*\],\s*\[/).map(row => 
                        row.trim() === '' ? [] : row.split(/\s*,\s*/).map(s => parseInt(s, 10))
                    );
                    inputValue = `[${rows.map(row => `[${row.join(', ')}]`).join(', ')}]`;
                } else if (inputType === 'arrayOfIntegers') {
                    // Special handling for arrayOfIntegers, allowing empty arrays
                    const inputValueArray = value.trim() === '' ? [] : value.split(/\s*,\s*/).map(s => parseInt(s, 10));
                    inputValue = `[${inputValueArray.join(', ')}]`;
                } else {
                    inputValue = value.trim();
                }

                // Add the constructed object to the array
                allObjects.push({
                    test_id: startId + index,
                    input_type: inputType,
                    input_name: key.trim(),  // Use the extracted key as input_name
                    input_value: inputValue,
                });
            }
        });

        if (allObjects.length === 0) {
            console.warn(`No valid key-value pairs found in item ${index + 1}`);
        }
    });

    // Log the array of objects as a single object
    console.log({ allObjects });
}

// Call the function to log all objects
logAllObjectsAsSingleObject(startId);
//#endregion

