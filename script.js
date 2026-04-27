function calculate() {
    // Get elements safely
    let principalEl = document.getElementById("principal");
    let rateEl = document.getElementById("rate");
    let timeEl = document.getElementById("time");

    // Safety check (prevents null errors)
    if (!principalEl || !rateEl || !timeEl) {
        console.error("One or more input elements not found in DOM");
        return;
    }

    // Convert values to numbers
    let principal = parseFloat(principalEl.value);
    let rate = parseFloat(rateEl.value);
    let time = parseFloat(timeEl.value);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    // Interest calculation
    let interest = (principal * rate * time) / 100;

    // Display result
    document.getElementById("result").innerText = "Interest: " + interest;
}