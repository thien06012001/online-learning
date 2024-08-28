
const UserApi = require('./api/user')
const PagesRender = require('./pages')
// Api routes
function apiRoutes(app) {
    app.use('/api/user', UserApi);
}

// Page routes
function pageRoutes(app) {
    app.use("/", PagesRender)
}
module.exports = { apiRoutes, pageRoutes };