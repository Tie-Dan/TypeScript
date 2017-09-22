/**
 * Created by tiedan on 2017/7/9.
 */
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        console.log("\u6211\u7684\u540D\u5B57\u53EB:" + this.name + ",\u6211\u7684\u5E74\u9F84:" + this.age);
    };
    return Person;
}());
var p = new Person('孙鹏', 18);
p.show();
