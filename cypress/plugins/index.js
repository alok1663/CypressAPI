const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);

  on('after:run', async (results) => {
    if (results) {
      const jsonDir = 'cypress/reports';
      const reportDir = 'cypress/reports/html';

      await merge({ files: [`${jsonDir}/*.json`] })
        .then((report) => {
          return generator.create(report, {
            reportDir,
            reportFilename: 'report'
          });
        });
    }
  });
};
