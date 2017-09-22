/**
 * Created by tiedan on 2017/7/9.
 */
class Person<T>{
    a:T;
    b:T;
}
var obj=new Person<number>();
 obj.a=15;
 //obj.b='15'; 报错
