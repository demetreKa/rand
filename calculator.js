



    // Calculate

    const display = document.getElementById('display');

    function appendNumber(number) {
        
        
            display.value += number;
        
       
    }
    function appendOperator(operator) {
        display.value += operator;
    }
    function clearDisplay(){
        display.value = '';
    }
    
    function calculate(){
        
            display.value = eval(display.value);
        
        
      
    }

 function sqrt(){
    if(display.value.includes('√')){
            
        display.value = Math.sqrt(parseInt(display.value));
       console.log(display.value);
    return display.value;
 }
}

