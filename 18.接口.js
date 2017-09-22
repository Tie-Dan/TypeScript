function greeter(person) {
    return "搬砖:" + person.firstName + " " + person.lastName;
}
var user = { firstName: "张三", lastName: "李四" };
console.log(greeter(user));
