(function() {
    var look = document.getElementById('look');
    var map = document.getElementById('map');
    look.addEventListener("click", function() {
        if (map.style.display == "inline-block") {
            map.style.display = "none";
        } else {
            map.style.display = "inline-block"
        }
    });



})();
