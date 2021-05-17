class Shape{
    constructor() {
        this.container = document.querySelector("#container");
        this.color = 'blue';
        this.shape = 'circle';
        this.container.addEventListener("click",this.setShape.bind(this));
    }
    setShape(e){
        let xAxis = e.offsetX;
        let YAxis = e.offsetY;
        if (e.target.className === "canvas"){
            const canvas = e.target
            canvas.innerHTML += `<span class="${this.shape}" style="z-index: -999;position:absolute;left: ${xAxis -25}px;top:${YAxis -25}px; width: 50px;height: 50px; background-color:${this.color}"></span>`;
        }
        if(e.target.classList.contains('color')){
            this.color = e.target.classList[1];
        }
        if(e.target.classList.contains("shape")){
            this.shape = e.target.classList[1];
        }
        if (e.target.className === "btn"){
            document.querySelector(".canvas").innerHTML = "";
        }
    }
}
new Shape();