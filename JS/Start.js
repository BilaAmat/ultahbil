// shows hint when hover
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



// checks if the password is correct
document.querySelector("button").addEventListener("click", function () {
  var password = document.querySelector('input').value;
  if (password === "2208") {
    window.location.replace("ConnectionPage.html");
  } else {
    var rndNamber = Math.floor(Math.random() * 3) + 1;
    switch (rndNamber) {
      case 1:
        alert("Kamu salah password");
        break;
      case 2:
        alert("kamu lupa kah sama tgl ultah?");
        break;
    }

  }
});
