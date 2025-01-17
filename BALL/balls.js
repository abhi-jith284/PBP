let selectedBall = null;

document.querySelectorAll('.balls').forEach(ball => {
    ball.addEventListener('click', function() {
        if (selectedBall) return;

        selectedBall = ball;
        ball.computedStyleMap.border = "2px solid red";
    });
});

document.querySelectorAll('.firstcontainer').forEach(container => {
    container.addEventListener('click', function() {
        if(selectedBall){
            if(!container.contains(selectedBall)){
                container.appendChild(selectedBall);
                selectedBall.style.border = "";
                selectedBall = null;
            }
            
        }
    });
});

