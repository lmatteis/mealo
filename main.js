require("apejs.js");
require("googlestore.js");

apejs.urls = {
  "/": {
    get: function(request, response) {
      var print = printer(response);
      print(render("./skins/index.html"));
    }
  }
}

// simple syntax sugar
function printer(response) {
  var writer = response.getWriter();
  return writer.print.bind(writer);
}
