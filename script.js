document.addEventListener("DOMContentLoaded", function () {
    // Function to get the user's IP address

    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.querySelector('.side-menu');

    menuBtn.addEventListener('click', function () {
        sideMenu.classList.toggle('hidden');
    });

    async function getUserIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error('Error fetching IP address:', error);
            return 'Unknown IP';
        }
    }

    // Function to get the user's browser information
    function getBrowserInfo() {
        return navigator.userAgent;
    }

    // Function to show an alert with the information
    async function showAlertWithInfo() {
        const ip = await getUserIP();
        const browserInfo = getBrowserInfo();
        const info = `Dirección IP: ${ip}\nInformación de navegador: ${browserInfo}`;

        // Show alert with the information
        alert(info);
    }

    // Call the function to show alert with info
    showAlertWithInfo();

    const themeBtn = document.getElementById("theme-btn");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeIcon.textContent = "🌙";
    } else {
        body.classList.remove("dark-theme");
        themeIcon.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            themeIcon.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.textContent = "☀️";
            localStorage.setItem("theme", "light");
        }
    });

});