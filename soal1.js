tampung_ganjil = [];
tampung_genap = [];

const ganjilGenap = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 3 == 0) {
      console.log("Telur");
    } else if (i % 2 == 0) {
      console.log("Ayam");
    }
  }
};
ganjilGenap(10);
