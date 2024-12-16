window.onresize = function inExAngle() {
    let height = window.screen.height;
    let width = window.screen.width;
    let temp = Math.atan(height/width);
    let answer = 90 - temp;
    let theElements=document.getElementsByClassName("option");
    let theyElements = document.getElementsByClassName("rotate");
    theElements[0].style.transform = `skewX(${-answer}deg)`;
    theElements[1].style.transform = `skewX(${-answer}deg)`;
    theyElements[0].style.transform = `skewX(${answer}deg)`;
    theyElements[0].style.transform = `skewX(${answer}deg)`;
}