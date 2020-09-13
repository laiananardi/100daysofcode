
const first = document.getElementById('first')
const second = document.getElementById('second')
const num = document.getElementById('num')


function convert() {

    if(first.value == '' || second.value == '' || num.value == ''){
        alert('Please, fill in all fields! ')
        first.value =  ''
        second.value = ''
        num.value = ''
    }else if(first.value == 'bin' && second.value == 'dec'){
        num.value.split('').map((char) => {
            if (char !== '0' && char !== '1'){
                return alert('Please, enter a binary number');
            } else{
                var ans = parseInt(num.value, 2);
                document.getElementById('ans').value = `Binary: ${num.value} | Decimal: ${ans}`;
                return true;
            }
        });
    }else if(first.value == 'dec' && second.value == 'bin'){
        var ans = Number(num.value).toString(2)
        document.getElementById('ans').value = ans;
        return true;
    }else{
        alert('Please, select different bases .')
        first.value =  ''
        second.value = ''
        num.value = ''
    }
}



