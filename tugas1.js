const prompt = require('prompt-sync')({sigint: true});

function hitungAkarPangkatDua(x) {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    } else {
      return Math.sqrt(x);
    }
}
while (true) {
  try {
    const input = parseInt(prompt("Masukkan bilangan genap: "));
    const hasil = hitungAkarPangkatDua(input);
    console.log(`Akar pangkat dua dari ${input} adalah ${hasil}`);
    break;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Input tidak valid. Masukkan bilangan bulat.");
    } else {
      console.error("Terjadi kesalahan. Silahkan coba lagi.");
    }
  }
}
