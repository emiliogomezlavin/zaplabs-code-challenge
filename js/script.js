console.log("File is linked!");

function dropDownMenu() {
    document.getElementById("dropDown-title-1").classList.toggle("show");
    document.getElementById("dropDown-title-2").classList.toggle("show");
    document.getElementById("dropDown-title-3").classList.toggle("show");
    document.getElementById("dropDown-title-4").classList.toggle("show");
    document.getElementById("dropDown-title-5").classList.toggle("show");
    document.getElementById("dropDown-title-6").classList.toggle("show");
    document.getElementById("dropDown-title-7").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}