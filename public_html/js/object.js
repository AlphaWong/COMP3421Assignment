/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Circle() {
    var x_ = 0, y_ = 0, r_ = 0;
    this.getX = function () {
        return x_;
    };
    this.setX = function (x) {
        x_ = x;
    };
    this.getY = function () {
        return y_;
    };
    this.setY = function (y) {
        y_ = y;
    };
    this.getR = function () {
        return r_;
    };
    this.setR = function (r) {
        r_ = r;
    };
    this.doUp = function (d, mainCanvas) {
        var tmpY = this.getY() - d;
        if (tmpY - this.getR() < 0) {
            return;
        }
        this.setY(tmpY);
        //this.doUp(d,mainCanvas);
    };
    this.doDown = function (d, mainCanvas) {
        var tmpY = this.getY() + d;
        if (tmpY + this.getR() > mainCanvas.height) {
            return;
        }
        this.setY(tmpY);
        //this.doDown(d,mainCanvas);
    };
    this.doRight = function (d, mainCanvas) {
        var tmpX = this.getX() + d;
        if (tmpX + this.getR() > mainCanvas.width) {
            return;
        }
        this.setX(tmpX);
        //this.doRight(d,mainCanvas);
    };
    this.doLeft = function (d, mainCanvas) {
        var tmpX = this.getX() - d;
        if (tmpX - this.getR() < 0) {
            return;
        }
        this.setX(tmpX);
        //this.doLeft(d,mainCanvas);
    };
}

