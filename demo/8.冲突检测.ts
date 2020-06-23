/**
 * Created by tiedan on 2017/7/9.
 */
enum week{
    sun,
    sat,
    fre,
    tus
}
var w=week.sun;
//var w  这样就对了
switch(w){
    case week.sun:
        break
        //后面3个会报错
    case week.sat:
        break;
    case week.fre:
        break;
    case week.tus:
        break;
}