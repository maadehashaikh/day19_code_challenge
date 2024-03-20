// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.


let common_array = [1,"maadeha",true,"harry",120,false,"It is a ball"];
function filter_aray (){
  common_array.forEach((item) =>{
    if(typeof item === "string"){
    console.log(item);
    }
  })
}
filter_aray();