module.exports = {
  apps : [
    {
      name   : "codecept",
      script : "npx",
      args: "codeceptjs run --reporter mochawesome --reporter-options reportFilename=index.html",
      autorestart: false,
      cron_restart: "0 0 * * *" // run every day at midnight
    },
    {
      name   : "monika",
      script : "npx",
      args: "monika -c monitoring/website/klinikpintar.yaml",
    },
    {
      script: "serve",
      env: {
        PM2_SERVE_PATH: 'mochawesome-report',
        PM2_SERVE_PORT: 8080
      }
    }
  ]
}
