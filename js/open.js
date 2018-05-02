/**
 * Created by Administrator on 2018/4/25.
 */
var OpenPage =  function ()  {
    var _this = this;
    var flage = true;
    this.initpage= function () {
        _this.createdAnsyAm('.open-page .logo-icon','logo-icon_start','logo-icon_end',500,1000);
        _this.createdAnsyAm('.open-page .app-name','app-name_start','app-name_end',500,1000);
        _this.createdAnsyAm('.login-content-wapper','login-content-wapper_start','login-content-wapper_end',1500,1000);
        _this.bindEvnt();
    };
    this.createdAnsyAm= function (select,starStyle,endStyle,startTime,clearTime) {
        setTimeout(function () {
            var appname = document.querySelector(select);
            var logoclasslist = appname.classList;
            logoclasslist.remove(starStyle);
            logoclasslist.add(endStyle);
            setTimeout(function () {
                appname.style="transition: none";
                logoclasslist.remove(endStyle);
            },clearTime);
        },startTime);
    };
   this.bindEvnt = function () {
       document.getElementById('login_login_th').onclick=function () {
            // _this.createdAm('.open-page .logo-icon','logo-icon_start','logo-icon_end',500,1000);
           if(!flage){
               return;
           }

           flage = false;
           console.log(this);
            var loginfrom = document.querySelector('.login-form');
            var loginContent = document.querySelector('.login-content');
            if(!loginContent.classList.contains('blur')){
                loginContent.classList.add('blur');
            }

            var loginfromclasslist =  loginfrom.classList;
            if(loginfromclasslist.contains('shownone')){
                loginfromclasslist.remove('shownone');
            }
            setTimeout(function () {
                if(loginfromclasslist.contains('login-form_in_start')){
                    loginfromclasslist.remove('login-form_in_start');
                }
                loginfromclasslist.add('login-form_in_end');
                flage=true;
            },50);
       };
       document.getElementById('btn_cancel').onclick=function () {
           // _this.createdAm('.open-page .logo-icon','logo-icon_start','logo-icon_end',500,1000);
           if(!flage){
                return;
           }
           flage = false;
           console.log(this);
           var loginContent = document.querySelector('.login-content');
           var loginfrom = document.querySelector('.login-form');
           var loginfromclasslist =  loginfrom.classList;

           if(loginfromclasslist.contains('login-form_in_end')){
               loginfromclasslist.remove('login-form_in_end');
           }
           if(loginContent.classList.contains('blur')){
               loginContent.classList.remove('blur');
           }
            setTimeout(function () {
                if(!loginfromclasslist.contains('shownone')){
                    loginfromclasslist.add('shownone');
                }
                flage=true;
            },500);
           loginfromclasslist.add('login-form_in_start');
       };
   };
};
var openpage = new OpenPage();
openpage.initpage();
