var app = {
    init: function() {
        console.log('init');
        app.getJson();
    },

    getJson: function() {
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cbc9e8b524c946c6a4c05e9cb9e7d796",
          "method": "GET",
          "headers": {
            "cache-control": "no-cache"
          }
        }

        $.ajax(settings).done(function (response) {
          console.log(response);
        });
    },

    sportsFeed: function(data) {
        console.log(data)
        var feedHtml = '';
        for (var i=0; i<10; i++) {
            $('.item-list-sports').html('');
            $('.item-list-sports').append('<li><span class="sports-item">'+  +'</li>')
        }
    }
}

$(document).ready(function() {
    app.init();
 });