$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    $(".result").hide();
    var foodArray = [];
    $("input:checkbox[name=foods]:checked").each(function() {
      var food = $(this).val();
      foodArray.push(food);
    });
    var colorArray = [];
    $("input:checkbox[name=color]:checked").each(function() {
      var color = $(this).val();
      colorArray.push(color);
    });
    var petArray = [];
    $("input:checkbox[name=pets]:checked").each(function() {
      var pet = $(this).val();
      petArray.push(pet);
    });

    if (foodArray.includes("oatmeal") && foodArray.includes("raisins")) {
      $("#or").show();
    } else if (foodArray.includes("chocolate")) {
      $("#cc").show();
    } else if (colorArray.length > 3) {
      $("#sugar").show();
    } else {
      $("#sugar").show();
    }

  });
  $("#clear").click(function(){
    $("#quiz").trigger("reset");
    $(".result").hide();
  });
});
