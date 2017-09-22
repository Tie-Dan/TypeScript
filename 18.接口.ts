/**
 * Created by tiedan on 2017/7/9.
 */
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "搬砖:" + person.firstName + " " + person.lastName;
}

var user = { firstName: "张三", lastName: "李四" };

console.log(greeter(user));
