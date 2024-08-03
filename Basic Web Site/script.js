document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("animationBox");
    let pos = 0;
    let direction = 1;

    function animate() {
        pos += 2 * direction;
        if (pos > 150 || pos < 0) {
            direction *= -1;
        }
        box.style.top = `${pos}px`;
        requestAnimationFrame(animate);
    }

    animate();
});
