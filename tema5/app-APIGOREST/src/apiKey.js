export function setApiKey() {
    const apiKey = window.prompt("Ingrese su API Key");
    if (apiKey !== null) {
        localStorage.setItem("goRestApiKey", apiKey);
        location.reload();
    }
}

function getApiKey() {
    return localStorage.getItem("goRestApiKey");
}

if (!getApiKey()) {
    setApiKey();    
}

export const TOKEN = getApiKey();
