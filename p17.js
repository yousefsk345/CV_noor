var i; var t; i=20;
function startMoving(){
 document.getElementById("Myheader").style.right=i;
 i+=1;
 t=setTimeout(startMoving, 10);
}
function stoptimer(){
 clearTimeout(t);
}
function fun1(){

    document.getElementById("main-information").innerHTML= "المعلومات الشخصية <br>";
    document.getElementById("information").innerHTML= "الاسم : نور مجدي سخل <br> العمر : 19 سنة";
}
function fun2(){
    document.getElementById("main-information").innerHTML="المؤهلات العلمية <br>";
    document.getElementById("information").innerHTML="لدي لدي لدي <br>ولدي لدي لدي <br> لكن لدي ولدي";
}
function fun3(){
    document.getElementById("main-information").innerHTML="اللغات <br>";
    document.getElementById("information").innerHTML="HTML <br> CSS <br> JAVASCRIPT";
}
