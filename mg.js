document.querySelector(".layer-one span").onclick = function(){
let yourName=prompt("what is Your Name")
if(yourName==""||yourName==null){

document.querySelector(".info-player .name span").innerHTML="UNKNOWN"

}else{
    document.querySelector(".info-player .name span").innerHTML=yourName
}
document.querySelector(".layer-one ").remove();
} 

let duration = 1000;

let blockContainer = document.querySelector(".game-blockers") ;
let blocks = Array.from(blockContainer.children)
let orderRange = [...Array(blocks.length).keys()];
shuffle(orderRange);
console.log(orderRange)
blocks.forEach((block,index)=>{

block.style.order  = orderRange[index];

block.addEventListener('click' , function(){

flipBlock(block);

})


})
// flip block function
function flipBlock(selectedBlock){
    
    selectedBlock.classList.add("is-flipped")
    
let allFlippedBlocks = blocks.filter(flippedBlock =>flippedBlock.classList.contains('is-flipped'))

if(allFlippedBlocks.length === 2){
    
    
    // stop clicking
    stopClicking();
    // check matched
    checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1])
}

}
// creat stop clicking function
function stopClicking(){
    
    blockContainer.classList.add('no-clicking')
    setTimeout(() =>{


        blockContainer.classList.remove('no-clicking')
        
        
    },duration)
    
}
// creat a check matching function
function checkMatchedBlocks(firstBlock,secondBlock){
    let triesElement=document.querySelector('.tries span')
    if(firstBlock.dataset.info === secondBlock.dataset.info){
        
        firstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')
        firstBlock.classList.add('matched')
        secondBlock.classList.add('matched')
    
    }
    else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1 ;
        setTimeout(()=>{
            
            firstBlock.classList.remove('is-flipped')
    secondBlock.classList.remove('is-flipped')

},duration);

}







}

// creat the random function

function shuffle(array){

let current = array.length,
temp,
random;
while(current>0){
random = Math.floor(Math.random() * current);
current--;

temp = array[current];
array[current]=array[random];
array[random]=temp;
}
}



