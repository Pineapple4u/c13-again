//q1
var colour = ["red", "black", "white"];
document.getElementById("display_array").innerHTML=colour;

//displaying the arrays 1 by 1
document.getElementById("display_element1").innerHTML=colour[0];
document.getElementById("display_element2").innerHTML=colour[1];
document.getElementById("display_element3").innerHTML=colour[2];

//qdisplay length of array
document.getElementById("display_arrayL").innerHTML=colour.length;

//accessing ass elements
var array_value=""
for (var index = 0; index < colour.length; index++) {
    var element = colour[index];
    console.log(element);
    array_value=array_value+ " " +element
    // array_value=array_value+element+"<br>"   ===> this is so that they come in different rows or like one below the other

    document.getElementById("display_elements").innerHTML=array_value
}

//adding another element at the end
colour.push("green");
document.getElementById("display_added_end").innerHTML=colour;

//removing added element from the end
colour.pop();
document.getElementById("display_removed_end").innerHTML=colour;

//adding an element in the front
colour.unshift("blue");
document.getElementById("display_added_front").innerHTML=colour;

//removing the added element from the front
colour.shift();
document.getElementById("display_removed_front").innerHTML=colour;

//converting the array into a string value
var NEW= colour.toString()
document.getElementById("display_converted_array").innerHTML=typeof NEW;






// new array
var letters = ["b", "z", "d", "t", "h", "g", "n", "e", "w", "j"];
document.getElementById("display_letters").innerHTML=letters;

//sorting array
letters.sort()
document.getElementById("display_arranged_letters").innerHTML=letters;

//sorting reversely 
letters.reverse()
document.getElementById("display_arranged_letters_rev").innerHTML=letters;

//no. array
var num = [5, 34, -1, 0, 578, 234, 694, -2875, 4, 8, 1];
document.getElementById("display_num").innerHTML=num;

//finding the max value from the num array
var max_value = Math.max.apply(Math, num);
document.getElementById("display_max_value_num").innerHTML=max_value;

//finding the min value from the num array
var min_value = Math.min.apply(Math, num);
document.getElementById("display_min_value_num").innerHTML=min_value;

//acsending order of the values
num.sort(function(a,b){return b-a})
document.getElementById("display_ascending_num").innerHTML=num;

//descending order of the values 
num.reverse(function(a,b){return a-b})
document.getElementById("display_descending_num").innerHTML=num;

// country - captial arrays
var countries = [ "India", "Afghanistan", "Indonesia", "Germany", "USA", "UK"];
var capitals = [ "Delhi", "Kabul", "Jakarta", "Berlin", "Washington DC", "London"];
document.getElementById("display_countries").innerHTML=countries;
document.getElementById("display_capitals").innerHTML=capitals;


// merging 2 arrays 
var merged_names = countries.concat(capitals);
document.getElementById("display_countries-capitals").innerHTML=merged_names;

// merging 3 arrays
var cities = ["Thimpu", "Paris", "Raipur", "Tokyo", "London"]
var merged_again = countries.concat(capitals, cities);
document.getElementById("display_3_arrays").innerHTML=merged_again;

//merging string with array
var merged_2 = countries.concat("Japan", "Bhutan", "Thailand"); //if u like u can put just - "Japan" - that works as well (for push and concat)
document.getElementById("display_country7").innerHTML=merged_2;
countries.push("Japan", "Bhutan", "Thailand");
document.getElementById("display_countries1").innerHTML=countries;
