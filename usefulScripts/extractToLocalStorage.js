

(async function() {
    const testCases = document.querySelectorAll('.test-case--title');
    const paramsLog = [];
    const returnValueLog = [];

    for (let i = 0; i < testCases.length; i++) {
        try {
            // Click on the current test case
            testCases[i].click();

            // Wait for the input section to load
            await new Promise(resolve => setTimeout(resolve, 200));

            // Click on the "Input" section and extract parameters
            document.querySelector('[data-rbd-draggable-id="inputSection"]').click();
            await new Promise(resolve => setTimeout(resolve, 100));
            const params = document.querySelector('[data-testid="solution-language"] pre').innerText;
            paramsLog.push(`Test Case ${i + 1}:\n${params}`);

            // Click on the "Return" section and extract the expected return value
            document.querySelector('[data-rbd-draggable-id="outputSection"]').click();
            await new Promise(resolve => setTimeout(resolve, 100));
            const expectedValue = document.querySelector('[data-testid="test-output-first"] .task-tests--value').innerText;
            returnValueLog.push(`Test Case ${i + 1}: expected return value : ${expectedValue}`);

            // Optionally wait a bit between cases if needed
            await new Promise(resolve => setTimeout(resolve, 100));

        } catch (error) {
            console.error(`Error processing test case ${i + 1}:`, error);
        }
    }

    // Log all parameters and return values
    console.log(paramsLog.join("\n\n"));
    console.log(returnValueLog.join("\n\n"));

    // Save data to localStorage
    localStorage.setItem('paramsLog', JSON.stringify(paramsLog));
    localStorage.setItem('returnValueLog', JSON.stringify(returnValueLog));

    console.log('Data saved to localStorage');
})();