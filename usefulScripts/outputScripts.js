
// { challenge_id: 19, order_index: 1, expected_output: '', is_complex: false, is_sample: true },


// string -------____________------_____________-----
//#region 
// Define the predefined values
const CHALLENGE_ID = 20;  // Adjust if needed
const IS_COMPLEX = false;
const IS_SAMPLE = false;

// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
  console.error('No data found in local storage under key "returnValueLog".');
} else {
  // Transform the data into an array of objects with expected_output as cleaned-up strings
  const transformedData = data.map((item, index) => {
    // Extract the string value from the text using a regex
    const match = item.match(/expected return value : \"(.*?)\"/);
    let expectedOutput = '';

    if (match) {
      // The string is already in the correct format, so assign directly
      expectedOutput = match[1];
    }

    // Return the new object with the transformed data
    return {
      challenge_id: CHALLENGE_ID,
      order_index: index + 1,  // Index is 0-based, so add 1 for 1-based index
      expected_output: expectedOutput,
      is_complex: IS_COMPLEX,
      is_sample: IS_SAMPLE
    };
  });

  // Convert the array of objects into a JSON string representation
  const outputString = JSON.stringify(transformedData, null, 2);

  // Log the string representation to the console
  console.log(outputString);
}
//#endregion


// number -------____________------_____________-----
//#region 
// Define the predefined values
const CHALLENGE_ID = 20;  // Changed to 20 as per your example
const IS_COMPLEX = false;
const IS_SAMPLE = false;

// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
  console.error('No data found in local storage under key "returnValueLog".');
} else {
  // Transform the data into an array of objects with the expected_output as a string with double quotes
  const transformedData = data.map((item, index) => {
    // Extract the value from the string using a regex
    const match = item.match(/expected return value : (\d+)/);
    const expectedOutput = match ? match[1] : 'null';

    // Return the new object with the transformed data
    return {
      challenge_id: CHALLENGE_ID,
      order_index: index + 1,  // Index is 0-based, so add 1 for 1-based index
      expected_output: expectedOutput,
      is_complex: IS_COMPLEX,
      is_sample: IS_SAMPLE
    };
  });

  // Convert the array of objects into a JSON string representation
  const outputString = JSON.stringify(transformedData, null, 2);

  // Log the string representation to the console
  console.log(outputString);
}
//#endregion


// boolean -------____________------_____________-----
//#region 
// Define the predefined values
const CHALLENGE_ID = 20;  // Adjust if needed
const IS_COMPLEX = false;
const IS_SAMPLE = false;

// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
  console.error('No data found in local storage under key "returnValueLog".');
} else {
  // Transform the data into an array of objects with expected_output as a string
  const transformedData = data.map((item, index) => {
    // Extract the boolean value from the string using a regex
    const match = item.match(/expected return value : (true|false)/);
    // Convert the extracted string to a boolean and then to a string
    const expectedOutput = match ? match[1] : "false";

    // Return the new object with the transformed data
    return {
      challenge_id: CHALLENGE_ID,
      order_index: index + 1,  // Index is 0-based, so add 1 for 1-based index
      expected_output: expectedOutput,
      is_complex: IS_COMPLEX,
      is_sample: IS_SAMPLE
    };
  });

  // Convert the array of objects into a JSON string representation
  const outputString = JSON.stringify(transformedData, null, 2);

  // Log the string representation to the console
  console.log(outputString);
}
//#endregion


/// nested arr of numbers -------____________------_____________-----
//#region 

// Define the predefined values
const CHALLENGE_ID = 20;  // Adjust if needed
const IS_COMPLEX = true;
const IS_SAMPLE = false;

// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
  console.error('No data found in local storage under key "returnValueLog".');
} else {
  // Transform the data into an array of objects with expected_output as a clean string representation
  const transformedData = data.map((item, index) => {
    // Extract the array string from the text using a regex
    const match = item.match(/expected return value : (\[\[.*\]\])/s);
    let expectedOutput = '';

    if (match) {
      // Clean up the array string
      const arrayString = match[1].replace(/\n/g, '').trim();

      // The string should already be in the correct format, so no additional quotes are needed
      expectedOutput = arrayString;
    }

    // Return the new object with the transformed data
    return {
      challenge_id: CHALLENGE_ID,
      order_index: index + 1,  // Index is 0-based, so add 1 for 1-based index
      expected_output: expectedOutput,
      is_complex: IS_COMPLEX,
      is_sample: IS_SAMPLE
    };
  });

  // Convert the array of objects into a JSON string representation
  const outputString = JSON.stringify(transformedData, null, 2);

  // Log the string representation to the console
  console.log(outputString);
}
//#endregion


/// array of integers -------____________------_____________-----
//#region 
// Define the predefined values
const CHALLENGE_ID = 25;  // Adjust if needed
const IS_COMPLEX = true;
const IS_SAMPLE = false;

// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
  console.error('No data found in local storage under key "returnValueLog".');
} else {
  // Transform the data into an array of objects with expected_output as a clean string representation
  const transformedData = data.map((item, index) => {
    // Extract the array string from the text using a regex
    const match = item.match(/expected return value : (\[.*\])/);
    let expectedOutput = '';

    if (match) {
      // Clean up the array string
      expectedOutput = match[1].trim();
    }

    // Return the new object with the transformed data
    return {
      challenge_id: CHALLENGE_ID,
      order_index: index + 1,  // Index is 0-based, so add 1 for 1-based index
      expected_output: expectedOutput,
      is_complex: IS_COMPLEX,
      is_sample: IS_SAMPLE
    };
  });

  // Convert the array of objects into a JSON string representation
  const outputString = JSON.stringify(transformedData, null, 2);

  // Log the string representation to the console
  console.log(outputString);
}
//#endregion


/// array of strings -------____________------_____________-----
//#region 
// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
    console.error('No data found in local storage under key "returnValueLog".');
} else {
    function transformData(data) {
        return data.map((item, index) => {
            // Extract the expected output using regex, capturing the content inside the brackets
            const match = item.match(/expected return value : (\[.*\])/s);
            let expectedOutput = '';

            if (match) {
                expectedOutput = match[1]
                    .replace(/\n\s*/g, '')   // Remove newlines and any leading spaces after them
                    .replace(/\\"/g, '"');  // Replace escaped quotes with normal quotes
            }

            // Construct the formatted object string manually
            return `{
    "challenge_id": 57,
    "order_index": ${index + 1},
    "expected_output": '${expectedOutput}',
    "is_complex": true,
    "is_sample": false
}`;
        });
    }

    // Transform the data
    const transformedData = transformData(data);

    // Construct the array string manually
    const arrayString = `[
${transformedData.join(',\n')}
]`;

    // Print the array string
    console.log(arrayString);
}
//#endregion


// matrix of strings
//#region 
// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
    console.error('No data found in local storage under key "returnValueLog".');
} else {
    function transformData(data) {
        return data.map((item, index) => {
            // Extract the expected output using regex, capturing the content inside the brackets
            const match = item.match(/expected return value : (\[\[.*\]\])/s);
            let expectedOutput = '';

            if (match) {
                expectedOutput = match[1]
                    .replace(/\n\s*/g, '')   // Remove newlines and any leading spaces after them
                    .replace(/\\"/g, '"');  // Replace escaped quotes with normal quotes
            }

            // Construct the formatted object string manually
            return `{
    "challenge_id": 57,
    "order_index": ${index + 1},
    "expected_output": '${expectedOutput}',
    "is_complex": true,
    "is_sample": true
}`;
        });
    }

    // Transform the data
    const transformedData = transformData(data);

    // Construct the array string manually
    const arrayString = `[
${transformedData.join(',\n')}
]`;

    // Print the array string
    console.log(arrayString);
}
//#endregion


// arr.arr.arr.boolen
//#region 

// Define the predefined values
const CHALLENGE_ID = 20;  
const IS_COMPLEX = false;
const IS_SAMPLE = true;

// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
  console.error('No data found in local storage under key "returnValueLog".');
} else {
  // Transform the data into an array of objects with expected_output as a clean string representation
  const transformedData = data.map((item, index) => {
    // Extract the array string from the text using a regex
    const match = item.match(/expected return value : (\[\[\[.*\]\]\])/s);
    let expectedOutput = '';

    if (match) {
      // Clean up the array string
      const arrayString = match[1].replace(/\n/g, '').trim();

      // The string should already be in the correct format, so no additional quotes are needed
      expectedOutput = arrayString;
    }

    // Return the new object with the transformed data
    return {
      challenge_id: CHALLENGE_ID,
      order_index: index + 1,
      expected_output: expectedOutput,
      is_complex: IS_COMPLEX,
      is_sample: IS_SAMPLE
    };
  });

  // Convert the array of objects into a JSON string representation
  const outputString = JSON.stringify(transformedData, null, 2);

  // Log the string representation to the console
  console.log(outputString);
}
//#endregion

// nested arr boolean
//#region 
// Define the predefined values
const CHALLENGE_ID = 20;  // Adjust if needed
const IS_COMPLEX = true;  // Set to true as per your requirement
const IS_SAMPLE = true;

// Retrieve the data from local storage using the correct key
const data = JSON.parse(localStorage.getItem('returnValueLog'));

// Check if data was retrieved successfully
if (!data) {
  console.error('No data found in local storage under key "returnValueLog".');
} else {
  // Transform each item to extract the nested array and convert it to a single-line JSON string
  const transformedData = data.map((item, index) => {
    // Extract the JSON array part from the string using regex
    const match = item.match(/\[\[.*\]\]/s); // `s` flag allows dot to match newlines
    const arrayString = match ? match[0] : "[]";

    // Convert the extracted array string to a single-line JSON string
    const parsedArray = JSON.parse(arrayString);
    const expectedOutput = JSON.stringify(parsedArray);

    // Return the new object with the transformed data
    return {
      challenge_id: CHALLENGE_ID,
      order_index: index + 1,  // Index is 0-based, so add 1 for 1-based index
      expected_output: expectedOutput,
      is_complex: IS_COMPLEX,
      is_sample: IS_SAMPLE
    };
  });

  // Convert the array of objects into a JSON string representation
  const outputString = JSON.stringify(transformedData, null, 2);

  // Log the string representation to the console
  console.log(outputString);
}
//#endregion



