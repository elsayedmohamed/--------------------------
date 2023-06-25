let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let sayed = document.querySelector('.sayed');

window.onscroll = function () {
    let value = scrollY;

    console.log(value);
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 1.5 + 'px';
    boat.style.top = value  + 'px';
    sayed.style.fontSize=value + 'px';
    if(scrollY>=67){
        sayed.style.fontSize = 67 + 'px';
        sayed.style.position='fixed';
        if(scrollY>=422){
            sayed.style.display='none';
        }else{
            sayed.style.display='block';
        }
        if(scrollY>=140){
            document.querySelector('.main').style.background ='linear-gradient(rgb(1 73 99), rgb(204, 63, 222))';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#570163,#cc3fde)'
        }
    }
}