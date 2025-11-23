
const apartments = [
    { id: 1, name: "Sunrise Apartments", available: 4, cost: 50 },
    { id: 2, name: "City View Suites", available: 3, cost: 70 },
    { id: 3, name: "Green Residency", available: 1, cost: 40 },
];


const apartmentList = document.getElementById('apartmentList');
if (apartmentList) {
    apartments.forEach(apt => {
        const div = document.createElement('div');
        div.className = 'apartment';
        div.innerHTML = `
            <h3>${apt.name}</h3>
            <p>Available: ${apt.available}</p>
            <p>Cost per Night: $${apt.cost}</p>
            <a href="apt-details.html?id=${apt.id}" class="btn">View Details</a>
        `;
        apartmentList.appendChild(div);
    });
}


const detailsContent = document.getElementById('detailsContent');
if (detailsContent) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const apt = apartments.find(a => a.id == id);
    if (apt) {
        detailsContent.innerHTML = `
            <h2>${apt.name}</h2>
            <p>Available: ${apt.available}</p>
            <p>Cost per Night: $${apt.cost}</p>
            <h3>What this place offers</h3>
            <li> Lock on bedroom door </li>
            <li> Fully equipped kitchen </li>
            <li> WiFi </li>
            <li> Free parking on premises </li>
            <li> Pets are allowed </li>
        `;
    }
}


const apartmentSelect = document.getElementById('apartmentSelect');
if (apartmentSelect) {
    apartments.forEach(apt => {
        const option = document.createElement('option');
        option.value = apt.id;
        option.textContent = apt.name;
        apartmentSelect.appendChild(option);
    });

    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Booking successful!');
        bookingForm.reset();
    });
}