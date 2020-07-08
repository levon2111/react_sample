$(document).ready(function() {

	var AppPlugins = {
    /* ------ Plugins Init ------ */
    itemBtnClickL: function(){
      $(document).on('click', '.itemBtn', function () {
        $( this ).closest('.folder').toggleClass('open');
        // $('.scrollArea').animate({scrollLeft:'+=200'},500);
      });
      $(document).on('click', '.toggleBtn', function () {
        $( this ).closest('.toggleParent').toggleClass('toggle');
      });
      $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("toggleParent")){
          $(".toggleParent").removeClass('toggle');
        }
      });
    }
	}



  AppPlugins.itemBtnClickL()
});
