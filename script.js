
let $number1=document.getElementById(`number1`)
let $number2=document.getElementById(`number2`)
let $resultbox=document.getElementById(`result`)
let $aaa=document.getElementById(`aaa`)
let result = 0


function plus() {
result=parseInt($number1.value) + parseInt($number2.value)
$resultbox.value=result
$aaa.innerHTML+=`<p></p>` + $number1.value + `+` + $number2.value + `=` + $resultbox.value
}

function minus() {
result=($number1.value) - ($number2.value)
$resultbox.value=result
$aaa.innerHTML+=`<p></p>` + $number1.value + `-` + $number2.value + `=` + $resultbox.value
}

function divide() {
    if (parseInt($number2.value)===0){
        console.log(`You cant divide by 0!`)
    } else {
        result=parseInt($number1.value) / parseInt($number2.value)
        $resultbox.value=result
        $aaa.innerHTML+=`<p></p>` + $number1.value + `/` + $number2.value + `=` + $resultbox.value
    }
}

function multipla() {  
result=parseInt($number1.value) * parseInt($number2.value)
$resultbox.value=result
$aaa.innerHTML+=`<p></p>` + $number1.value + `*` + $number2.value + `=` + $resultbox.value

}

