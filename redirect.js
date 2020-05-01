const endpoint = "https://jsonbox.io/box_d19b3ad21a2e2219a56e";

var windowurl = window.location.hash.substr(1);

if (window.location.hash != "") {
  window.stop();

  fetch(endpoint + "?q=hash:" + windowurl)
    .then((resp) => resp.json())
    .then(function (data) {
      window.location.href = data[0].link;
    });
}
