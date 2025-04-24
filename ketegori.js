// Fungsi untuk menentukan kategori berdasarkan usia
function getKategoriUsia(usia) {
    if (usia >= 0 && usia <= 12) {
      return 'Anak-anak';
    } else if (usia >= 13 && usia <= 17) {
      return 'Remaja';
    } else if (usia >= 18 && usia <= 59) {
      return 'Dewasa';
    } else if (usia >= 60) {
      return 'Lansia';
    } else {
      return 'Tidak valid';
    }
  }
  
  // Contoh data input usia beberapa orang
  const dataUsia = [5, 13, 18, 25, 32, 8, 60, 70]; // Bisa diubah sesuai kebutuhan
  
  // Objek untuk menyimpan jumlah kategori
  let kategoriCount = {
    'Anak-anak': 0,
    'Remaja': 0,
    'Dewasa': 0,
    'Lansia': 0
  };
  
  // Loop untuk menghitung jumlah per kategori
  for (let i = 0; i < dataUsia.length; i++) {
    let kategori = getKategoriUsia(dataUsia[i]);
    if (kategoriCount.hasOwnProperty(kategori)) {
      kategoriCount[kategori]++;
    }
  }
  
  // Menampilkan hasil
  console.log("Hasil Klasifikasi Usia:");
  for (let kategori in kategoriCount) {
    console.log(`${kategori}: ${kategoriCount[kategori]} orang`);
  }
  