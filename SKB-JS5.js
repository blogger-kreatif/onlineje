if(typeof jQuery != 'undefined' && typeof window.RedinkStatisticsParams != 'undefined') {

    var responseTime = 0,
        loadTime = 0,
        loadTimeStart = 0;

    if (typeof window.performance != 'undefined' && typeof window.performance.timing != 'undefined') {
        var timing = window.performance.timing;
        if (typeof timing.responseEnd != 'undefined' && typeof timing.fetchStart != 'undefined') {
            loadTimeStart = timing.navigationStart || 0;
            responseTime = timing.responseEnd - timing.fetchStart;
        }
    }

    jQuery(window).load(function(){

        setTimeout(function() {
            try {
                var userAgent = '',
                language = '',
                resolution = [0, 0],
                pixelRatio = 1,
                block = 0,
                flash = 0,
                post_type = window.RedinkStatisticsParams.post_type,
                post_id = window.RedinkStatisticsParams.post_id;


                if (typeof window.performance != 'undefined' && typeof window.performance.timing != 'undefined') {
                    var timing = window.performance.timing;
                    if (0 < loadTimeStart && typeof timing.loadEventEnd != 'undefined') {
                        loadTime = timing.loadEventEnd - loadTimeStart;
                    }
                }

                if (typeof window.navigator != 'undefined') {
                    var nav = window.navigator;
                    if (typeof nav.userAgent != 'undefined') {
                        userAgent = nav.userAgent;
                    }
                    if (typeof nav.language != 'undefined') {
                        language = nav.language;
                    }
                }

                if (typeof window.devicePixelRatio != 'undefined') {
                    pixelRatio = window.devicePixelRatio;
                }

                if (typeof window.screen != 'undefined') {
                    var scrn = window.screen;
                    if (typeof scrn.availWidth != 'undefined') {
                        resolution[0] = scrn.availWidth;
                    }
                    if (typeof scrn.availHeight != 'undefined') {
                        resolution[1] = scrn.availHeight;
                    }
                }

                if (!('ab' in window)) {
                    block = 1;
                }

                if (typeof window.navigator != 'undefined') {

                    if (window.navigator.plugins != null && navigator.plugins.length > 0 && navigator.plugins["Shockwave Flash"]) {
                        flash = 1;
                    }
                    else if (~window.navigator.userAgent.toLowerCase().indexOf("webtv")) {
                        flash = 1;
                    }
                    else if (~window.navigator.appVersion.indexOf("MSIE") && !~window.navigator.userAgent.indexOf("Opera")) {
                        try {
                            new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            flash = 1;
                        }
                        catch (e) {}
                    }
                }

                var server = window.RedinkStatisticsParams.server;
                var blog_id = window.RedinkStatisticsParams.blog_id;
                var host = window.RedinkStatisticsParams.host;
                var uri = window.RedinkStatisticsParams.uri;

                var data = {
                    rt: responseTime,
                    lt: loadTime,
                    a: userAgent,
                    l: language,
                    rx: resolution[0],
                    ry: resolution[1],
                    r: pixelRatio,
                    s: server,
                    b: blog_id,
                    h: host,
                    u: uri,
                    ab: block,
                    f: flash,
                    pt: post_type,
                    p: post_id
                };

                jQuery.post('https://' + window.RedinkStatisticsParams.api_host + '/api/frontend', data);


            }
            catch (e) {}

            }, 10);
    });
}
