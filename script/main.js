// Fungsi untuk menampilkan notifikasi SweetAlert saat tombol login ditekan
function Submit() {
  Swal.fire({
      title: "Succes!", // Judul notifikasi
      text: "Login Berhasil", // Pesan dalam notifikasi
      icon: "success" // Jenis ikon notifikasi (dalam hal ini, ikon sukses)
});
}

// Mendapatkan elemen dengan ID "waktu" untuk menampilkan waktu
const waktu = document.getElementById("waktu");

// Fungsi untuk menampilkan tanggal dan waktu secara real-time
function tanggal(){
  const date = new Date(); // Membuat objek Date yang merepresentasikan waktu saat ini
  const options = {
      weekday: 'long', // Menampilkan nama hari secara lengkap (misalnya: Senin)
      day: 'numeric', // Menampilkan tanggal (misalnya: 1, 2, 3)
      month: 'long', // Menampilkan nama bulan secara lengkap (misalnya: Januari)
      year: 'numeric', // Menampilkan tahun (misalnya: 2024)
      hour: 'numeric', // Menampilkan jam (format 24 jam)
      minute: 'numeric', // Menampilkan menit
      second: 'numeric', // Menampilkan detik
      timeZoneName: 'short' // Menampilkan nama zona waktu (misalnya: WIB)
  };
  waktu.innerHTML = date.toLocaleString('id-ID', options); // Menampilkan waktu dalam bahasa Indonesia dengan format yang telah ditentukan
}

// Memanggil fungsi tanggal setiap 1000 milidetik (1 detik) untuk memperbarui waktu secara real-time
setInterval(tanggal, 1000);

// Memanggil fungsi tanggal untuk pertama kali saat halaman dimuat agar waktu ditampilkan secara langsung
tanggal();
