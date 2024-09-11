let array = [];
let arraySize = document.getElementById('arraySize').value;
const container = document.querySelector(".array-container");

function createNewArray(num) { 
    array = [];
    container.innerHTML = '';
    //for loop to generate 20 bars 
    for (let i = 0; i < num; i += 1) {  
      
      const value = Math.floor(Math.random() * 100) + 1;  
      array.push(value);  
      
      const bar = document.createElement("div"); 
    
      bar.classList.add("array-bar"); 
    
      //height for the bars  
      bar.style.height = `${value*3 }px`; 
    
      //translate torwards x axis
      bar.style.transform = `translateX(${i * 30}px)`; 
        
      // To create element "label" 
      const barLabel = document.createElement("label"); 

      barLabel.classList.add("bar_id");  
        
       
      bar.appendChild(barLabel); 
    
      // Append "div" to "data-container div" 
      container.appendChild(bar); 
    } 
  } 
createNewArray(arraySize);

document.getElementById('newArray').addEventListener('click',() => {
    arraySize = document.getElementById('arraySize').value;
    createNewArray(arraySize);
});


let speed = document.getElementById('speed').value;
document.getElementById('speed').addEventListener('input',function(){
    speed = this.value;
});


function delay(time){
    return new Promise(resolve => setTimeout(resolve,100-speed));
}


async function selectionSort() {
    const bars = document.getElementsByClassName('array-bar');
    for(let i = 0; i<array.length;i++){
        
        let minIDx = i;
        
        bars[minIDx].style.backgroundColor = "darkblue";
        for(let j = i+1; j< array.length;j++){
            bars[j].style.backgroundColor = "red";

            if(array[j] < array[minIDx]){
                bars[minIDx].style.backgroundColor = "  rgb(24, 190, 255)";
                minIDx = j;
                bars[minIDx].style.backgroundColor = 'pink';
            }
            await delay(100-speed);
            bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
        }
        let temp = array[i];
        array[i] = array[minIDx];
        array[minIDx] = temp;
    
        bars[i].style.height = `${array[i] *3}px`;
        bars[minIDx].style.height = `${array[minIDx] * 3}px`;
    
        bars[minIDx].style.backgroundColor = "  rgb(24, 190, 255)";
    }
   
}

document.getElementById('selectionSort').addEventListener('click',selectionSort);


async function bubbleSort() {
    const bars = document.getElementsByClassName('array-bar');
    for(let i =0; i < array.length-1; i++){
        for(let j = 0; j < array.length-1; j++){
            bars[j].style.backgroundColor = 'red';
            bars[j+1].style.backgroundColor = 'red';

            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                bars[j].style.height = `${array[j]*3}px`;
                bars[j+1].style.height = `${array[j+1]*3}px`;
            }
            await delay(100-speed);

            bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
            bars[j+1].style.backgroundColor = "  rgb(24, 190, 255)";
        }
    }
}

document.getElementById('bubbleSort').addEventListener('click',bubbleSort);


async function insertionSort() {
    const bars = document.getElementsByClassName('array-bar');
}