const categories = [
  "Romance + Dark Romance",
  "Fantasy",
  "Teenage",
  "LGBT",
  "Ghost Story",
  "Drama",
  "Historical",
  "Short Story",
];

const books = [
    {
      id: 1,
      title: "Savaş ve Barış",
      author: "Lev Tolstoy",
      category: "Klasik Roman",
      description: "Rusya'nın tarihini ve insan ruhunun derinliklerini ele alan epik bir hikaye.",
      coverImage: "https://example.com/savas-ve-baris.jpg",
      status: "ongoing", // ongoing veya complete
      likes: Math.floor(Math.random() * 1000), // Sahte bir beğeni sayısı
      views: Math.floor(Math.random() * 5000), // Sahte bir görüntüleme sayısı
      rating: 4.5, // 5 üzerinden kullanıcı puanı
      chapters: [
        {
          id: 1,
          title: "Birinci Bölüm",
          content: "Bu, Savaş ve Barış kitabının birinci bölümü için içeriktir.",
          publishDate: "2023-12-01",
          isFree: true, // Şimdilik tümü ücretsiz
          comments: [],
        },
        {
          id: 2,
          title: "İkinci Bölüm",
          content: "Bu, Savaş ve Barış kitabının ikinci bölümü için içeriktir.",
          publishDate: "2023-12-02",
          isFree: true,
          comments: [],
        },
      ],
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Bilim Kurgu",
      description: "Totaliter bir rejim altında bireysel özgürlüğün kaybı üzerine çarpıcı bir roman.",
      coverImage: "https://example.com/1984.jpg",
      status: "complete",
      likes: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 5000),
      rating: 4.8,
      chapters: [
        {
          id: 1,
          title: "Bölüm Bir",
          content: "Bu, 1984 kitabının birinci bölümü için içeriktir.",
          publishDate: "2023-12-03",
          isFree: true,
          comments: [],
        },
      ],
    },
  ];
  
  export { categories, books };
  