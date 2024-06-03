function nextStep(step) {
    const currentStep = document.querySelector('.step.active');
    const nextStep = document.getElementById(`step-${step}`);
    
    if (currentStep && nextStep) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
    }
}

function prevStep(step) {
    const currentStep = document.querySelector('.step.active');
    const prevStep = document.getElementById(`step-${step}`);
    
    if (currentStep && prevStep) {
        currentStep.classList.remove('active');
        prevStep.classList.add('active');
    }
}
