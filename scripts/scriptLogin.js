// Variabel untuk elemen HTML
const loginForm = document.getElementById('loginForm');
const namaInput = document.getElementById('nama');
const passwordInput = document.getElementById('password');
const termsCheckbox = document.getElementById('termsCheckbox');
const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');

// Password kelas yang benar
const correctPassword = 'elusiva2025';

// Fungsi untuk menampilkan pesan
function showMessage(text, type = 'danger') {
  message.innerHTML = `<div class="alert alert-${type}" role="alert">${text}</div>`;
}

// Fungsi untuk menangani login
loginBtn.addEventListener('click', () => {
  const nama = namaInput.value.trim();
  const password = passwordInput.value.trim();
  const isTermsChecked = termsCheckbox.checked;

  // Kondisi 1: Jika kedua input kosong
  if (!nama && !password) {
    showMessage('Input nama kelas dan password kosong!');
    return;
  }

  // Kondisi 2: Jika input nama kelas terisi tapi password kosong
  if (nama && !password) {
    showMessage('Input password kosong!');
    return;
  }

  // Kondisi 3: Jika password terisi tapi nama kelas kosong
  if (!nama && password === correctPassword) {
    namaInput.value = 'Guest';
  }

  // Kondisi 4: Jika password salah
  if (password && password !== correctPassword) {
    showMessage('Password salah!');
    setTimeout(() => {
      passwordInput.value = ''; // Kosongkan input password setelah 2 detik
      message.innerHTML = ''; // Hapus pesan error
    }, 2000);
    return;
  }

  // Kondisi 5: Kalau input benar tapi checkbox belum dicentang
  if (nama && password === correctPassword && !isTermsChecked) {
    showMessage('Harap menyetujui Terms & Privacy kelas kami!');
    return;
  }

  // Kondisi 6: Jika semua input benar dan checkbox dicentang
  if (nama && password === correctPassword && isTermsChecked) {
    showMessage('Logging in...', 'success'); // Pesan sukses
    loginBtn.disabled = true; // Disable tombol selama loading
    loginBtn.innerText = 'Wait...'; // Ubah teks tombol jadi "Wait..."

    // Simulasi loading sebelum redirect
    setTimeout(() => {
      window.location.href = 'mainX.html'; // Redirect ke mainX.html
    }, 2000);
  }
});
