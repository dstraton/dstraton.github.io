var callback = function(shots) {
  var html = '';
  $.each(shots.shots, function(i, shot) {
    var url = shot.image_400_url;
    if (url === undefined) {
      url = shot.image_url;
      if (url === undefined) {
        return;
      }
    }

    html += '<a href="' + shot.url + '">';
    html += '<img src="' + url + '"></a>';
  });

  $('#shots').html(html);
};

$.jribbble.getShotsByPlayerId("coard",
    callback,
    {page: 1, per_page: 18})
