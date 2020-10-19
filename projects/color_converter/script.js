function hexToRgb() {
    var hex = document.getElementById('hex').value;
    var rgb = document.getElementById('rgb');
    var pattern_color = "^#([A-Fa-f0-9]{6})$";
    if (hex.match(pattern_color)) {
        var hex = hex.replace("#", "")
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);

        document.body.style.background = `rgb(${r},${g},${b})`;
        
        return rgb.value = `rgb(${r},${g},${b})`;
        
    }
    else {
        alert("It's not a hexadecimal color!");
    }
}