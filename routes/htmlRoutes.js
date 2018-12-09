module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("landing");
  });

  // Load example page and pass in an example by id
  app.get("/projects/", function(req, res) {
    res.render("projects");
  });

  app.get("/about/", function(req, res) {
    res.render("about");
  });

  app.get("/contact/", function(req, res) {
    res.render("contact");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
