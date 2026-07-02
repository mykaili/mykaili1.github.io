// View Switching Logic
const portfolioBtn = document.getElementById('view-portfolio-btn');
const dashboardBtn = document.getElementById('view-dashboard-btn');
const portfolioView = document.getElementById('portfolio-view');
const dashboardView = document.getElementById('dashboard-view');

portfolioBtn.addEventListener('click', () => {
    portfolioBtn.classList.add('active');
    dashboardBtn.classList.remove('active');
    portfolioView.classList.remove('hidden');
    dashboardView.classList.add('hidden');
});

dashboardBtn.addEventListener('click', () => {
    dashboardBtn.classList.add('active');
    portfolioBtn.classList.remove('active');
    dashboardView.classList.remove('hidden');
    portfolioView.classList.add('hidden');
});

// Live Clock for Dashboard Widget
function updateClock() {
    const now = new Date();
    
    // Time
    const timeString = now.toLocaleTimeString();
    const clockElement = document.getElementById('clock');
    if(clockElement) clockElement.textContent = timeString;
    
    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    const dateElement = document.getElementById('date');
    if(dateElement) dateElement.textContent = dateString;
}

// Update clock immediately and then every second
setInterval(updateClock, 1000);
updateClock();
