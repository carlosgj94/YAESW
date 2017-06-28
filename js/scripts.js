(function($){
  $(function(){

    $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens,
  }
);

        $('#pay-modal').modal();
        $('#receive-modal').modal();
        $('ul.tabs').tabs();

        $("#btnShareCurrency").click(function() {
          $('ul.tabs').tabs('select_tab', 'share-currency');
        });

        var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
        if(!ismobile){
          document.getElementById('body').innerHTML = "Please use a phone. Cabron.";
        }



  }); // end of document ready
})(jQuery); // end of jQuery name space
function autoComplete(){
$('input.autocomplete').autocomplete({
  data: {
    "Hectors": 'http://freedesignfile.com/upload/2015/07/Education-elements-with-H-vector-material.jpg',
    "Fosters": 'https://s3-media1.fl.yelpcdn.com/bphoto/J63_IiG39I9Ru6TFUTLRIA/o.jpg',
    "Batmans": 'https://s-media-cache-ak0.pinimg.com/736x/65/7d/b4/657db47bb9ba1193a8975ea3a0c67864--free-svg-files-for-silhouette-fonts-vinyl-svg-files-free.jpg'
  },
  limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
  onAutocomplete: function(val) {
    // Callback function when value is autcompleted.
  },
  minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
});
}
