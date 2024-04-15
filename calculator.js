



    // Calculate

    const display = document.getElementById('display');

    function appendNumber(number) {
        
        if(display.value.includes('.') && number === '.'){
            return;
        }
            display.value += number;
        
       
    }
    function appendOperator(operator) {
        if(display.value === '') return;
       
        display.value += operator;
    }
    function clearDisplay(){
        display.value = '';
    }
    
    function calculate(){
        
            display.value = eval(display.value);
        
        
      
    }

 function sqrt(){

            
        display.value = Math.sqrt(parseInt(display.value));
       console.log(display.value);
    return display.value;

}

