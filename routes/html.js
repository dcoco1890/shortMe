module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/e", (req, res) => {
    res.render("error");
  });
};
