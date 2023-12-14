var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send()
req.onload = function(){

var res = req.response;
// console.log(res);

var arrObj = JSON.parse(res);
console.log(arrObj);

//1st question
var continent = arrObj.filter((ele)=>ele.continents=='Asia')
console.log(continent);
var country=  continent.map((ele)=>ele.name.common)
console.log(country);

//2nd question
var pop = arrObj.filter((ele1)=>ele1.population<200000);
console.log(pop);
var popu1 = pop.map((ele)=>ele.name.common)
console.log(popu1);

//3rd question
var ncf1 = arrObj.forEach((ele)=>console.log( `country name: ${ele.name.common}, capital name ${ele.capital[0]}, flag ${ele.flag}`));

//4th question
var total = arrObj.map((ele)=>ele.population)
console.log(total);
var tot = total.reduce((acc,cv)=>acc+cv,0)
console.log(tot);

//5th question
// var currency = arrObj.filter((ele1)=>ele1.continents=='North America' || 
// ele1.continents=='South America');
var currency = arrObj.filter((ele1)=>ele1.currencies.USD.name=='United States dollar');
console.log(currency);
var curr = currency.map((ele)=>ele.name.common) 
console.log(curr);


// var dollar = currency.map((ele)=>ele.name.common)
// console.log(dollar);

// var res = arrObj.filter((ele)=>ele.population>100000);
// console.log(res);

// var res1 = arrObj.filter((ele)=>ele.population>10000 && ele.population<20000);
// console.log(res1);  

// var res2 = res1.map((ele)=>ele.name.common);

// console.log(res2);

}