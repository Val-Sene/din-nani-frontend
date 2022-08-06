  var a = 1;
  button_add_row.onclick = function(e){
      e.preventDefault();
      a++;
           var input = document.createElement("div");
      var dtd = '<div></div>';
      input.innerHTML = document.getElementById('subinput').innerHTML + dtd;
      document.getElementById("main").append(input);
  }

//   button_remove_row.onclick =  function(e){
//      e.preventDefault();
    
//      $("button-remove-row.onclick").on("click", "#main", function () {
//         $(this).parents("#subinput").remove();
//     })
//   }
    
