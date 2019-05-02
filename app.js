$(".submit").on("click", function(e) {
  e.preventDefault();
  var newReservation = {
    name: $("#name")
      .val()
      .trim(),
    number: $("#phone")
      .val()
      .trim(),
    id: $("#id")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim()
  };
  $.post("/api/reserve", newReservation, function(data) {
    // If a table is available... tell user they are booked.
    if (data) {
      alert("Yay! You are officially booked!");
    }

    // If a table is available... tell user they on the waiting list.
    else {
      alert("Sorry you are on the wait list");
    }
  });
});
