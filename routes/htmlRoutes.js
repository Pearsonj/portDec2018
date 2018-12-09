

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index"); 
  });

  // Load example page and pass in an example by id
  app.get("/example/", function(req, res) {
      res.render("example");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
