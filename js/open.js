/**
 * Created by Administrator on 2018/4/25.
 */
var OpenPage =  function ()  {
    var _this = this;
    this.initpage= function () {
        setTimeout(function () {
            var logo = document.querySelector('.open-page .logo-icon');
            var logoclasslist = logo.classList;
            logoclasslist.remove('logo-icon_start');
            logoclasslist.add('logo-icon_end');
            setTimeout(function () {
                logo.style="transition: none";
                logoclasslist.remove('logo-icon_end');
            },1000);
        },500);

        setTimeout(function () {
            var appname = document.querySelector('.open-page .app-name');
            var logoclasslist = appname.classList;
            logoclasslist.remove('app-name_start');
            logoclasslist.add('app-name_end');
            setTimeout(function () {
                appname.style="transition: none";
                logoclasslist.remove('app-name_end');
            },1000);
        },500);
    }();

};
var openpage = new OpenPage();
document.onload=openpage.initpage;

