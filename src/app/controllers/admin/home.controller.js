
module.exports = {  
  getHome: (req, res) => {
    res.render("admin/home", {
      pageTitle: "Admin Home",
    });
  }
}