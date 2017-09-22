/**
 * Created by tiedan on 2017/7/9.
 */
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
var sex;
//sex='123'//报错
sex = gender.male; //对
