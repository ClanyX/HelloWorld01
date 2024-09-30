if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function count(){
    const operant1 = parseFloat(document.getElementById('operant1').value);
    const operant2 = parseFloat(document.getElementById('operant2').value);
    const operation = document.getElementById('operation').value;
    var result;

    switch(operation){
        case '+':
            result = operant1 + operant2;
            break;
        case '-':
            result = operant1 - operant2;
            break;
        case "*":
            result = operant1 * operant2;
            break;
        case "/":
            result = operant1 / operant2;
            break;
        default:
            console.log("spatna operace");
            break;
    }

    document.getElementById('result').innerText = "Result " + result
}
