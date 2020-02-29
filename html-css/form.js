$(document).ready(function () {



  $("#try").click(function(){
    var injuries = [];
    
    $.each($(".chosen-select option:selected"), function(){            
        injuries.push($(this).val());
    });
    console.log("You have selected the injuries - " + injuries.join(", "));
  });
});

