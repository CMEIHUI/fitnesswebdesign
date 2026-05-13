document.addEventListener('DOMContentLoaded', () => {
        // --- MOCK DATABASE ---
        const allGyms = [
            { id: 1, name: 'Anggun City Rawang', distance: '10.6 km', address: 'Pusat Komersial Anggun City, 1, Jalan Anggun City 1, Taman Anggun, 48000 Rawang, Selangor, Malaysia', location: 'Rawang' },
            { id: 2, name: 'Selayang', distance: '12.9 km', address: 'LG-51, Lower Ground Floor, 168 Park Selayang, Jln Kuching, 68100 Batu Caves, Selangor', location: 'Selayang' },
            { id: 3, name: 'Melawati', distance: '14.5 km', address: 'Wisma LJT, 7, Lorong Perak, Taman Melawati, 53100 Kuala Lumpur, Selangor', location: 'Kuala Lumpur' },
            { id: 4, name: 'Cheras South', distance: '11.2 km', address: '02-11, Cheras Traders Park, Jln Dataran Cheras 7, 43200 Cheras, Selangor', location: 'Cheras' },
            { id: 5, name: 'Puchong ', distance: '18.0 km', address: 'Lot 21, 2, Rio Exchange IOI Rio, Lebuh Puteri, Bandar Puteri, 47100 Puchong, Selangor', location: 'Puchong' },
            { id: 6, name: 'Kajang', distance: '5.0 km', address: 'Blok B&C, Lot, 5, Seksyen 10, Jalan Bukit, Taman Bukit Mewah, 43000 Kajang, Selangor', location: 'Kajang' }
        ];

        // --- DOM ELEMENTS ---
        const menuBtn = document.getElementById('menu-btn');
        const navLinks = document.querySelector('.nav_links');
        const steps = document.querySelectorAll('.form-step');
        const prevButtons = document.querySelectorAll('.back-btn');
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('location-search');
        const step1NextBtn = document.getElementById('step-1-next-btn');
        const gymList = document.getElementById('gym-list');
        const noResultsMessage = document.getElementById('no-results-message');
        const selectedGymInfo = document.getElementById('selected-gym-info');
        const currentLocationLink = document.getElementById('current-location-link');
        const passForm = document.getElementById('pass-form');
        const step3FormContent = document.getElementById('step-3-form-content');
        const step3SuccessMessage = document.getElementById('step-3-success-message');
        const startOverBtn = document.getElementById('start-over-btn');


        let currentStep = 0;

        // --- FUNCTIONS ---
        const showStep = (stepIndex) => {
            steps.forEach((step, index) => {
                step.classList.toggle('active', index === stepIndex);
            });
        };

        const updateGymList = (results) => {
            gymList.innerHTML = ''; // Clear previous results
            if (results.length > 0) {
                noResultsMessage.style.display = 'none';
                gymList.style.display = 'block';
                results.forEach(gym => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <a href="#" class="gym-select-btn" data-gym-id="${gym.id}">
                            <div class="gym-info">
                                <strong>${gym.name}</strong><span>${gym.distance}</span>
                            </div>
                            <p class="gym-address">${gym.address}</p>
                        </a>
                    `;
                    gymList.appendChild(listItem);
                });
            } else {
                gymList.style.display = 'none';
                noResultsMessage.style.display = 'block';
            }
        };

        const handleSearch = (query) => {
            const lowerCaseQuery = query.toLowerCase();
            const results = allGyms.filter(gym => 
                gym.name.toLowerCase().includes(lowerCaseQuery) ||
                gym.address.toLowerCase().includes(lowerCaseQuery) ||
                gym.location.toLowerCase().includes(lowerCaseQuery)
            );
            updateGymList(results);
            currentStep = 1; // Move to step 2
            showStep(currentStep);
        };
        
        // --- EVENT LISTENERS ---
        // Hamburger Menu Toggle
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
        });

        // Search Form
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleSearch(searchInput.value);
        });
        
        step1NextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleSearch(searchInput.value);
        });
        
        currentLocationLink.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.value = 'Kajang'; // Simulate finding current location
            handleSearch('Kajang');
        });

        // Step Navigation
        prevButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const prevStepId = button.getAttribute('data-prev');
                const prevStepIndex = Array.from(steps).findIndex(step => step.id === prevStepId);
                if (prevStepIndex !== -1) {
                    currentStep = prevStepIndex;
                    showStep(currentStep);
                }
            });
        });

        // Event delegation for dynamically created gym links
        gymList.addEventListener('click', (e) => {
            const link = e.target.closest('.gym-select-btn');
            if (link) {
                e.preventDefault();
                const gymId = parseInt(link.getAttribute('data-gym-id'));
                const selectedGym = allGyms.find(gym => gym.id === gymId);

                if (selectedGym) {
                    selectedGymInfo.innerHTML = `
                        <h5>${selectedGym.name}</h5>
                        <p>${selectedGym.address}</p>
                    `;
                    currentStep = 2; // Move to step 3
                    showStep(currentStep);
                }
            }
        });

        // Final Form Submission
        passForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would add form validation here
            step3FormContent.style.display = 'none';
            step3SuccessMessage.style.display = 'block';
        });

        // Start Over Button
        startOverBtn.addEventListener('click', (e) => {
            e.preventDefault();
            passForm.reset(); // Clear the form fields
            step3SuccessMessage.style.display = 'none';
            step3FormContent.style.display = 'block';
            currentStep = 0;
            showStep(currentStep);
        });

        document.getElementById("start-over-btn").addEventListener("click", function() {
        window.location.href = "index.html"; // change to your main page URL
});
    }); 