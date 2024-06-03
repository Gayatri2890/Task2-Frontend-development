function nextStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(function(stepElement) {
        stepElement.classList.remove('active');
    });

    // Show the selected step
    document.getElementById('step-' + step).classList.add('active');
}
