(async function() {
    const testCases = document.querySelectorAll('.test-case--title');
    const paramsLog = [];
    const returnValueLog = [];

    for (let i = 0; i < testCases.length; i++) {
        try {
            // Check if the test case contains the class indicating it is hidden
            if (testCases[i].closest('.test-case').querySelector('.-ide-railscasts-secondary') !== null) {
                // Click on the current test case
                testCases[i].click();

                // Wait for the input section to load
                await new Promise(resolve => setTimeout(resolve, 200));

                // Click on the "Input" section and extract parameters
                const inputSection = document.querySelector('[data-rbd-draggable-id="inputSection"]');
                if (inputSection) {
                    inputSection.click();
                    await new Promise(resolve => setTimeout(resolve, 100));
                    const paramsElement = document.querySelector('[data-testid="solution-language"] pre');
                    if (paramsElement) {
                        const params = paramsElement.innerText;
                        paramsLog.push(`Test Case ${i + 1}:\n${params}`);
                    } else {
                        console.warn(`No parameters found for Test Case ${i + 1}`);
                    }
                } else {
                    console.warn(`No input section found for Test Case ${i + 1}`);
                }

                // Click on the "Return" section and extract the expected return value
                const outputSection = document.querySelector('[data-rbd-draggable-id="outputSection"]');
                if (outputSection) {
                    outputSection.click();
                    await new Promise(resolve => setTimeout(resolve, 100));
                    const outputElement = document.querySelector('[data-testid="test-output-first"] .task-tests--value');
                    if (outputElement) {
                        const expectedValue = outputElement.innerText;
                        returnValueLog.push(`Test Case ${i + 1}: expected return value : ${expectedValue}`);
                    } else {
                        console.warn(`No return value found for Test Case ${i + 1}`);
                    }
                } else {
                    console.warn(`No output section found for Test Case ${i + 1}`);
                }

                // Optionally wait a bit between cases if needed
                await new Promise(resolve => setTimeout(resolve, 100));

            } else {
                console.log(`Skipping Test Case ${i + 1} as it does not contain the hidden class.`);
            }

        } catch (error) {
            console.error(`Error processing test case ${i + 1}:`, error);
        }
    }

    // Log all parameters and return values
    console.log(paramsLog.join("\n\n"));
    console.log(returnValueLog.join("\n\n"));

    // Save data to localStorage
    try {
        localStorage.setItem('paramsLog', JSON.stringify(paramsLog));
        localStorage.setItem('returnValueLog', JSON.stringify(returnValueLog));
        console.log('Data saved to localStorage');
    } catch (error) {
        console.error('Error saving data to localStorage:', error);
    }
})();
