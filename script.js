document.getElementById('submitButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var outputText = '```' + '\n' + inputText + '\n' + '```';
    document.getElementById('outputText').textContent = outputText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    var outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Copied to clipboard!');
    }, function(err) {
        console.error('Failed to copy: ', err);
    });
});
