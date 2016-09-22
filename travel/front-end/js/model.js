(function(window, $) {
    var ns = window.ns || {};
    var $window = $(window);

    ns.open = function(el,opts,width,height,confirm,cancel,okVal,cancelVal){
        if ( typeof el === "object" ){
            var $el = $(el),
                href = $el.attr("href"),
                title = $el.attr("title");
        }else{
            var href = el || opts.href,
                title = opts || opts.title;
        }
        var data = {};
        if ( typeof opts === "object" ){
            data = opts;
            data.title = data.title || title;
        }else{
            data = {
                title : title,
                width : width || 1000,
                height : height || 600,
                ok : confirm,
                cancel : cancel,
                okVal: okVal,
                cancelVal: cancelVal
            }
        }
        $.dialog.open(data.href || href,data);
        return false;
    }
    ns.initDialog = function(){
        function getTop(_win){
            if ( _win.top === _win ){
                return _win;
            }else{
                return getTop(_win.top);
            }
        }
        var top = getTop(window),
            iframe = top.jQuery("#page-iframe")[0];
        $.dialog = top.jQuery.dialog;
        if ( !$.dialog || !top.jQuery.dialog ){
            return false;
        }
        top.jQuery.dialog._win = top;
        top.jQuery.dialog._iframe = iframe ? iframe.contentWindow : "";
        top.jQuery.dialog.close = function(){
            $.each(top.jQuery.dialog.list,function(i,v){
                v.close();
            })
        };
    };
    ns.initDialog();
    window.NS = ns;
})(window, jQuery)
