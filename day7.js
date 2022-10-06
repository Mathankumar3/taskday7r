// a.Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){

    var data=JSON.parse(request.response);

    console.log(data);

    var result = data.filter((element)=>{
        return element.region ==="asia";
    })
    console.log(result);
}

// b. Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){

    var data=JSON.parse(request.response);

    console.log(data);

    var result1 = data.filter((element1)=>{
        return element1.population <=200000;
    })
    console.log(result1);
}

// c. Print the total population of countries using reduce function

var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){

    var data=JSON.parse(request.response);

    console.log(data);

    var result2 = data.reduce ((element1)=>{
        return element1.population ;
    })
    console.log(result2);
}

// d. Print the country which uses US Dollars as currency

var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){

    var data=JSON.parse(request.response);

    console.log(data);

    var result3 = data.filter ((element3)=>{
        return element3.currencies ==="us-dollars" ;
    })
    console.log(result3);
}

var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){

    var data=JSON.parse(request.response);

    console.log(data);


    forEach (data.index){
    console.log(data[i].name);
    }
    forEach (data.index){
        console.log(data[i].flag);
        }
     for(i=0; i<data.length;i++){
         console.log(`countryName-${data[i].name} and flag-${data[i].flag}`)
          } 



}