function rollDice() {
    const dieSelect = document.getElementById('die-select');
    const dieValue = dieSelect.value;
    const dice = document.getElementById('dice');
    const result = document.getElementById('result');

    // Add rolling animation
    dice.classList.remove('rolling');
    void dice.offsetWidth;  // Trick to restart CSS animation
    dice.classList.add('rolling');

    // Fetch result from backend
    fetch('/roll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ die: dieValue })
    })
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            result.textContent = 'Result: ' + data.result;
        }, 1000); // Show result after animation
    });
}
