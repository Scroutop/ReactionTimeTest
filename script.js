let startTime;
let timeout;

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('message').innerText = "Wait for it...";
    document.getElementById('testArea').style.backgroundColor = "#f44336";
    document.getElementById('result').innerText = "";

    // Random delay between 2 to 5 seconds
    let delay = Math.random() * 3000 + 2000;

    timeout = setTimeout(() => {
        document.getElementById('testArea').style.backgroundColor = "#4CAF50";
        document.getElementById('message').innerText = "Click now!";
        startTime = new Date().getTime();
    }, delay);
});

document.getElementById('testArea').addEventListener('click', function() {
    if (startTime) {
        let endTime = new Date().getTime();
        let reactionTime = endTime - startTime;
        document.getElementById('result').innerText = `Your reaction time is ${reactionTime} ms`;
        resetTest();
    } else {
        clearTimeout(timeout);
        document.getElementById('message').innerText = "Too soon! Try again.";
        document.getElementById('testArea').style.backgroundColor = "#f44336";
    }
});

function resetTest() {
    startTime = null;
}