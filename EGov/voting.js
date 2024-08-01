document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the selected candidate
    const candidate = document.querySelector('input[name="candidate"]:checked').value;
    
    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
});
