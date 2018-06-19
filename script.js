// In this file i use the javascript date function  .. and have created the landing page


var daynum= document.getElementById('dayNum');
var hournum = document.getElementById('hournum');
var minnum = document.getElementById('minnum');
var secnum = document.getElementById('secnum');
var num  =60;

 setInterval(function(){
    var current = new Date();
    var future = new Date('2018,10,23');
    var remainMilli = future-current; 
    var remainday = Math.trunc(remainMilli/1000/60/60/24);
    var hour_a_day =  Math.trunc(remainMilli/1000/60/60) - remainday*24;
    var total_min = remainMilli/ 1000/60;
        var min_a_day =   Math.trunc(total_min- remainday*1440);
        var minutes = Math.trunc(min_a_day - hour_a_day*60);
   
    daynum.innerHTML = remainday;
    hournum.innerHTML = hour_a_day;
    minnum.innerHTML = minutes;



    secnum.innerHTML = num - current.getSeconds();
 },1000);

 
  
  
  




