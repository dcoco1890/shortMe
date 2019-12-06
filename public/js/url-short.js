$(document).ready(function() {
  const input = $("#ogURL");
  const subBut = $("#submit-button");
  const box = $("#box");
  const p = $("#box p");

  subBut.on("click", e => {
    e.preventDefault();
    let URLtoShort = input.val().trim();
    let obj = {
      shortBase: "http://localhost:8080",
      ogURL: URLtoShort
    };
    box.css({ display: "unset" });
    shortThis(obj);
  });

  function shortThis(obj) {
    $.ajax({
      type: "POST",
      url: "/api/item",
      data: obj
    })
      .then(response => {
        const { shortyURL } = response;
        p.text(JSON.stringify(shortyURL));
      })
      .catch(err => {
        p.text("Invalid URL");
        console.log(err);
      });
  }
});
