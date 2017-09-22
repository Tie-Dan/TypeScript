/**
 * Created by tiedan on 2017/7/9.
 */
function ajax(url:string,success:(res:string,code:number)=>void,error:(code:number)=>void){
    //签名 就是接受几个参数  返回什么
}
ajax(`1.txt`,
function (str:string,code:number) {
    // 如果 str 换成number 报错
},function (code:number) {

});
