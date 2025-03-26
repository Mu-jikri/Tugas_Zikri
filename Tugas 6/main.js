// main.js
import { index, store, destroy } from "./controller";

const main = () => {
  // Tambah dua data baru
  store({ nama: "Jikri", umur: 20, alamat: "Jl. P" });
  store({ nama: "Sarah", umur: 21, alamat: "Jl. E" });

  // Tampilkan data
  console.log("Data setelah penambahan:");
  index();

  // Hapus salah satu data
  destroy("Data 5");

  // Tampilkan data setelah dihapus
  console.log("Data setelah penghapusan:");
  index();
};

main();
