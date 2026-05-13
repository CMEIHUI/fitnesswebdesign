 document.addEventListener('DOMContentLoaded', function() {

        // --- Data for Gym Locations ---
        const locations = [
            {   id: 1, 
                name: 'New Era Fitness - Rawang', 
                distance: '10.6 km', 
                address: 'Pusat Komersial Anggun City, 1, Jalan Anggun City 1, Taman Anggun, 48000 Rawang, Selangor, Malaysia', 
                mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.1308458091075!2d101.53575600000002!3d3.317820000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc430039dd7d63%3A0x288f761af61c98ea!2sAnytime%20Fitness%20Anggun%20City%20(Rawang)!5e0!3m2!1szh-CN!2smy!4v1754985997826!5m2!1szh-CN!2smy" 
            },
            {   id: 2, 
                name: 'New Era Fitness - Selayang', 
                distance: '12.9 km', 
                address: 'LG-51, Lower Ground Floor, 168 Park Selayang, Jln Kuching, 68100 Batu Caves, Selangor', 
                mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.4055697702!2d101.64630727509183!3d3.2489380525308813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4748274da385%3A0x6692dc06da854c23!2s24-Hour%20Gym%3A%20Anytime%20Fitness%20168%20Park%20Selayang%2C%20Batu%20Caves%2C%20Selangor.!5e0!3m2!1szh-CN!2smy!4v1754986267732!5m2!1szh-CN!2smy"
            },
            {   id: 3, 
                name: 'New Era Fitness - Melawati', 
                distance: '14.5 km', 
                address: 'Wisma LJT, 7, Lorong Perak, Taman Melawati, 53100 Kuala Lumpur, Selangor',
                mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5544619193074!2d101.7493123!3d3.2109894000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc39006ddc426f%3A0xdd87a2940e23bb6d!2sAnytime%20Fitness%20Melawati!5e0!3m2!1szh-CN!2smy!4v1754986464432!5m2!1szh-CN!2smy"
            },
            {   id: 4, 
                name: 'New Era Fitness - Cheras', 
                distance: '11.2 km', 
                address: '02-11, Cheras Traders Park, Jln Dataran Cheras 7, 43200 Cheras, Selangor', 
                mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2222191765145!2d101.76132834015279!3d3.0349715433545645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3511aab83e9f%3A0x4378c0be40fce6c3!2sAnytime%20Fitness%20Cheras%20Traders%20Park!5e0!3m2!1szh-CN!2smy!4v1754986976584!5m2!1szh-CN!2smy"
            },
            {   id: 5, 
                name: 'New Era Fitness - Puchong ', 
                distance: '18.0 km', 
                address: 'Lot 21, 2, Rio Exchange IOI Rio, Lebuh Puteri, Bandar Puteri, 47100 Puchong, Selangor', 
                mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2747130901084!2d101.6211828174438!3d3.020699999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb525c699fd8b%3A0x56518ac62e235a11!2s24-Hour%20Gym%3A%20Anytime%20Fitness%20Bandar%20Puteri%20Puchong%20%40%20IOI%20Rio!5e0!3m2!1szh-CN!2smy!4v1754987120234!5m2!1szh-CN!2smy"
            },
            {
                id: 6,
                name: "New Era Fitness - Kajang",
                address: "Blok B&C, Lot, 5, Seksyen 10, Jalan Bukit, Taman Bukit Mewah, 43000 Kajang, Selangor",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3991240769296!2d101.79019047509189!3d2.986604254130084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb841d3762c7%3A0x4dc97330d731c530!2z5paw57qq5YWD5aSn5a2m5a2m6Zmi!5e0!3m2!1szh-CN!2smy!4v1754375934443!5m2!1szh-CN!2smy"
            }
        ];

        // --- Element Selectors ---
        const locationsList = document.getElementById('locations-list');
        const searchInput = document.getElementById('search-input');
        const mapIframe = document.getElementById('map-iframe');
        const menuBtn = document.getElementById('menu-btn');
        const navLinks = document.querySelector('.nav_links');
        const viewAllLink = document.querySelector('.view-all-link');

        // --- Functions ---

        /**
         * Renders the list of locations in the sidebar.
         * @param {Array} locationsToDisplay - The array of location objects to display.
         */
        function displayLocations(locationsToDisplay) {
            locationsList.innerHTML = ''; // Clear the current list
            if (locationsToDisplay.length === 0) {
                locationsList.innerHTML = `<li class="location-item"><p>No locations found.</p></li>`;
                return;
            }
            locationsToDisplay.forEach(location => {
                const listItem = document.createElement('li');
                listItem.className = 'location-item';
                listItem.dataset.id = location.id; // Store id for later use
                listItem.innerHTML = `
                    <h3>${location.name}</h3>
                    <p>${location.address}</p>
                `;
                locationsList.appendChild(listItem);
            });
        }

        /**
         * Updates the map iframe source and highlights the selected location.
         * @param {number} locationId - The ID of the location to display.
         */
        function selectLocation(locationId) {
            const selectedLocation = locations.find(loc => loc.id == locationId);
            if (!selectedLocation) return;

            mapIframe.src = selectedLocation.mapUrl;

            // Update active class for visual feedback
            document.querySelectorAll('.location-item').forEach(item => {
                item.classList.remove('active');
            });
            const activeListItem = document.querySelector(`.location-item[data-id='${locationId}']`);
            if(activeListItem) {
                activeListItem.classList.add('active');
            }
        }

        // --- Event Listeners ---

        // 1. Search/Filter functionality
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredLocations = locations.filter(location =>
                location.name.toLowerCase().includes(searchTerm) ||
                location.address.toLowerCase().includes(searchTerm)
            );
            displayLocations(filteredLocations);
        });
        
        // 2. View All Locations link
        viewAllLink.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.value = '';
            displayLocations(locations);
            // Optional: Reset map to a default view
            mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3236022832!2d101.52436219504855!3d3.10759333553205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4933226b2191%3A0x3334107595fc092b!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1695561523535!5m2!1sen!2sus";
        });

        // 3. Location selection (using event delegation)
        locationsList.addEventListener('click', (e) => {
            const listItem = e.target.closest('.location-item');
            if (listItem) {
                const locationId = listItem.dataset.id;
                selectLocation(locationId);
            }
        });

        // 4. Mobile hamburger menu toggle
            menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
            menuBtn.classList.toggle('fa-bars');
        });

        // --- Initial Load ---
        displayLocations(locations); // Populate the list on page load
        if(locations.length > 0) {
            selectLocation(locations[0].id); // Select the first location by default
        }
    });