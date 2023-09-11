const newman = require('newman');
const data = require('./data');
const { path } = require('./configs');

let summaries = [];
let iterations = [];
let requests = [];
let index = 0;

let runs = data.map(value => {
  return new Promise((resolve, reject) => {
    newman.run(
      {
        collection: require('./delete.postman_collection.json'),
        environment: require('./env.postman_environment.json'),
        envVar: [
          { key: 'path', value: path },
          { key: 'id', value: value }
        ]
        // reporters: 'cli'
      },
      function (err, summary) {
        if (err) {
          reject(err);
        }
        iterations.push(summary.run.stats.iterations);
        requests.push(summary.run.stats.requests);
        console.log(index, 'Se ejecuto el delete para el id ' + value);
        index++;
        resolve();
      }
    );
  });
});

Promise.all(runs)
  .then(() => {
    const totalIterations = iterations.reduce(
      (acc, obj) => {
        acc.executed += obj.total;
        acc.failed += obj.failed;
        acc.pending += obj.pending;
        return acc;
      },
      { event: 'iterations', total: data.length, executed: 0, failed: 0, pending: 0 }
    );
    summaries.push(totalIterations);
    const totalRequests = requests.reduce(
      (acc, obj) => {
        acc.executed += obj.total;
        acc.failed += obj.failed;
        acc.pending += obj.pending;
        return acc;
      },
      { event: 'requests', total: data.length, executed: 0, failed: 0, pending: 0 }
    );
    summaries.push(totalRequests);

    console.table(summaries);
  })
  .catch(err => {
    console.error(err);
  });
