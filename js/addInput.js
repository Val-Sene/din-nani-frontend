  var a = 1;
  button_add_row.onclick = function(e){
      e.preventDefault();
      a++;
           var input = document.createElement("div");
      var dtd = '<div></div>';
      input.innerHTML = document.getElementById('subinput').innerHTML + dtd;
      document.getElementById("main").append(input);
  }

  // var a = 1;
  // button_add_row1.onclick = function(e){
  //     e.preventDefault();
  //     a++;
  //          var input = document.createElement("div");
  //     var dtd = '<div></div>';
  //     input.innerHTML = document.getElementById('subinput1').innerHTML + dtd;
  //     document.getElementById("main1").append(input);
  // }

//   button_remove_row.onclick =  function(e){
//      e.preventDefault();
    
//      $("button-remove-row.onclick").on("click", "#main", function () {
//         $(this).parents("#subinput").remove();
//     })
//   }
    
