const b1 = document.querySelector("body");

b1.addEventListener("mousemove",(event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const span = document.createElement("span");
    span.style.left = x + "px";
    span.style.top = y + "px"
    b1.appendChild(span);
    const size = Math.random()*100;
    span.style.width = size +  "px";
    span.style.height = size + "px";

    setTimeout(() => {
        span.remove();
    },3000)
})