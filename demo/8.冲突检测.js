/**
 * Created by tiedan on 2017/7/9.
 */
var week;
(function (week) {
    week[week["sun"] = 0] = "sun";
    week[week["sat"] = 1] = "sat";
    week[week["fre"] = 2] = "fre";
    week[week["tus"] = 3] = "tus";
})(week || (week = {}));
var w = week.sun;
//var w  这样就对了
switch (w) {
    case week.sun:
        break;
    //后面3个会报错
    case week.sat:
        break;
    case week.fre:
        break;
    case week.tus:
        break;
}
