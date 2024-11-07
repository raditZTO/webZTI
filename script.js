// Dummy credentials (you can replace this with your actual authentication logic)
const validUsername = "admin1";
const validPassword = "radit1234";

// Event listener untuk form login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim

    // Ambil nilai input username dan password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validasi login
    if (username === validUsername && password === validPassword) {
        // Redirect ke dashboard
        window.location.href = "dashboard.html"; // Redirect ke dashboard setelah login sukses
    } else {
        // Menampilkan pesan error jika login gagal
        document.getElementById("error-message").style.display = "block";
    }
});
