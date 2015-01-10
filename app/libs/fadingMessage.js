(function ($) {
    $.fn.messageBox = function () {
        var $this = $(this);
        var $timeToHide = 2000;

        $this.css({
            "right": "0",
            "left": "35%",
            "top": "560px",
            "width": "500px",
            "padding": "15px",
            "border": "2px solid black",
            "background": "yellow",
            "text-align": "center",
            "font-size": "20px",
            "display": "none",
            "position": "absolute"
        });

        function loadCss() {
            $this.children('button').css({
                "width": "90px",
                "height": "30px",
                "margin": "20px 0 0 5px",
                "background": "none",
                "border": "2px dashed black",
                "font-size": "18px",
                "border-radius": "10px",
                "text-align": "center",
                "cursor" : "pointer"
            });

            $this.children('button').hover(
                function () {
                    $(this).css('border', "2px solid black");
                }, function () {
                    $(this).css('border', "2px dashed black");
                })
        }

        $this.click(function () {
            $this.slideUp();
        });

        function error(message) {
            $this.css({"color": "white", 'background': "red"});
            $this.fadeIn(500);
            $this.text(message);
            hideMessage($timeToHide);
        }

        function success(message) {
            $this.css({"color": "snow", 'background': "lime"});
            $this.fadeIn(500);
            $this.text(message);
            hideMessage($timeToHide);
        }

        function warning(message, hide) {
            $this.fadeIn(500);
            $this.text(message);
            if (!hide) {
                hideMessage($timeToHide);
            }
        }

        function prompt(message, fnYes, fnNo) {
            $this.text(message)
                .append($('<br /><button id="yesBut">Yes</button>').click(fnYes))
                .append($('<button id="NoBut">No</button>').click(fnNo));
            loadCss();
        }

        function hideMessage(timeout) {
            setTimeout(function () {
                $this.fadeOut(2000);
            }, timeout);
        }

        return {
            error: error,
            success: success,
            warning: warning,
            prompt: prompt
        };
    };
}(jQuery));