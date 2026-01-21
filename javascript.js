document.getElementById('btn').addEventListener('click', function (event) {
    event.preventDefault();

    let age = document.getElementById('age').value;

    if (age >= 18) {
        document.getElementById('statusMessage').innerText = "Good to go. You are eligible.";
        document.getElementById('statusMessage').style.color = "green";
    } else {
        document.getElementById('statusMessage').innerText = "Too young. You are not eligible.";
        document.getElementById('statusMessage').style.color = "red";
    }
});

document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('statusMessage').innerText = "";
});
