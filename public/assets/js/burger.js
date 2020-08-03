console.log("burger js ")
$(document).ready(function () {

  $("#form-devour").on("submit", function (event) {
    event.preventDefault();
    var id = $(this).children().val();
    console.log(id)
    var newDevoured = true;

    var newState = { devoured: newDevoured };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function () {
      location.reload();
    })
  });
});