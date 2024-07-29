const URL = require("../models/urlModel");

exports.create_short_url = async (req, res) => {
    const { originalUrl, alias } = req.body;
    let shortUrl;

    // Generate unique short URL
    if (alias) {
        const existingUrl = await URL.findOne({ short_url: alias });
        if (existingUrl) {
            return res.status(400).send("Alias already exists");
        } else if (alias.length < 5) {
            return res.status(400).send("Alias should be at least 5 characters long");
        } else {
            shortUrl = alias;
        }
    } else {
        shortUrl = Math.random().toString(36).substring(2, 8);
    }

    // Create new URL document
    const newUrl = new URL({
        original_url: originalUrl,
        short_url: shortUrl
    });

    try {
        await newUrl.save();
        res.status(201).send(newUrl);
    } catch (err) {
        res.status(500).send(err);
    }
};



exports.get_all_urls = async (req, res) => {
    try {
        const urls = await URL.find()
        res.send(urls)
    } catch (err) {
        res.send(err)
    }
}


exports.delete_url_by_id = async (req, res) => {
    const { urlId } = req.params;
    try {
        await URL.findByIdAndDelete(urlId)
        res.send("Url deleted successfully")
    } catch (err) {
        res.send(err)
    }
}

