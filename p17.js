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
            document.getElementById("information").innerHTML="المعلومات الشخصية: ";
        }
        function fun2(){
            document.getElementById("information").innerHTML="المؤهلات العلمية";
        }
        function fun3(){
            document.getElementById("information").innerHTML="اللغات";
        }
        function fun4(){
            
        }
        
    