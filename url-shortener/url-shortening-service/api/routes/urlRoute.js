const urlController = require('../controllers/urlController');

const urlRoute = (app) => {
    app.route("/urls")
        .get(urlController.get_all_urls)
        .post(urlController.create_short_url)

    app.route("/urls/delete_url/:urlId")
        .delete(urlController.delete_url_by_id)
}
module.exports = urlRoute