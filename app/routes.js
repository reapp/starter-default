// reapp-routes automatically requires your components
// see: https://github.com/reapp/reapp-routes

module.exports = ({ routes, route }) =>
  routes(require,
    route('home', '/',
      route('sub')
    )
  );