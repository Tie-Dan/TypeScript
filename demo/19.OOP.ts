/**
 * Created by tiedan on 2017/7/9.
 */
class Person{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    show(){
        console.log(`我的名字叫:${this.name},我的年龄:${this.age}`);
    }
}
var p = new Person('孙鹏',18);
p.show();