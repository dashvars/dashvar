(function () {
  if (typeof window === "undefined") return;
  var mm = window.matchMedia || window.msMatchMedia;
  var minw = function (w) {
    return mm ? mm("(min-width: " + w + "px)").matches : false;
  };
  var dashvarMedia = function () {
    var add = [];
    var del = [];
    if (minw(480)) add.push("xs");
    else del.push("xs");
    if (minw(640)) add.push("sm");
    else del.push("sm");
    if (minw(768)) add.push("md");
    else del.push("md");
    if (minw(1024)) add.push("lg");
    else del.push("lg");
    if (minw(1280)) add.push("xl");
    else del.push("xl");
    if (minw(1536)) add.push("xxl");
    else del.push("xxl");
    del.forEach(function (c) {
      document.body.classList.remove(c);
    });
    add.forEach(function (c) {
      document.body.classList.add(c);
    });
  };
  window.addEventListener("resize", dashvarMedia);
  window.addEventListener("DOMContentLoaded", dashvarMedia);
  window.addEventListener("load", dashvarMedia);
  dashvarMedia();
})();
