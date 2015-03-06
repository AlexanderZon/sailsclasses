/**
 * WebSocket Server Settings
 *
 * These settings provide transparent access to the options for Sails'
 * encapsulated WebSocket server, as well as some additional Sails-specific
 * configuration layered on top.
 */

module.exports.sockets = {


  /**
   * `beforeConnect`
   *
   * This custom `beforeConnect` function will be run each time BEFORE a new
   * socket is allowed to connect, when the initial Socket.IO handshake is
   * performed with the server.
   *
   * By default, when a socket tries to connect, Sails allows it, every time.
   * Much in the same way any HTTP request is allowed to reach your routes.
   * If no valid cookie was sent, a temporary session will be created for the
   * connecting socket.
   *
   * If the cookie sent as part of the connetion request doesn't match any
   * known user session, a new user session is created for it.
   *
   * In most cases, the user would already have a cookie since they loaded
   * the Socket.IO client and the initial HTML pageyou're building.
   *
   * However, in the case of cross-domain requests, it is possible to receive
   * a connection upgrade request without a cookie (for certain transports)
   * In this case, there is no way to keep track of the requesting user
   * between requests, since there is no identifying information to link
   * him/her with a session. The sails.io.js client solves this by connecting
   * to a CORS/jsonp endpoint first to get a 3rd party cookie(fortunately this
   * works, even in Safari), then opening the connection.
   *
   * You can also pass along a ?cookie query parameter to the upgrade url,
   * which Sails will use in the absense of a proper cookie e.g. (when
   * connecting from the client):
   * io.sails.connect('http://localhost:1337?cookie=smokeybear')
   *
   * Finally note that the user's cookie is NOT (and will never be) accessible
   * from client-side javascript. Using HTTP-only cookies is crucial for your
   * app's security.
   */

  // beforeConnect: function(handshake, cb) {
  //   // `true` allows the connection
  //   return cb(null, true);
  //
  //   // (`false` would reject the connection)
  // },


  /**
   * This custom `afterDisconnect` function will be run each time
   * a socket disconnects.
   */

  // afterDisconnect: function(session, socket, cb) {
  //   // By default: do nothing.
  //   return cb();
  // },
};
