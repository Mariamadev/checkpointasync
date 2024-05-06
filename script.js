async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
        console.log(value);
    }
}

// Test de la fonction
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);




async function waitCall() {
    // Simuler une attente de l'appel API
    await new Promise(resolve => setTimeout(resolve, 2000)); // Attendre 2 secondes
    
    // Données récupérées de l'API (simulées)
    const data = { id: 1, name: 'Mariama', age: 50 };

    // Enregistrer les données
    console.log('Données récupérées:', data);
}

// Appel de la fonction waitCall
waitCall();






async function waitCall() {
    try {
        // Simuler une attente de l'appel API
        await new Promise((resolve, reject) => setTimeout(() => {
            // Simuler une erreur aléatoire
            if (Math.random() < 0.5) {
                reject("Erreur: Impossible de récupérer les données de l'API");
            } else {
                resolve();
            }
        }, 2000)); // Attendre 2 secondes
        
        // Données récupérées de l'API (simulées)
        const data = { id: 1, name: 'Mariama', age: 50 };
    
        // Enregistrer les données
        console.log('Données récupérées:', data);
    } catch (error) {
        console.error(error);
    }
}

async function logMessage(message) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
    console.log(message);
}

async function chainedAsyncFunctions() {
    await logMessage('Première fonction asynchrone');
    await logMessage('Deuxième fonction asynchrone');
    await logMessage('Troisième fonction asynchrone');
}

// Appel de la fonction waitCall
waitCall();

// Appel de la fonction chainedAsyncFunctions
chainedAsyncFunctions();





async function fetchDataFromAPI(endpoint) {
    const response = await fetch(endpoint);
    return response.json();
}

async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([
            fetchDataFromAPI('https://api.example.com/endpoint1'),
            fetchDataFromAPI('https://api.example.com/endpoint2')
        ]);

        console.log('Résultat de la première requête:', result1);
        console.log('Résultat de la deuxième requête:', result2);
    } catch (error) {
        console.error('Une erreur s\'est produite:', error);
    }
}

// Appel de la fonction concurrentRequests
concurrentRequests();







async function fetchDataFromAPI(url) {
    const response = await fetch(url);
    return response.json();
}

async function parallelCalls(urls) {
    try {
        const promises = urls.map(url => fetchDataFromAPI(url));
        const responses = await Promise.all(promises);
        
        console.log('Réponses:', responses);
        
        // Faire quelque chose avec les réponses, par exemple les combiner
        // const combinedResponse = responses.reduce((acc, curr) => acc.concat(curr), []);
    } catch (error) {
        console.error('Une erreur s\'est produite:', error);
    }
}

// Appel de la fonction parallelCalls avec un tableau d'URL
parallelCalls([
    'https://api.example.com/endpoint1',
    'https://api.example.com/endpoint2',
    'https://api.example.com/endpoint3'
]);
