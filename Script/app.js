/* main JavaScript file */

//global scope
//var tom = "tom";



//IIFE - Immidiately Invoked Function Expression
(function(){
    
    "use strict";
    
//code goes in here    
    //console.log ("App Started...");
    console.log("jjjj")
    
    
    /*
    //declare named function
    function writeToFirstParagraph() {
        //or debuging only
       console.log("executing writeToFirstParagraph");
        
        //create a reference to a p element with an id of forstParagraph
    var firstParagraph = document.getElementById("firstParagraph");
    
    firstParagraph.textContent = "Its Alive!!!";
        
        console.log(tom);
        
    }*/
    
        //declare a variable that points to anonymous function
    var writeToFirstParagraph=function () {
        //or debuging only
       console.log("executing writeToFirstParagraph");
        
        //create a reference to a p element with an id of forstParagraph
    var firstPTag = document.getElementById("firstParagraph");
    
    firstPTag.textContent = "Its Alive!!!";
        
        console.log(tom);
        
    }
    
    var alias = writeToFirstParagraph;
    
    //execute function
    writeToFirstParagraph();
 
    console.log(alias);
})();



