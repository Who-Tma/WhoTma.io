const Loadingimg = document.getElementById('Loadingimg');
const LDSD = document.getElementById('LDSD');
const LoadingSec = document.getElementById('LoadingSec');

document.addEventListener('DOMContentLoaded',()=>{
    console.log('Loading Ok');
    Loadingimg.classList = 'LoadingimgAnim';
    LDSD.classList = 'LDSDAnim';
    setTimeout(()=>{
        console.log('Loading Page Off , 2000s');
        LDSD.classList = 'LDSDAnimOff';
        setTimeout(()=>{
            LoadingSec.style.display = 'none';
        },2000)

    },2000)
})


// BoxStar
const Box = document.getElementById('starBox');
const starCount = 80;
 
for (let i = 0 ; i<starCount; i++){
    const star = document.createElement("span");
    star.classList.add('star');

    const x = Math.random() * Box.clientWidth;
    const y = Math.random() * Box.clientHeight;
    
    // transfor
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // scale
    // at 2 to 5
    const size = Math.random() * 1.1 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // opacity 0 to 1 Time
    setInterval(()=>{
        star.classList.toggle("on");
    }, 200);


Box.appendChild(star);

}
