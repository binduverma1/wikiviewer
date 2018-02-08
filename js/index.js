$(document).ready(function(){
  
  
     $('#output').hide();
   
  $("#random").click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random" );
  });
  $("#submit").click(function(){
    var url= "https://en.wikipedia.org/w/api.php?action=opensearch&search=search";
    var search = $("#search").val(); 
    
   
  $.ajax({
      url: url, //"https://en.wikipedia.org/w/api.php?action=opensearch&search=search",
      dataType: "json",
      data: {
        action: "opensearch",
        format: "json",
        origin: "*",
        search: search,
        formatversion: "2"
      }, // added a curly brace to separate success function from data parameters
    
      success: function(data) {
        //console.log(data[1][0]);
        //console.log(data[2][0]);
        //console.log(data[3][0]);
        $("#output").show();
        $("#output").html("");
        
        for(var i=0; i<data[i].length; i++){
          $("#output").prepend("<li><a href= " +  data[3][i] +">" + data[1][i]+ "</a><p>" + data[2][i]+ "</p>              </li>");          
        };//end of for loop
        
      },
      error: function(errorMsg) {
        alert("Error");
      }
    
   
 

  
  /*$("#submit").click(function(){
    var search = $("#search").val();
    url="https://en.wikipedia.org/wiki/api.php?action=opensearch&search=search"
    api.php?action=opensearch&search=Te*/
      
    });
  });
});