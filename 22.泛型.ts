/**
 * Created by tiedan on 2017/7/9.
 */
class Person<T>{
    a:T;
    b:T;
    constructor(a:T,b:T){
        this.a=a;
        this.b=b;
    }
    show(c:T){
        console.log(`${this.a},${this.b},${c}`);
    }
}
var obj=new Person<number>(12,5);
obj.show(99);