/**
 * Created by tiedan on 2017/7/9.
 */
var Person = (function () {
    function Person(a, b) {
        this.a = a;
        this.b = b;
    }
    Person.prototype.show = function (c) {
        console.log(this.a + "," + this.b + "," + c);
    };
    return Person;
}());
var obj = new Person(12, 5);
obj.show(99);
