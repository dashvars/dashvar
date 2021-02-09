(function () {
  function dashvarMedia() {
    var w = window.innerWidth;
    var add = [];
    var del = [];
    if (w > 640) add.push("sm");
    else del.push("sm");
    if (w > 768) add.push("md");
    else del.push("md");
    if (w > 1024) add.push("lg");
    else del.push("lg");
    if (w > 1280) add.push("xl");
    else del.push("xl");
    if (w > 1536) add.push("2xl");
    else del.push("2xl");

    del.forEach(function (c) {
      document.body.classList.remove(c);
    });
    add.forEach(function (c) {
      document.body.classList.add(c);
    });
  }
  window.addEventListener("resize", dashvarMedia);
  window.addEventListener("DOMContentLoaded", function () {
    dashvarMedia();
  });
})();
