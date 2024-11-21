function generateTable() {
  
  let number = document.getElementById('number').value
    
     tableDiv= document.getElementById('table')
    
   
    tableDiv.innerHTML = ''
    
    
    if (!isNaN(number)) {
       
        for (let i = 1; i <= 10; i++) {
           let result = number * i
           let p = document.createElement('p')
            p.textContent = `${number} * ${i} = ${result}`
            tableDiv.appendChild(p)
        }
    } else {
       
        tableDiv.textContent = 'Please enter a valid number.'
    }
}
