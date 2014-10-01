/**
 * Created by alphawong on 25/9/14.
 */
function Game() {
    var circle;
    var mainCanvas;
    var pen;
    function draw(pen_, mainCanvas) {
        window.console.log(pen_);
        pen_.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        pen_.fillStyle = "Green";
        pen_.beginPath();
        window.console.log(circle.getX());
        window.console.log(circle.getY());
        window.console.log(circle.getR());
//    pen_.arc(circle.getX(),circle().getY(),circle.getR(),0,Math.PI*2,false);
        pen_.arc(circle.getX(), circle.getY(), circle.getR(), 0, 2 * Math.PI);
        pen_.closePath();
        pen_.fill();
    };
    this.init = function () {
        mainCanvas = document.querySelector("#mainCanvas");
        circle = new Circle();
        circle.setX(mainCanvas.width * 0.5);
        circle.setY(mainCanvas.height * 0.5);
        circle.setR(mainCanvas.width*0.025);
        pen = mainCanvas.getContext("2d");
        draw(pen, mainCanvas);
        window.addEventListener("keydown", keyDownHandler, true);
    };
    function keyDownHandler(event) {
        var key = event.which;
        window.console.log(key);
        switch (key) {
            case 38://up
                circle.doUp(circle.getR(),mainCanvas);
                break;
            case 40://down
                circle.doDown(circle.getR(),mainCanvas);
                break;
            case 37://left
                circle.doLeft(circle.getR(),mainCanvas);
                break;
            case 39://right
                circle.doRight(circle.getR(),mainCanvas);
                break;
        }
        draw(pen, mainCanvas);
        //keyDownHandler(event);
        //setTimeout(keyDownHandler(event),500);
    };
    
}
;
var game = new Game();
game.init();
