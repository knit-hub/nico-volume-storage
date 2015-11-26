$(function() {
  var player = document.getElementById('external_nicoplayer')
  var userid = JSON.parse($('#watchAPIDataContainer').text()).flashvars.videoUserId;

  chrome.storage.local.get(userid, function(result) {
    var volume = result[userid];
    if (volume) {
      var timer = setInterval(function() {
        try {
          player.ext_setVolume(volume);
          clearInterval(timer)
        } catch (e) {
          console.error(e);
        }
      }, 500);
    }
  });

  window.onbeforeunload = function(e) {
    storeVolume(userid, player.ext_getVolume());
  }
});

function storeVolume(userid, volume) {
  var key = userid;
  var val = volume;
  var obj = {};
  obj[key] = val;
  chrome.storage.local.set(obj, function() {});
}
