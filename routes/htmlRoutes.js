// *********************************************************************************
// Routes for sending users to various html pages
// *********************************************************************************

// Routes
// =============================================================
module.exports = function(app) {
 app.get('/', function(req, res) {
   res.render('index')
 })
}