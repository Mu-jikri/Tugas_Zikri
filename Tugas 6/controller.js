// controller.js
import users from "./data";

const index = () => {
  users.map((user, index) => {
    console.log(
      `${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${
        user.alamat
      }`
    );
  });
};

const store = (user) => {
  users.push(user);
  console.log("Data berhasil ditambahkan!");
};

const destroy = (nama) => {
  const index = users.findIndex((user) => user.nama === nama);
  if (index !== -1) {
    users.splice(index, 1);
    console.log(`Data dengan nama '${nama}' berhasil dihapus.`);
  } else {
    console.log(`Data dengan nama '${nama}' tidak ditemukan.`);
  }
};

export { index, store, destroy };
