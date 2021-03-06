const db = require("../models");
const path = require("path");
const validUrl = require("valid-url");
const shortID = require("shortid");

module.exports = app => {
  app.get("/:code", (req, res) => {
    const URLcode = req.params.code;
    db.URL.findOne({ code: URLcode }).then(item => {
      if (item) {
        return res.redirect(item.ogURL);
      } else {
        return res.render("error");
      }
    });
  });

  app.post("/api/item", (req, res) => {
    const { ogURL, shortBase } = req.body;
    // make sure url is kinda valid
    if (!validUrl.isWebUri(ogURL)) {
      return res.status(401).json("Invalid Base URL");
    }

    const URLcode = shortID.generate();
    const createdAt = new Date();

    db.URL.findOne({ ogURL: ogURL })
      .then(item => {
        if (item) {
          return res.status(200).json(item);
        } else {
          shortyURL = `${shortBase}/${URLcode}`;
        }
        db.URL.create({
          ogURL: ogURL,
          code: URLcode,
          shortyURL: shortyURL,
          createdAt: createdAt
        })
          .then(resp => {
            res.status(200).json(resp);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  });
};
