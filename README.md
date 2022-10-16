# Introduction 
This repository was created with the aim of facilitating knowledge sharing where the contents of the repo combine all the automation tests, especially UI test, from every platform in the klinik pintar.

# Getting Started
1.  Install Node js
2.	Clone/checkout the latest/main repository branch
3.	Navigate to project folder
4.	Run command 'npm install'

# For rebuild with newer version
1.  Run command 'npm cache clean --force'
2.  Run command 'npm cache verify' (make sure the result 0/empty)
3.  Run command 'rm -rf node_modules'
4.  Remove/delete package-lock.json
5.  Make sure version in package.json updated
6.  Run command 'npm install'

# Build and Test
1. Run command 'npm run codeceptjs' to run all tests
2. Run command 'npm run codeceptjs tests/<platform_name>/<test_name.js>' to run spesific test

# Run with mochawesome reporter
1. Run command `npm run codeceptjs:mochawesome`

# Synthetic Monitoring
We use Monika for synthetic monitoring, to check for endpoint liveness

# How to run
Running both codecept and monika can be done using pm2. Simply run `pm2 start ecosystem.config.js` or `npx pm2 start ecosystem.config.js`. Stop by executing `pm2 kill`

To monitor running process, use `pm2 monit`


# Contribute
Make sure to follow pull request flow in azure.