/**
 * An asynchronous bootstrap function that runs before
 * your application gets lifted.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callback method when
  // you are finished with the bootstrap! Otherwise your server
  // will never lift, since it's waiting on the bootstrap.
  cb();
};
