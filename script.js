document.addEventListener("DOMContentLoaded", function() {
    // Function to get the user's IP address
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
});