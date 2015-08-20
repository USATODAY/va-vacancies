define([
   "jquery",
], function(jQuery) {
    //set project data URL here
    var dataURL = "http://www.gannett-cdn.com/experiments/usatoday/2015/08/va-vacancies/data/data.json";
    //set project image path here
    var imagePath = "http://www.gannett-cdn.com/experiments/usatoday/2015/08/va-vacancies/img/fb-post.jpg";

    //set project default share language here
    var defaultShareLanguage = "At some VA hospitals, as many as one-third of all medical jobs are vacant. Check your local VA health care system.";
    var defaultShareImage = imagePath + "fb-post.jpg";

    var isMobile, fb_app_id;
    var isTablet = false;

    var blnIframeEmbed = window != window.parent;

    var staticInfo = JSON.parse(jQuery(".staticinfo").html());

    if (staticInfo.platform == "desktop") {
        isMobile = false;
    } else {
        isMobile = true;
    }

    if (isMobile === false) {
        if (Modernizr.touch && window.innerWidth < 1100) {
            isTablet = true;
        }
    }

    fb_app_id = staticInfo.facebook.app_id;

    return {
        image_path: imagePath,
        dataURL: dataURL,
        staticInfo: staticInfo,
        fb_app_id: fb_app_id,
        isMobile: isMobile,
        isTablet: isTablet,
        defaultShareLanguage: defaultShareLanguage,
        defaultShareImage: defaultShareImage,
        isIframe: blnIframeEmbed
    };
});
