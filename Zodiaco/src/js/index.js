document.addEventListener('DOMContentLoaded', ()=>{
    tuZodiaco();
})

function tuZodiaco(){
    const fecha = document.querySelector('#nacimiento');
    fecha.addEventListener('keydown',(e)=>{
        if(e.key == 'Enter'){
            const nacimiento = new Date(e.target.value);
            console.log(nacimiento.getDate() + 1);
            const day = e.target.value;
            
            switch(nacimiento.getMonth() + 1){
                case 1:
                    if(mayorMenor(nacimiento.getDate() + 1, 20)){
                        alerta('ACUARIO', day)
                    }else{
                        alerta('CAPRICORNIO', day)
                    }
                    break;
                case 2:
                    if(mayorMenor(nacimiento.getDate() + 1, 19)){
                        alerta('PISCIS', day)
                    }else{
                        alerta('ACUARIO', day)
                    }
                    break;
                case 3:
                    if(mayorMenor(nacimiento.getDate() + 1, 20)){
                        alerta('ARIES', day)
                    }else{
                        alerta('PISCIS', day)
                    }
                    break;
                case 4:
                    if(mayorMenor(nacimiento.getDate() + 1, 20)){
                        alerta('TAURO', day)
                    }else{
                        alerta('ARIES', day)
                    }
                    break;
                case 5:
                    if(mayorMenor(nacimiento.getDate() + 1, 20)){
                        alerta('GEMINIS', day)
                    }else{
                        alerta('TAURO', day)
                    }
                    break;
                case 6:
                    if(mayorMenor(nacimiento.getDate() + 1, 21)){
                        alerta('CANCER', day)
                    }else{
                        alerta('GEMINIS', day)
                    }
                    break;
                case 7:
                    if(mayorMenor(nacimiento.getDate() + 1, 22)){
                        alerta('LEO', day)
                    }else{
                        alerta('CANCER', day)
                    }
                    break;
                case 8:
                    if(mayorMenor(nacimiento.getDate() + 1, 23)){
                        alerta('VIRGO', day)
                    }else{
                        alerta('LEO', day)
                    }
                    break;
                case 9:
                    if(mayorMenor(nacimiento.getDate() + 1, 22)){
                        alerta('LIBRA', day)
                    }else{
                        alerta('VIRGO', day)
                    }
                    break;
                case 10:
                    if(mayorMenor(nacimiento.getDate() + 1, 23)){
                        alerta('ESCORPIO', day)
                    }else{
                        alerta('LIBRA', day)
                    }
                    break;
                case 11:
                    if(mayorMenor(nacimiento.getDate() + 1, 22)){
                        alerta('SAGITARIO', day)
                    }else{
                        alerta('ESCORPIO', day)
                    }
                    break;
                case 12:
                    if(mayorMenor(nacimiento.getDate() + 1, 21)){
                        alerta('CAPRICORNIO', day)
                    }else{
                        alerta('SAGITARIO', day)
                    }
                    break;

            }
        }
        
    })
}

function mayorMenor(day, limit){
    if(day > limit){
        return true
    }else{
        return false
    }
}

function alerta(typeZodiaco, fecha){
    alert(`Su signo Zodiacal: ${typeZodiaco} Fecha seleccionada: ${fecha}`);
}