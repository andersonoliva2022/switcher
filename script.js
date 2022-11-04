let light = true;
function change(event ) {

    event = document.querySelector('.container');
    const background = light? '#292C35': '#f1f1f1' 
    
    light = !light; /*dá o efeito de on/off*/

    event.style.backgroundColor = background;
}