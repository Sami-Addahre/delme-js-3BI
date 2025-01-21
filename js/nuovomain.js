const $ = document.querySelector.bind(document); // Alias per selezionare il primo elemento nel DOM
const $$ = document.querySelectorAll.bind(document); // Alias per selezionare tutti gli elementi nel DOM

function test() {
    console.log('test');
}

const t = test; // Assegno la funzione test alla costante t

// Seleziono il primo paragrafo <p> nel documento
const paragrafo = $('p');

// Aggiungo la classe 'red' al paragrafo selezionato
paragrafo.classList.add('red');

console.log(paragrafo);

// Creo un nuovo elemento <p>
const nuovoParagrafo = document.createElement('p');

// Creo un nodo di testo da aggiungere al nuovo paragrafo
const testo = document.createTextNode('Testo del paragrafo');
console.log(testo);

// Aggiungo il nodo di testo al nuovo paragrafo con appendChild
nuovoParagrafo.appendChild(testo);

// Esempio commentato: aggiunta di testo con textContent (ma è stato commentato)
 // nuovoParagrafo.textContent = '<strong>Testo del paragrafo con textContent</strong>';

// Esempio commentato: aggiunta di testo con innerText (ma è stato commentato)
// nuovoParagrafo.texText = 'Testo del paragrafo con texText';

// Aggiungo contenuto al paragrafo usando innerHTML (che permette di aggiungere HTML)
const mioTesto = 'ciao';
nuovoParagrafo.innerHTML = `<strong>Testo del paragrafo con innerHTML ${5 * 4}</strong>`;

// Seleziono l'elemento header e aggiungo il nuovo paragrafo come figlio
const parent = $('header');
parent.appendChild(nuovoParagrafo);

console.log(nuovoParagrafo);

// Oggetto che rappresenta una struttura DOM gerarchica
const myDom = {
    id: "app",
    className: "container",
    type: 'div',
    children: [
        {
            type: "h2",  // Un elemento <h2>
            children: [{
                type: "text",  // Un testo dentro <h2>
                value: "Titolo"
            }],
        },
        {
            type: "p",  // Un elemento <p>
            children: [{
                type: "text",  // Un testo dentro <p>
                children: [
                    {
                        type: 'strong',  // Un <strong> dentro <p>
                        children: [{
                            type: 'text',
                            value: 'Testo'
                        }],
                    }
                ],
            }],
        },
    ],
};

// Funzione ricorsiva per "renderizzare" l'oggetto myDom in HTML
function render(dom, parent) {
    const element = document.createElement(dom.type);  // Creo un nuovo elemento in base al tipo (div, p, h2, etc.)
    
    // Se l'oggetto ha una classe, la assegno all'elemento
    if (dom.className) {
        element.className = dom.className;
    }
    
    // Se l'oggetto ha un id, lo assegno all'elemento
    if (dom.id) {
        element.id = dom.id;
    }
    
    // Caso base della ricorsione: se l'oggetto ha una proprietà 'value', lo metto come contenuto di testo
    if (dom.value) {
        element.textContent = dom.value;
        parent.appendChild(element);  // Aggiungo l'elemento creato come figlio del parent
        return;
    }
    
    // Se l'oggetto ha dei figli, li creo ricorsivamente
    if (dom.children) {
        dom.children.forEach(child => {
            render(child, element);  // Chiamo render ricorsivamente per ogni figlio
        });
    }
}

// Seleziono tutti gli elementi <p> nel documento
const paragrafi = document.querySelectorAll('p');

// C'è un errore di battitura: 'paragrafti' dovrebbe essere 'paragrafi'
console.log(paragrafi);

// Funzione ricorsiva per fare un conto alla rovescia
function contaAllaRovescia(num) {
    console.log(num);  // Stampa il numero attuale
    if (num === 0) {  // Se arrivo a 0, interrompo la ricorsione
        return;
    }
    contaAllaRovescia(num - 1);  // Chiamo la funzione ricorsivamente con il numero decrementato
}

// Avvio il conto alla rovescia da 10
contaAllaRovescia(10);
