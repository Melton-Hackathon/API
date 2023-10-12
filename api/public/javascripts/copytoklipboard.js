function copyURI(uri) {
    const tempInput = document.createElement('input');
    tempInput.value = uri;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('URI copied to clipboard: ' + uri);
}
