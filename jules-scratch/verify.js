
const { chromium } = require('playwright');
const { exec } = require('child_process');
const path = require('path');

(async () => {
    let serverProcess;
    let browser;

    try {
        // Start a simple python http server
        console.log('Starting HTTP server...');
        serverProcess = exec('python3 -m http.server 8000', { cwd: process.cwd() });

        serverProcess.stdout.on('data', (data) => {
            console.log(`server stdout: ${data}`);
        });

        serverProcess.stderr.on('data', (data) => {
            console.error(`server stderr: ${data}`);
        });

        // Give the server a moment to start
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Server started.');

        // Launch the browser
        console.log('Launching browser...');
        browser = await chromium.launch();
        const page = await browser.newPage();

        // Navigate to the page
        const targetUrl = 'http://localhost:8000/homework2/';
        console.log(`Navigating to ${targetUrl}`);
        await page.goto(targetUrl, { waitUntil: 'networkidle' });

        // Wait for the 3D model to potentially load
        console.log('Waiting for model to load...');
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Take a screenshot
        const screenshotPath = path.join('jules-scratch', 'verification', 'verification.png');
        console.log(`Taking screenshot at ${screenshotPath}`);
        await page.screenshot({ path: screenshotPath });
        console.log('Screenshot taken successfully.');

    } catch (error) {
        console.error('An error occurred during verification:', error);
    } finally {
        // Cleanup
        if (browser) {
            console.log('Closing browser...');
            await browser.close();
        }
        if (serverProcess) {
            console.log('Stopping HTTP server...');
            serverProcess.kill();
        }
        console.log('Verification script finished.');
    }
})();
