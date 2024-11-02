let button = document.getElementById('pmt_btn');
button.addEventListener('click', function() {
    let pmt = prompt('Enter Celcius Value');
    let celcius = Number(pmt);
    let fahrenheith = (celcius * 9/5)+32;

    if(pmt >= 0){
        document.write(`<h1 style="color: black; font-size: 100px;">${fahrenheith}</h1>`);
    }
    else{
        document.write('<h1>Enter Valid Number</h1>');
    }
})