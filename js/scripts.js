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
          //document.getElementById('body').innerHTML = "Please use a phone. Cabron.";
        }

  }); // end of document ready
})(jQuery); // end of jQuery name space
