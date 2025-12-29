var serverConfigDir = '/serverdat/'

function fetchServerConfig() {
    return fetch(serverConfigDir).then(response => response.json());
}

function NewDownloadRequest(url) {

}