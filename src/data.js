const books = [
  {
      id: 1,
      title: "Savaş ve Barış",
      author: "Lev Tolstoy",
      category: "Klasik Roman",
      description: "Rusya'nın tarihini ve insan ruhunun derinliklerini ele alan epik bir hikaye.",
      coverImage: "https://marketplace.canva.com/EAFbGbYVD7g/1/0/1024w/canva-%C3%A7ok-renkli-i%CC%87ll%C3%BCstrasyon-wattpad-e-kitap-kapa%C4%9F%C4%B1-k3Inc5GgdDo.jpg",
      status: "ongoing",
      likes: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 5000),
      rating: 4.5,
      popularityScore: 90,
      chapters: [
          {
              id: 1,
              title: "Birinci Bölüm",
              content: "Bu, Savaş ve Barış kitabının birinci bölümü için içeriktir.",
              publishDate: "2023-12-01",
              isFree: true,
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
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOorO0sZgCLKZKSK__x1Hf9qj2mUvll7TDtyzGb3vSrQClJX53CTsUfJubeW0mWS85YY&usqp=CAU",
      status: "complete",
      likes: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 5000),
      rating: 4.8,
      popularityScore: 85,
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
  {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      category: "Bilim Kurgu",
      description: "Çöl gezegeni Arrakis'in epik hikayesi.",
      coverImage: "https://marketplace.canva.com/EAFNrmZiXpE/1/0/1024w/canva-mavi-ve-sar%C4%B1-renkte-i%CC%87ll%C3%BCstrasyon-wattpad-kitap-kapa%C4%9F%C4%B1-PWvcUd7Sdv8.jpg",
      status: "ongoing",
      likes: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 5000),
      rating: 4.7,
      popularityScore: 92,
      chapters: [
          {
              id: 1,
              title: "Kum Tepeleri",
              content: "Dune kitabının birinci bölümü.",
              publishDate: "2023-11-15",
              isFree: true,
              comments: [],
          },
      ],
  },
  {
      id: 4,
      title: "Harry Potter ve Felsefe Taşı",
      author: "J.K. Rowling",
      category: "Fantastik",
      description: "Harry Potter'ın Hogwarts'taki ilk yılı ve büyü dünyasına giriş hikayesi.",
      coverImage: "https://static-cse.canva.com/blob/1769753/1024w-YK0hJ7kFmP8.jpg",
      status: "complete",
      likes: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 5000),
      rating: 4.9,
      popularityScore: 95,
      chapters: [
          {
              id: 1,
              title: "Privet Drive",
              content: "Harry'nin macerasının başlangıcı.",
              publishDate: "2023-12-05",
              isFree: true,
              comments: [],
          },
      ],
  },
  {
      id: 5,
      title: "Sherlock Holmes - Kızıl Dosya",
      author: "Arthur Conan Doyle",
      category: "Polisiye",
      description: "Sherlock Holmes'un maceralarından biri.",
      coverImage: "https://marketplace.canva.com/EAFz20JYZ28/1/0/1003w/canva-mavi-beyaz-sanatsal-gen%C3%A7-adam-sil%C3%BCeti-ve-g%C3%B6ky%C3%BCz%C3%BC-kitap-kapa%C4%9F%C4%B1-fGGHMUhQij8.jpg",
      status: "ongoing",
      likes: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 5000),
      rating: 4.6,
      popularityScore: 88,
      chapters: [
          {
              id: 1,
              title: "Bölüm 1",
              content: "Sherlock'un ilk ipuçlarını bulduğu bölüm.",
              publishDate: "2023-10-10",
              isFree: true,
              comments: [],
          },
      ],
  },
];

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

const banners = [
    {
        id: 1,
        image: "https://cdn-th.tunwalai.net/files/home/241211/aa7648cd-4d57-40ef-b5a1-87a8a475900f_app.jpg",
        bookId: 1,
    },
    {
        id: 2,
        image: "https://cdn-th.tunwalai.net/files/home/241211/e79a18b1-7e2a-4e48-bf16-d1ad14b65a4e_app.jpg",
        bookId: 2,
    },
    {
        id: 3,
        image: "https://cdn-th.tunwalai.net/files/home/241211/c3819268-4547-4da5-86d2-dcb74142933e_app.jpg",
        bookId: 3,
    },
];


export default books;
export { categories, banners };
