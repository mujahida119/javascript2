//Chapter: 25---30//

// Answer no 1 //


//var first = prompt('Enter your first name');
//var last = prompt('Enter your last name');
//var result = first + last;
 //alert(result)



 //Answer no 2 //


 //var fav_mobile = prompt('Enter your favourite mobile phone name');
 //var len = fav_mobile.length;
 //alert("My favourite mobile is : " +  fav_mobile + "   length of string is :  "+ len )



 // Answer no 3 //


//var str = "Pakistani";
//var end = str.indexOf("n");
//alert("String : " + str);
//alert("Index of n : " + end)



// Answer no 4


//var str = "Hello world";
//var end = str.lastIndexOf("l");
//alert("String : " + str);
//alert("Index of L :" + end)


// Answer no 5 


//var str = "Pakistani";
//var end = str.charAt(3);
//alert("String : " + str);
//alert(" Character at Index 3 : " + end)


// Answer no 6


//var first = prompt("Enter your first name");
//var last = prompt("Enter your last name");
 //var result = first.concat(last);
// alert(result)


// Answer no 7

//var word = "Hyderabad";
//var change = word.replace("Hyder" , "Islama");
// alert("City : " + word);
 //alert("After replacement : " + change)


 // Answer no 8



 //var txt = "Ali and Sami are best friends .they play cricket and football together.";
 //var change = txt.replace(/and/g ,"&");
 //alert(txt);
 //alert(change)


// Answer no 9


//var str = ("472");
//var num = Number (str);
//alert("Type : " + num);
//alert("Type : string")
//alert("value : " + str);
//alert("Value : number" );


// Answer no 10 


//var word = "peanuts";
//var change = word.toUpperCase("peanuts");
 // alert(change)


 // Answer no 11

 //var word = "javascript";
 //var change = word.toUpperCase("");
 // alert("User input : " + word);
 // alert("Title case : " + change)


 // Answer no 11

 //var word = prompt("Enter a word");
 //alert("User input : " + word);
 //alert("Title case : " + 
  // word.split(" ").map(w=>w[0].toUpperCase() + w.substr(1).toLowerCase()).join(" ")
  // )




 // Answer no 12

    
  //var num = 35.36;
 //var string =num.toString();
 //document.write("string number : " + string);
 


// Answer no 13



//var username = prompt("Enter your name");
//var str = username.length;
 //for(i -0 ; i < username.length ; i++){
   // if(username.slice(i , i + 1 ) == "!" || username.slice(i , i + 1 )== "@" || username.slice(i , i +1));
//alert("Invalid name");
 
//}



// Answer no 14

//var a=prompt("enter your fruit");
//var arr = ["cake", "apple", "cookie", "chips", "patties"]
 //var change = arr[2];
     
  
 //alert("cookie is avsible at index 2 in our bakery: " + change)



 // Answer no 16


//var word = ("University of karachi");
//var change = word.split("").reverse();
//alert(  change)







// Chapter 26-30 



// Answer no 1
 
// sec (a)

//var number = prompt("")
//var num = "12";
//var num1 = Number(num);
//alert(num1)



// sec (b)

//var num = "3.45214";
//var round = Number(num);
//document.write("number : ", + round)



// sec (c)

//var num = "3.45214";
//var round = Math.floor(num);
//document.write("floor value : ", + round)



// sec (d)


//var num = "3.45214";
//var round = Math.ceil(num);
//document.write("Ceil value : ", + round)




// Answer no 2


  // sec (a)

//var num = "-2.673";
//var round = Number(num);
//document.write("number : ", + round)


// sec (b)



//var num = "-2.673";
//var round = Math.round(num);
//document.write("round off value : ", + round)



// sec (c)


//var num = "-2.123";
//var round = Math.floor(num);
//document.write("floor  value : ", + round)


// sec (d)

//var num = "-2.673";
//var round = Math.ceil(num);
//document.write("ceil value : ", + round)



// Answer no 3







// Answer no 4

//var num = 4;
//var round = num.toFixed(1)
//document.write("random dice value : ", + round)




// Answer no 6


//var random = Math.floor(Math.random() * 100 ) +1;
//console.log("random number between 1 and 100 : "  +  random)




// Answer no 7

//var a= prompt("enter your weight in kilogram");
//var b ="50";
//var c =Math.random() * b;
//alert("the weight of user is : " +  c  + ":  kilograms")




// Chapter 31-34 



// Answer no 1


//var dat = new Date("sat,december 5,2015  22:18:39");
 //document.write(dat)



 // Answer no 2


//function month (){
  //var name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //var currentDate =new Date();
  //var result = name[currentDate.getMonth()];
  //document.write("Current month : "  +  result)
//}
//month();



// Answer no 3

//var weekday=prompt("Today is ")
//var week = new Array;
// week[0]= "Mon";
 //week[1]= "Tue";
 //week[2]= "Wed";
 //week[3]= "Thu";
 //week[4]= "Fri";
 //week[5]= "Sat";
 //week[6]= "Sun";


 //if(week[0] === "Mon"){
  //alert("Today is : " + week[0]);
 //}

 // if (week[1] === "Tue"){
  //alert("Today is : " + week[1]);
   
// }
  //if (week[2] === "Wed"){
  //alert("Today is : " + week[2])
//}
 //if (week[3] === "Thu"){
  //alert("Today is : " + week[3]);
  
//}
 //if (week[4] === "Fri"){
 // alert("Today is : " + week[4]);
//}
//if (week[5] === "sat"){
 // alert("Today is : " + week[5]);
//}
 //if (week[6] === "Sun"){
  //alert("Today is : " + week[6]);
  
//}
    



// Answer no 4



//var weekday=prompt("Today is ")
//var week = new Array;
//week[0]= "Mon";
//week[1]= "Tue";
//week[2]= "Wed";
// week[3]= "Thu";
 //week[4]= "Fri";
//week[5]= "Sat";
 //week[6]= "Sun";
//alert("Today is : " + week[6]);
// if(week[6] === "sun"){
  // alert("it's fun day" );
 //}

 //else if (week[5] === "sat"){
   
  // alert("it's fun day");
 //}
  

    

 // Answer no 5

//var a =new Date();
//var b = a.getDay();
 //if(b < 16 ){
  // alert("First fifteen days of the month");
 //}
 //else("Last days of the month");
 
    

 // Answer no 7


//var time = +prompt("Enter the time 24hours formate");
//if(time === 12){
  //alert("Its AM");
//}
//else{
 // ("Its PM");
 
//}




// Answer no 8


//var dat = new Date("thu dec 31 2020 00:00:00");
//document.write("Later date : " + dat);


// Answer n0 9

//var days = 171;
//document.write(days +  " days have passed sine 1st Ramadan,2015  ");




// Answer no 10


//var dat = new Date("sat , december 5 , 2015  22:50:16 ");
 //var dt =dat.getSeconds(488091);
 //document.write("On reference date Sat Dec : " + dat)
 // document.write("second has passed since beginning of 2015 : " , +dt);


// Answer no 11   incomplet


 //var Dte = new Date("sat , Dec 5 , 2015  23:08:16 ");
 //document.write("current date: Sat Dec " , + Dte);
 




// Chapeter no 35-38



// Answer no 1


//function mydate(){
    //var dt = new Date();
    //alert("date :" + dt);
   
//}

//mydate()



// Answer no 2


//function user(){
 // var first_name="Ghous";
  //var last_name="Ali";
  //alert(first_name + "" + last_name);
//}
//user();


// Answer no 3


//function myfunction(){
 // var a = 34;
  //var b = 23;
  //var c = a +b;
  //alert(c)
//}
//myfunction();

    

// Answer no 4


//var val1=prompt('enter your first value');
//var sign=prompt('enter your operator');
//var val2=prompt('enter your second value');
 // console.log(val1+sign+val2)

  //if(sign === '+'){
    //alert((+val1)+(+val2))
  //}
  //else if(sign === '-'){
    //alert(val1-val2)
  //}
 // else if(sign === '*'){
   // alert(val1*val2)
  //}
 // else if(sign === '/'){
   // alert(val1/val2)
  //}




 // Answer no 5


//function myfunction(){
 // var a = Math.sqrt(9);
  //alert(a)
//}



// Answer no 6


//function factorial(x){
 // if (x == 0)
 // {
    // return 1;
  //}
  //return x * factorial(x-1);

//}
// console.log( factorial (5));



// Answer no 8 incomplt


//if(!Math.hypot)Math.hypot= function(){
   // var y = 0, i = arguments.length;
    //while (i --) y += arguments[i] * arguments[i];
    //return Math.sqrt(y);
      
   // }
   

