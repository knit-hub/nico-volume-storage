$(function() {
  chrome.storage.local.get(function(items) {
    console.log(items);
    Object.keys(items).forEach(function(key) {
      $("table").append(
        $("<tr></tr>")
        .append($("<td></td>").text(key))
        .append($("<td></td>").text(items[key]))
      );
    });
  });
});
