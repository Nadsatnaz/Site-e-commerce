(( )=>{
   const minusButton = document.querySelector(".minus-button");
   const plusButton = document.querySelector(".plus-button");
   const counterValueSpan = document.querySelector(".counter-value");

   minusButton.addEventListener("click", minusButtonHandler)
   plusButton.addEventListener("click", plusButtonHandler)

   function minusButtonHandler(){
        let counterCurrentValue = +counterValueSpan.innerHTML
        counterCurrentValue--
        if(counterCurrentValue >=0){
            counterValueSpan.innerHTML = counterCurrentValue 
        }
        
    }
   function plusButtonHandler(){
        let counterCurrentValue = +counterValueSpan.innerHTML
        counterCurrentValue++
        counterValueSpan.innerHTML =counterCurrentValue
         if (counterCurrentValue == 4){
            alert('Only 3 left in stock!')
            counterValueSpan.innerHTML = 0;
        }
    }
})()
