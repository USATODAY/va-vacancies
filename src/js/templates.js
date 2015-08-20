define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["AppView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-search-wrap iapp-fade">\n    <div class="iapp-search ">\n        <div class="iapp-header">Critical vacancies at the VA</div>\n                <p class="iapp-chatter">The Veterans Health Administration had thousands of medical jobs unfilled as of July 15. At some hospitals, half of many critical jobs are open, resulting in long waits for care. Search by state for details and wait times.</p>\n        <div class="iapp-search-input-group">\n            <img class="iapp-search-icon" src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/search-icon.svg" alt="Info">\n            <input class="iapp-search-input" type="text" placeholder="Search states">\n        </div>\n        <div class="iapp-search-results-wrap" style="display: none">\n            <div class="iapp-search-results-inner-wrap"></div>\n        </div>\n        <div class="iapp-detail-container"></div>\n    </div>\n    <div class="iapp-info-button">\n        <img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/question-icon.svg" alt="Info">\n    </div>\n</div>\n\n<div class="iapp-info-wrap">\n    <div class="iapp-info-close"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/close-icon-white.svg" alt="close"></div>\n    <div class="iapp-info-inner-wrap">\n        <h3 class="iapp-info-header">Credits</h3>\n        <p class="iapp-info-p">Meghan Hoyer, Jodi Upton, Mitchell Thorson, Shawn SUllivan, USA TODAY</p>\n    </div>\n    <div class="iapp-detail-background js-iapp-info-background"></div>\n</div>\n<div class="iapp-mobile-video-container"></div>\n';

}
return __p
};

this["templates"]["EntryView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="iapp-search-entry-title">' +
((__t = ( facility )) == null ? '' : __t) +
'</h2>\n';

}
return __p
};

this["templates"]["HospitalView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-detail-inner-wrap">\n    <h2 class="iapp-detail-head">' +
((__t = (facility)) == null ? '' : __t) +
'</h2>\n    <p><td class="table-number">' +
((__t = (city)) == null ? '' : __t) +
', ' +
((__t = (state)) == null ? '' : __t) +
' </td></p>\n    <div class="iapp-detail-group">\n            <span class="iapp-detail-data-label"> </span>\n            <span class="iapp-detail-data-text label label-primary">';
print(Math.round(pct_appts_over_30_day*10)/10);
__p += '%</span><span> of pending appointments not fulfilled within 30 days of the patient’s desired date.</span>\n            \n        </div>\n    <h3 class="iapp-detail-sub-head">Region Overview</h3>\n    <div class="iapp-detail-chart"></div>\n    <div class="iapp-detail-key">\n        <div class="iapp-detail-key-item">\n            <span class="iapp-detail-key-color police"></span>\n            <span class="iapp-detail-key-text">Vacant Positions: </span>\n            <br/>\n            <span class="iapp-detail-key-item-number">' +
((__t = (positions_vacant)) == null ? '' : __t) +
'</span>\n        </div>\n        <div class="iapp-detail-key-item">\n            <span class="iapp-detail-key-color driver"></span>\n            <span class="iapp-detail-key-text">Filled Positions:</span>\n            <br/>\n            <span class="iapp-detail-key-item-number">';
 print(overall_jobs - (Math.round(positions_vacant*10)/10));
__p += '</span>\n        </div>\n    </div>\n    <h3 class="iapp-detail-sub-head">Region Breakdown</h3>\n       <table class="table table-condensed">\n            <tr>\n                <th>Overall Vacancy</th>\n                <td class="table-number">';
print(Math.round(overall_percent_vacant*10)/10);
__p += '%</td>\n            </tr>\n            <tr>\n                <th>Schedulers / Workflow Assistants</th>\n                <td class="table-number">';
print(Math.round(scheduler_clinic_workflow*10)/10);
__p += '%</td>\n            </tr>\n            <tr>\n                <th>Nurses</th>\n                <td class="table-number">';
print(Math.round(nurse*10)/10);
__p += '%</td>\n            </tr>\n            <tr>\n                <th>Physical Therapists</th>\n                <td class="table-number">';
print(Math.round(physical_therapist*10)/10);
__p += '%</td>\n            </tr>\n            <tr>\n                <th>Physicians</th>\n                <td class="table-number">';
print(Math.round(physician*10)/10);
__p += '%</td>\n            </tr>\n            <tr>\n                <th>Physician Assistants</th>\n                <td class="table-number">';
print(Math.round(physician_assistant*10)/10);
__p += '%</td>\n            </tr>\n            <tr>\n                <th>Psychologists</th>\n                <td class="table-number">';
print(Math.round(psychology*10)/10);
__p += '%</td>\n            </tr>\n        </table>\n</div>\n<div class="iapp-detail-share-wrap">\n    <span class="iapp-detail-share-button">Share</span>\n    <div class="iapp-share-icon-wrap">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-icon iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/twitter.svg" alt="Twitter share"></a>\n        <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-icon iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/facebook.svg" alt="Facebook share"></a>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["IntroVideo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (isMobile || isTablet) { ;
__p += '\n    <div class="video-wrap video-wrap-mobile"> \n';
 } else { ;
__p += '\n    <div class="video-wrap"> \n';
 } ;
__p += '\n    <div class="video-intro-overlay">\n        <div class="video-intro-overlay-content">\n            <h2 class="iapp-header">Police chases kill thousands</h2>\n                <p class="video-intro-overlay-chatter">Critics say the Veterans Health Administration, which has come under fire for leaving patients waiting to receive medical treatment, has a hiring problem. Data obtained from the VHA show the agency had more than 40,000 full- and part-time medical jobs unfilled as of July 15. At some VHA locations, more than half of many critical jobs are open.</p>\n            ';
 if (!isMobile) {;
__p += '\n                <div class="iapp-tablet-play-button"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/play-icon-white.svg" alt="Play video"></div>\n                <div class="iapp-button iapp-video-skip-button"><div class="iapp-button-text">Search Data</div></div>\n            ';
 } ;
__p += '\n        </div>\n        </div>\n        ';
 if (!isMobile) { ;
__p += '\n        <!-- Video Controls -->\n        <div class="video-close-button iapp-button" style="display: none"><div class="iapp-button-text">Skip Video</div></div>\n        <div id="video-controls" class="">\n            <div id="play-pause" class="play"></div>\n            <div id="seek-bar">\n                <div id="video-dot"></div>\n            </div>\n        </div> \n        ';
 } ;
__p += '\n        ';
 if (!isMobile) { ;
__p += '\n        <video id="introvid" class="bgvideo" poster="http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/img/video_still.jpg">\n        ';
 } else { ;
__p += '\n        <video id="introvid" class="bgvideo" controls poster="http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/img/video_still.jpg">\n        ';
 } ;
__p += '\n            <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/media/' +
((__t = ( video_name)) == null ? '' : __t) +
'.mp4" type="video/mp4" />\n            <source src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/police-chases/media/' +
((__t = ( video_name)) == null ? '' : __t) +
'.ogv" type="video/ogg" />\n        </video>\n        ';
 if (isMobile || isTablet) { ;
__p += '\n            <div class="iapp-button iapp-video-skip-button"><div class="iapp-button-text">Search Data</div></div>\n        ';
 } ;
__p += '\n</div>\n\n\n';

}
return __p
};

this["templates"]["NationalView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-detail-inner-wrap">\n    <h2 class="iapp-detail-head">Veterans Health Administration</h2>\n    <div class="iapp-detail-group">\n            <span class="iapp-detail-data-label">Overall Medical Vacancies: </span>\n            <span class="iapp-detail-data-text label label-primary">' +
((__t = ( overall_percent_vacant )) == null ? '' : __t) +
'%</span>\n        </div>\n    <h3 class="iapp-detail-sub-head">National Overview</h3>\n    <div class="iapp-detail-chart"></div>\n    <div class="iapp-detail-key">\n        <div class="iapp-detail-key-item">\n            <span class="iapp-detail-key-color police"></span>\n            <span class="iapp-detail-key-text">Vacant Positions: </span>\n            <br/>\n            <span class="iapp-detail-key-item-number">' +
((__t = (total_vacant_jobs)) == null ? '' : __t) +
'</span>\n        </div>\n        <div class="iapp-detail-key-item">\n            <span class="iapp-detail-key-color driver"></span>\n            <span class="iapp-detail-key-text">Filled Positions:</span>\n            <br/>\n            <span class="iapp-detail-key-item-number">';
 print(overall_jobs - total_vacant_jobs);
__p += '</span>\n        </div>\n\n        <!-- I removed one of the key items here -->\n    </div>\n    <h3 class="iapp-detail-sub-head">Systems with largest vacancies</h3>\n    <table class="table table-condensed">\n        <thead>\n            <tr>\n                <th>Health Care System</th>\n                <th>Location</th>\n                <th>Overall Vacancy</th>\n                <th>Critical Need</th>\n                <th>Critical Vacancy</th>\n            </tr>\n        </thead>\n        <tbody>\n        ';
 _.each(top_10, function(facility) { ;
__p += '\n            <tr>\n                <td>' +
((__t = ( facility.facility )) == null ? '' : __t) +
'</td>\n                <td class="table-number">' +
((__t = ( facility.city )) == null ? '' : __t) +
', ' +
((__t = ( facility.state )) == null ? '' : __t) +
' </td>\n                <td class="table-number">';
print(Math.round(facility.overall_percent_vacant*10)/10);
__p += '%</td>\n                <td class="table-number">' +
((__t = ( facility.critical_job )) == null ? '' : __t) +
'</td>\n                <td class="table-number">';
print(Math.round(facility.critical_vacancy_rate*10)/10);
__p += '%</td>\n            </tr>\n        ';
 }); ;
__p += '\n        </tbody>\n    </table>\n</div>\n<div class="iapp-detail-share-wrap">\n    <span class="iapp-detail-share-button">Share</span>\n    <div class="iapp-share-icon-wrap">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-icon iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/twitter.svg" alt="Twitter share"></a>\n        <a href=\'https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (stillimage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'\' class="iapp-share-button iapp-share-icon iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/07/rape-kits/img/facebook.svg" alt="Facebook share"></a>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

  return this["templates"];

});