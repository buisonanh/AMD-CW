const redirectController = require('../controllers/redirectController');

const redirectRoute = (app) => {
    app.route("/:shortUrl")
        .get(redirectController.redirect_to_original_url)
}
module.exports = redirectRoute