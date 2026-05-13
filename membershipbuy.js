 document.addEventListener('DOMContentLoaded', function() {
            // --- Mobile Nav Toggle ---
            const menuBtn = document.getElementById('menu-btn');
            const navLinks = document.querySelector('.nav_links');
            if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
            menuBtn.classList.toggle('fa-bars');
        })

        document.querySelectorAll('.nav_links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuBtn.classList.remove('fa-times');
                    menuBtn.classList.add('fa-bars');
                }
            })
        });
            }

            // --- Multi-Step Form Logic ---
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const formSteps = document.querySelectorAll('.form-step');
            const stepperItems = document.querySelectorAll('.stepper-item');
            const progressLine = document.querySelector('.stepper-line-progress');
            
            let currentStep = 1;
            const selections = {
                location: null,
                plan: null
            };

            // Function to update the form display
            const updateFormSteps = () => {
                formSteps.forEach(step => {
                    step.classList.toggle('active', parseInt(step.dataset.step) === currentStep);
                });
            };

            // Function to update the stepper progress bar
            const updateStepper = () => {
                stepperItems.forEach((item, index) => {
                    const step = parseInt(item.dataset.step);
                    if (step < currentStep) {
                        item.classList.add('completed');
                        item.classList.remove('active');
                        item.querySelector('.step-counter').innerHTML = '<i class="ri-check-line"></i>';
                    } else if (step === currentStep) {
                        item.classList.add('active');
                        item.classList.remove('completed');
                    } else {
                        item.classList.remove('active', 'completed');
                    }
                });
                
                // Update progress line width
                const activeStepperItems = document.querySelectorAll('.stepper-item.completed');
                const progressWidth = (activeStepperItems.length / (stepperItems.length - 1)) * 100;
                progressLine.style.width = `${progressWidth}%`;
            };
            
            // Function to handle navigation button visibility and text
            const updateNavButtons = () => {
                prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-block';
                if (currentStep === formSteps.length) {
                    nextBtn.textContent = 'Confirm & Pay';
                } else {
                    nextBtn.textContent = 'Next';
                }
                validateStep();
            };

            // Function to validate current step before proceeding
            const validateStep = () => {
                let isValid = false;
                if (currentStep === 1) {
                    isValid = selections.location !== null;
                } else if (currentStep === 2) {
                    isValid = selections.plan !== null;
                } else if (currentStep === 3) {
                    // Basic validation for required fields
                    const inputs = formSteps[currentStep - 1].querySelectorAll('input[required]');
                    isValid = Array.from(inputs).every(input => input.value.trim() !== '');
                } else {
                    isValid = true; // For payment step, or add validation
                }
                nextBtn.disabled = !isValid;
            };

            // Event Listeners for Next/Prev buttons
            nextBtn.addEventListener('click', () => {
                if (currentStep < formSteps.length) {
                    currentStep++;
                    updateFormSteps();
                    updateStepper();
                    updateNavButtons();
                } else {
                    // Handle form submission
                    alert('Thank you for your purchase!');
                    // Here you would typically submit the form data to a server
                    document.getElementById('purchase-form').submit();
                }
            });

            prevBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateFormSteps();
                    updateStepper();
                    updateNavButtons();
                }
            });

            // --- Step-specific Logic ---

            // Step 1: Location Selection
            const locationItems = document.querySelectorAll('.location-item');
            locationItems.forEach(item => {
                item.addEventListener('click', () => {
                    locationItems.forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');
                    selections.location = item.dataset.location;
                    validateStep();
                });
            });

            // Step 1: Location Search Filter
            const searchInput = document.getElementById('location-search-input');
            searchInput.addEventListener('keyup', () => {
                const filter = searchInput.value.toLowerCase();
                locationItems.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    item.style.display = text.includes(filter) ? '' : 'none';
                });
            });

            // Step 2: Plan Selection
            const planCards = document.querySelectorAll('.plan-card');
            planCards.forEach(card => {
                card.addEventListener('click', () => {
                    planCards.forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    selections.plan = card.dataset.plan;
                    validateStep();
                });
            });

            // Step 3: Form input validation on keyup
            formSteps[2].querySelectorAll('input[required]').forEach(input => {
                input.addEventListener('keyup', validateStep);
            });
            
            // Step 4: Payment option selection
            const paymentOptions = document.querySelectorAll('.payment-option');
            paymentOptions.forEach(option => {
                option.addEventListener('click', () => {
                    paymentOptions.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });

            // Initialize the form on page load
            updateFormSteps();
            updateStepper();
            updateNavButtons();
        });