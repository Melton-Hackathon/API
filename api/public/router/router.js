const viewPath = "../views/";
$(document).ready(function () {
  function loadContent() {
    let hash = window.location.hash;
    if (hash === "" || hash === "#") {
      hash = "#home";
    }

    const urlConverter = (hash) => {
      if (hash.includes("?")) {
        hash = hash.split("?")
        return [viewPath, hash[0].slice(1) + ".html"].join(
          ""
        );
      }
      return [viewPath, hash.slice(1) + ".html"].join("");
    };

    let url = urlConverter(hash);

    console.log(`load view on src: %c${url}`, 'COLOR: grey;');
    
    $("#content").load(url);
    $("#site-title").value = hash.slice(1);
  }

  $(window).on("hashchange", loadContent);
  loadContent();
});
