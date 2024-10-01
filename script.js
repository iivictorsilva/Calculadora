function appendToDisplay(value){
    document.getElementById('display').value += value;
}

// Funcão de calcular o resultado da expressaão no disoplay
function calculate(){
    try{
        // Usa a função 'eval()' para avaliar a expressão matematica inserida no display
        // 'eval()' tenta calcular a expressão a retorna o resultado
        document.getElementById('display').value = eval(document.getElementById('display').value);
    }catch(error){
        // Caso de erro, exibe uma mensagem de erro
        document.getElementById('display').value = 'Error';
    }
}


// Função para limpar o display
function clearDisplay(){
    // Define o valor do display como uma string vazia
    document.getElementById('display').value = '';
}

// Função para apagar o último caractere do display
function deleteLast(){
    // Obtem o valor atual do display
    let currentDisplay = document.getElementById('display').value;
    // Remove o último caractere do display
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}




