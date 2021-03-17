(function ($) {
    $.fn.xbotInit = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            bot_id: '47c96-6f5-d41b529-6450',
        }, options );
        // Greenify the collection based on the settings variable.
        this.append(`<iframe frameborder="0" id="xbot-frame"  src="http://x-bot.expectron.tech/app/bot/preview/${settings.bot_id}" style="height:115px; width:115px;overflow:hidden;position:fixed;z-index:99999;bottom:0;right:0"></iframe>`);
        window.addEventListener('message', function(event) {
          if(event.data.message === 'maximize')
          {
            $("#xbot-frame").css({'width':'360px', 'height':'640px'});
          } else {
            $("#xbot-frame").css({'width':'115px', 'height':'115px'});
          }
        }, false);
    };
}(jQuery));