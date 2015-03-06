/**
 * Use `app.js` to run your app without `$ extens.io lift`.
 * To start the server, run: `$ node app.js`.
 *
 * This is handy in situations where the Sails CLI is not relevant or useful.
 *
 * For example:
 *   - `node app.js`
 *   - `pm2 start app.js`
 *   - `forever start app.js`
 *   - `node debug app.js`
 *   - `modulus deploy`
 *   - `heroku scale`
 *
 * The same command-line arguments are supported.
 * E.g.: `$ node app.js --silent --port=80 --prod`.
 */

process.chdir(__dirname);

(function () {
  var sails;
  try {
    sails = require('sails');
  } catch (e) {
    console.error('To run an app using `node app.js`, you usually need to have a version of `sails` installed in the same directory as your app.');
    console.error('To do that, run `$ npm install sails`');
    console.error('Alternatively, if you have Sails installed globally (i.e. you did `$ npm install sails -g`), you can use `$ extens.io lift`.');
    console.error('When you run `$ extens.io lift`, your app will still use a local `./node_modules/sails` dependency if it exists,');
    console.error('but if it doesn\'t, the app will run with the global Sails instead!');
    return;
  }

  var rc;
  try {
    rc = require('rc');
  } catch (e0) {
    try {
      rc = require('sails/node_modules/rc');
    } catch (e1) {
      console.error('Could not find dependency: `rc`.');
      console.error('Your `.sailsrc` file(s) will be ignored.');
      console.error('To resolve this, run:');
      console.error('`$ npm install rc --save`');
      rc = function () {
        return {};
      };
    }
  }

  sails.lift(rc('sails'));
})();
