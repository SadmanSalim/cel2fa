let button = document.getElementById('pmt_btn');
button.addEventListener('click', function() {
    let pmt = prompt('Type 1 and press ok for next step');
    if(pmt == 1){
        let pmt2 = prompt('Now Press 2 To  Proceed');
        if(pmt2 == 2){
            let pmt3 = prompt('Enter Celcius Value');
            let celcius = Number(pmt3);
            let far = (celcius * 9/5)+32;

            if(pmt3 > 1){
                // document.write(`${far}`);
                alert(`Fahrenhiet Value is ${far}`);

            }
            else{
                alert('Invaild Input Plase Dont Use Negative Values');

            }
        }
        else{
            alert('Invaild Input Follow Instructions Properly');
        }
        

    }
    else{
        alert('Invaild Input Follow Instructions Properly');
    }
    
})