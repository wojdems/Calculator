
let $number1=document.getElementById(`number1`)
let $number2=document.getElementById(`number2`)
let $resultbox=document.getElementById(`result`)
let $mathContainer=document.getElementById(`mathContainer`)


function plus() {
    $resultbox.value=parseInt($number1.value) + parseInt($number2.value)
    $mathContainer.innerHTML+=`<p></p>` + $number1.value + `+` + $number2.value + `=` + $resultbox.value
    updateLocalStorage($number1.value + `+` + $number2.value + `=` + $resultbox.value)
}

function minus() {
    $resultbox.value=($number1.value) - ($number2.value)
    $mathContainer.innerHTML+=`<p></p>` + $number1.value + `-` + $number2.value + `=` + $resultbox.value
    updateLocalStorage($number1.value + `-` + $number2.value + `=` + $resultbox.value)
}

function divide() {
    if (parseInt($number2.value)===0){
        $mathContainer.innerHTML+=`<p>You can't divide by 0!</p>`
    } else {
        $resultbox.value=parseInt($number1.value) / parseInt($number2.value)
        $mathContainer.innerHTML+=`<p></p>` + $number1.value + `/` + $number2.value + `=` + $resultbox.value
        updateLocalStorage($number1.value + `/` + $number2.value + `=` + $resultbox.value)
    }
}

function multipla() {  
    $resultbox.value=parseInt($number1.value) * parseInt($number2.value)
    $mathContainer.innerHTML+=`<p></p>` + $number1.value + `*` + $number2.value + `=` + $resultbox.value
    updateLocalStorage($number1.value + `*` + $number2.value + `=` + $resultbox.value)
}

function updateLocalStorage(value) {
        let tablica=[]
    if (!localStorage.getItem(`magazyn`)) {
        console.log(`Zrobiono magazyn`)
        tablica.push(value)
        localStorage.setItem(`magazyn`, JSON.stringify(tablica))
    } else {
        console.log(`Update magazynu`)
        tablica = JSON.parse(localStorage.getItem(`magazyn`))
        tablica.push(value)
        localStorage.setItem(`magazyn`, JSON.stringify(tablica))
        console.log(localStorage.getItem(`magazyn`))
    } 
}

if(localStorage.getItem(`magazyn`)) {
    let actualElements = JSON.parse(localStorage.getItem(`magazyn`))
    
    for(let i=0; i<actualElements.length; i++) {
        $mathContainer.innerHTML += `<p>` + actualElements[i] + `</p>`
    }
}
