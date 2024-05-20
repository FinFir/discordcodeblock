document.getElementById('submitButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var outputText = '```' + '\n' + inputText + '\n' + '```';
    document.getElementById('outputText').textContent = outputText;
});
