# copy-eb-vars

## Overview
Puppeteer script that can be used to copy AWS elasticbeanstalk env vars from one app to another

## Usage
1. `npm install`
2. Update config options at top of index.js
```
const oldEnvName = 'solutions-recovery-com-spa';
const oldEnvId = 'e-samiumj4wi';
const newEnvName = 'solutions-recovery-com';
const newEnvId = 'e-ct98gaumwq';
const userName = 'pbarera';
const password = 'xxxxxx';
```
3. `node index.js`
