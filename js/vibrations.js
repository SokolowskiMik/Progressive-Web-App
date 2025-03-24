document.getElementById("vibrateButon").addEventListener('click', function() {
    const pattern = [
        200, 100,
        200, 100,
        200, 100,
        500, 100,
        500, 100,
        500, 100,
        200, 100,
        200, 100,
        200
    ];
    if('vibrate' in navigator) {
        navigator.vibrate(pattern);
    } else{
        alert("Brak możliwości wibracji");
    }
});