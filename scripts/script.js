const imgsSlot1 = ["../imgs/cat5.jfif","../imgs/cat25.jfif","../imgs/cat50.jfif","../imgs/cat100.jfif","../imgs/cat500.jfif","../imgs/catCurring.jfif"]
const imgslot1 = document.getElementById("img_1")
const imgslot2 = document.getElementById("img_2")
const imgslot3 = document.getElementById("img_3")
const btnPlayer = document.getElementById("btn_play")
const progressBar = document.getElementById("js_progress")
let Nivel = document.getElementById("level")
let Coin = document.getElementById("js_coin")
let CoinHave = document.getElementById("value_coins")


let PontosXp =0;
let nivel = 0
progressBar.max=25
let current = parseFloat(Coin.innerText) || 0
let currentCoin = parseFloat(CoinHave.innerText) || 0





btnPlayer.addEventListener("click",() =>{
    PontosXp++;
    const index1 = Math.floor(Math.random() * imgsSlot1.length);
    const index2 = Math.floor(Math.random() * imgsSlot1.length);
    const index3 = Math.floor(Math.random() * imgsSlot1.length);
    
    imgslot1.src = imgsSlot1[index1]
    imgslot2.src = imgsSlot1[index2]
    imgslot3.src = imgsSlot1[index3]
    console.log(index1,index2,index3)
    CheckPar(index1,index2,index3);
    progressBar.value = PontosXp;
    if( PontosXp >= progressBar.max){
        nivel++
        Nivel.innerText = nivel
        progressBar.max +=25
        PontosXp = 0
    }
   
 function CheckPar( index1,index2,index3 ){
    let soma = 0
    if((index1 == 0 && index2 == 0 && index3 ==0) ||
       (index1 == 0 && index2 == 0 && index3 == 5)||
       (index1 == 0 && index2 == 5 && index3 == 0)||
       (index1 == 5 && index2 == 0 && index3 == 0)||
       (index1 == 5 && index2 == 5 && index3 == 0)||
       (index1 == 5 && index2 == 0 && index3 == 5)||
       (index1 == 0 && index2 == 5 && index3 == 5)){
       soma = 5
            
    } else if((index1 == 1 && index2 == 1 && index3 ==1) ||
    (index1 == 1 && index2 == 1 && index3 == 5)||
    (index1 == 1 && index2 == 5 && index3 == 1)||
    (index1 == 5 && index2 == 1 && index3 == 1)||
    (index1 == 5 && index2 == 5 && index3 == 1)||
    (index1 == 5 && index2 == 1 && index3 == 5)||
    (index1 == 1 && index2 == 5 && index3 == 5)){
        soma = 25
    }else if((index1 == 2 && index2 == 2 && index3 ==2) ||
    (index1 == 2 && index2 == 2 && index3 == 5)||
    (index1 == 2 && index2 == 5 && index3 == 2)||
    (index1 == 5 && index2 == 2 && index3 == 2)||
    (index1 == 5 && index2 == 5 && index3 == 2)||
    (index1 == 5 && index2 == 2 && index3 == 5)||
    (index1 == 2 && index2 == 5 && index3 == 5)){
      soma = 50
    }else if ((index1 == 3 && index2 == 3 && index3 ==3) ||
    (index1 == 3 && index2 == 3 && index3 == 5)||
    (index1 == 3 && index2 == 5 && index3 == 3)||
    (index1 == 5 && index2 == 3 && index3 == 3)||
    (index1 == 5 && index2 == 5 && index3 == 3)||
    (index1 == 5 && index2 == 3 && index3 == 5)||
    (index1 == 3 && index2 == 5 && index3 == 5)){
        soma = 100
    }else if((index1 == 4 && index2 == 4 && index3 ==4) ||
    (index1 == 4 && index2 == 4 && index3 == 5)||
    (index1 == 4 && index2 == 5 && index3 == 4)||
    (index1 == 5 && index2 == 4 && index3 == 4)||
    (index1 == 5 && index2 == 5 && index3 == 4)||
    (index1 == 5 && index2 == 4 && index3 == 5)||
    (index1 == 4 && index2 == 5 && index3 == 5)){
        soma = 500
    }else if(index1 == 5 && index2 == 5 && index3 == 5){
       soma = 1000
    }

    if(soma > 0){
        current += soma
        Coin.innerText = current.toFixed(2)
    }
 }   

    

})
