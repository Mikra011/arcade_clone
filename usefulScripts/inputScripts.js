
// { test_id: 4, input_type: '', input_name: '', input_value: '', },


/// Array of strings  -------____________------_____________-----

const startId = 480;
const inputType = 'arrayOfStrings';
const inputName = 'a';

// Function to log each object individually in the specified format
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

    // Iterate over the array and extract information
    dataArray.forEach((item, index) => {
        // Assuming 'item' is a string containing JSON-like data
        const testCaseMatch = item.match(/a:\s*\[([^\]]+)\]/);
        if (testCaseMatch) {
            // Extract the array part from the matched group
            const inputValueArray = testCaseMatch[1]
                .split(/\s*,\s*/)
                .map(s => s.replace(/["\s]/g, '')); // Clean up the strings

            // Convert the array to a string with single quotes for the entire array
            const inputValueString = `'["${inputValueArray.join('","')}"]'`;

            // Manually format and log each object to match the exact desired output
            const objString = `{
    "test_id": ${startId + index},
    "input_type": "${inputType}",
    "input_name": "${inputName}",
    "input_value": ${inputValueString}
}`;
            console.log(objString);
        } else {
            console.warn(`No 'a' key found in item ${index + 1}`);
        }
    });
}

// Call the function to log each object individually
logAllObjectsIndividually();




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

const startId = 464;  // Starting ID
const inputType = 'matrix';  // Define your input type
const inputName = 'grid';  // Define your input name

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
        // Extract 2D array from the 'grid' key
        const arrayMatch = item.match(/grid:\s*\[\[([\s\S]*?)\]\]/);
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
            console.warn(`No 'grid' key found in item ${index + 1}`);
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


/// Strings  -------____________------_____________-----  -------____________------_____________-----

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



/// arr + 1 num  -------____________------_____________-----  -------____________------_____________-----

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


/// more Boolean  -------____________------_____________-----  -------____________------_____________-----


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




