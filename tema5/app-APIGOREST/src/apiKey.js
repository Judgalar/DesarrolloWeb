export function setApiKey(){
    const apiKey = window.prompt("Ingrese su API Key");
    localStorage.setItem('goRestApiKey', apiKey);
    location.reload();
}

export function getApiKey(){
    return localStorage.getItem('goRestApiKey');
}

if(!getApiKey()){
    setApiKey();
}

export const TOKEN = getApiKey();