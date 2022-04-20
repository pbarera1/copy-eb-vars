// usage from command line: node index.js
const puppeteer = require('puppeteer');

// config vars MUST CHANGE each time
const oldEnvName = 'rehabs-com';
const oldEnvId = 'e-ejkys3npyq';
const newEnvName = 'recovery-org';
const newEnvId = 'e-surip3ctmp';
const userName = 'pbarera';
const password = 'xxxxxx';

puppeteer
    .launch({
        headless: false,
        // slowMo: 125,
        devtools: true,
        defaultViewport: {
            width: 800,
            height: 800,
        },
        // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // chrome not chromium
    })
    .then(async (browser) => {
        const page = await browser.newPage();
        // get old vars
        await page.goto(
            `https://www.facebook.com/login/device-based/regular/login/?login_attempt=1`,
        );
        await page.type('#email', userName);
        await page.type('#pass', password);
        await page.click('button[name="login"]');

        await page.waitForTimeout(3000);

        await page.goto(`https://www.facebook.com/phil.barera/photos`);
        await page.waitForTimeout(3000);

        // // click edit into software section
        // await page.click('.awsui-table-row:first-child button[type=submit]');
        // await page.waitForTimeout(5000);

        // // get all the env vars
        // const result = await page.evaluate(() => {
        //     document.querySelector('table.properties-table').scrollIntoView();

        //     const envVarNames = [];
        //     const envVarValues = [];
        //     const inputsLeftColumn = document.querySelectorAll(
        //         'a[href*="https://www.facebook.com/photo.php"]',
        //     );

        // new tab download data-visualcompletion="media-vc-image"
        // close tab open next one

        //     for (let value of inputsLeftColumn.values()) {
        //         if (value.value) envVarNames.push(value.value);
        //     }
        //     const inputsRightColumn = document.querySelectorAll(
        //         'table.properties-table td:last-child input[type=text]',
        //     );

        //     for (let value of inputsRightColumn.values()) {
        //         if (value.value) envVarValues.push(value.value);
        //     }
        //     return [envVarNames, envVarValues];
        // });
        // console.log(result);

        // // go to new env page
        // const page2 = await browser.newPage();
        // await page2.goto(
        //     `https://us-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-2#/environment/configuration?applicationName=${newEnvName}&environmentId=${newEnvId}`,
        // );
        // await page2.waitForTimeout(6000);

        // // click edit into software section
        // await page2.click('.awsui-table-row:first-child button[type=submit]');
        // await page2.waitForTimeout(5000);

        // // scroll to env vars
        // const result2 = await page2.evaluate(() => {
        //     document.querySelector('table.properties-table').scrollIntoView();
        // });

        // await page2.waitForTimeout(4000);

        // // add env vars tp new app
        // const inputSelector = 'table.properties-table input.ng-empty[type=text]';

        // const populateData = async () => {
        //     for await (let [index, value] of result[0].entries()) {
        //         console.log(index, value);
        //         const envValue = result[1][index];
        //         await page2.click(inputSelector);
        //         await page2.type(inputSelector, value);
        //         await page2.type(inputSelector, envValue);
        //         await page2.waitForTimeout(1000);
        //     }
        // };
        // populateData();
    });

// could I go to all these links via curl request with mock cookie
// then grab image src from return data
// curl download image mock cookie
// 725 images, document.querySelectorAll('a[href*="href="https://www.facebook.com/photo.php"] img')
