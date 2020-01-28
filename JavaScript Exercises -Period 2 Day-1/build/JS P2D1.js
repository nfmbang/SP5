/*
JavaScript Excercises - Period 2 Day-1
https://docs.google.com/document/d/1vl8J-PUiFIzUt6jCE9gGpiw5XvOW1L3FeouTiWemwt8/edit#

Existing functions:

1) a:

*/

var arr = ["Lars","Jan","Peter","Bo","Frederik"]

const res = arr.filter(name => name.includes('a'))


/*

1) b

*/


function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

reversed = arr.map(reverseString)

/*

User defined callback functions:
2a+2n+3) 

*/

Array.prototype.myFilter = function(callback){
    var filtered = [];
    for(i = 0; i < this.length; i++){
        if(callback(this[i])) filtered.push(this[i])
    }
    return filtered;
};

Array.prototype.myMap = function(callback){
    mapped = [];
    for(i=0;i<this.length; i++){
        mapped.push(callback(this[i]));
    }
    return mapped;
};

/*
4)a
*/

var numbers = [1,3,5,10,11];

numbers.map((e,i,arr) => {return i<arr.length-1? e+arr[i+1]: e })

/*
4)b
*/

var nameArr = ["Lars", "Peter", "Jan", "Bo"];

function toNav(e,i,arr) {
    str  = "  <a href=\"\">"+e+"</a>\n"
    if(i==0) str = "<nav>\n".concat(str)
    if(i==arr.length-1) str = str.concat("</nav>")
    return str
}

/*
4)c
*/

var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

function toTable(e,i,arr){
    str  = "  <tr><td>"+e.name+"</td><td>"+e.phone+"</td></tr>\n"
    if(i==0) str = "<table>\n".concat(str)
    if(i==arr.length-1) str = str.concat("</table>")
    return str
}

//t = names.map(toTable)

//t.join("")

/*
4)d
*/

document.getElementById("4b").innerHTML = nameArr.map(toNav).join("")
document.getElementById("4c").innerHTML = names.map(toTable).join("")

/**
 * 4)e
 */

function filterName(){
    document.getElementById("4c").innerHTML = ""
    n = names.filter(e=>e.name.includes("a"))
    document.getElementById("4c").innerHTML = n.map(toTable).join("")
}

function resetTable(){
    document.getElementById("4c").innerHTML = ""
    document.getElementById("4c").innerHTML = names.map(toTable).join("")
}

document.getElementById("4e").addEventListener("click", filterName);

document.getElementById("4eReset").addEventListener("click", resetTable);

/**
 * 
 * 5)a
 */

var all= ["Lars", "Peter", "Jan", "Bo"];

comma = all.join()
space = all.join(' ')
hashtag = all.join("#")

/**
 * 5)b
 */

var numbers = [2,3,67,33];
total = numbers.reduce((total,current)=>total+current)

/**
 * 5c
 */

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]


function reducer(total,current,i,arr){
    if(i==arr.length-1) return (total.age+current.age)/arr.length
    return {age:total.age+current.age}
}

avg = members.reduce(reducer)


/**
 * 
 * 5d
 * 
 */

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

var voteCount = function(count, vote) {
    if (!count[vote]) {
      count[vote] = 1;
    } else {
      count[vote] = count[vote] + 1;
    }
    return count;
  }

totalCount = votes.reduce(voteCount,{})

/**
 * 6)
*/

function hoist(){
    a= 20
    var b = 100 
}

hoist()

a // printer 20
b // reference error.

/*
Hoisting er javascripts standard måde at håndtere variable der bliver deklereret (var).
 - ved at rykke dem til toppen af deres nuværende scope.


"Var"'s scope er dens nuværende context, i det her tilfælde funktionen.¨

Let sætter kun en variabel inden for en block (og ikke funktions scoped)
*/

/**
 * 7)
 * 
 * I java, refererer this til det nuværende objekt.
 * 
 * this i javascript refererer til et globalt objekt, fx. window
 */



 /**
  * 
  * 8)
  */

  