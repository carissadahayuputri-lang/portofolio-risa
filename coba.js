function tampilkanProfil() {
  const data = [
    ["Nama", "Carissa Dahayu Putri"],
    ["Keterampilan", "Memasak dan menari"],
    ["Bahasa", "Bahasa Indonesia & Bahasa Inggris"],
    ["Proyek Favorit", "Aktif di Karang Taruna & PMR"],
    ["Alasan Memilih RPL", "Tertarik dengan teknologi & ingin membuat aplikasi bermanfaat"],
    ["Asal", "Singosari Kab Malang"],
    ["Hobi", "Membaca buku, musik, drakor, jogging, memasak"],
    ["Prestasi", "Belum ada, sedang mengembangkan diri"],
    ["Idola Favorit", "Park Jisung (NCT)"],
    ["Momen Membanggakan", "Berhasil berbicara di depan umum"],
    ["Lagu Favorit", "Pemuja Rahasia - Sheila On 7"],
    ["Sedang Dipelajari", "Pemrograman, editing video, Bahasa Inggris"],
    ["Website", "Belum ada, akan dibuat"],
    ["Tidak Suka", "Orang yang berbohong dan tidak menepati janji"],
    ["Warna Favorit", "Pink & Biru pastel"],
    ["MBTI", "INFP"]
  ];

  const list = document.getElementById("data-profil");
  list.innerHTML = "";

  data.forEach(([judul, isi]) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${judul}:</strong> ${isi}`;
    list.appendChild(item);
  });

  list.classList.remove("hidden");
}
