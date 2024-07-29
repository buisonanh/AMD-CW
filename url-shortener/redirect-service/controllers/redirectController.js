const URL = require("../models/urlModel");

exports.redirect_to_original_url = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const url = await URL.findOne({ short_url: shortUrl });
        if (url) {
            return res.redirect(url.original_url);
        } else {
            return res.status(404).send("Url not found");
        }
    } catch (err) {
        res.send(err)
    }
}