const allMocks = [
  //Nike products
  //---------------------------Urbano--------------------------------//
  {
    name: "Air Force 1 Felt GS",
    image: "https://i.postimg.cc/1z2wL4GC/Air-Force1-Felt-GS.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 1,
    onSale: true,
    Discounts: '15'
  },
  {
    name: "Air Force 1 Gore Tex High White DS",
    image: "https://i.postimg.cc/Dz81j1X4/Air-Force1-Gore-Tex-High-White-DS.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 1,
  },
  {
    name: "Air Max 720 Orange DS",
    image: "https://i.postimg.cc/vmg6LMJW/Air-Max720-Orange-DS.jpg",
    description: "",
    price: 105.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 1,
  },
  {
    name: "Air Max 720 OG DS",
    image: "https://i.postimg.cc/FHPjVT7Q/Ai-Max720-OGDS.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 1,
  },
  {
    name: "Air Max 1 Terra",
    image: "https://i.postimg.cc/dVSyyDxs/Air-Max1-Terra.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 1,
  },
  {
    name: "Air Max 1 Parra DS",
    image: "https://i.postimg.cc/zX8Kmshr/Air-Max1-Parra-DS.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 1,
  },
  //-------------------deportivo -------------------//
  {
    name: "Nike React Infinity Run Flyknit",
    image: "https://i.postimg.cc/Wbdj43g6/Nike-React-Infinity-Run-Flyknit.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 2,
    BrandId: 1,
  },
  {
    name: "Nike Winflo 8",
    image: "https://i.postimg.cc/fT1sSNv4/Nike-Winflo8.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 2,
    BrandId: 1,
  },
  {
    name: "Nike Revolution 5",
    image: "https://i.postimg.cc/BZY4sDLn/Nike-Revolution5.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 2,
    BrandId: 1,
    onSale: true,
    Discounts: '20'
  },
  {
    name: "Nike Downshifter 11",
    image: "https://i.postimg.cc/tTDysnBD/Nike-Downshifter11.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 2,
    BrandId: 1,
  },
  {
    name: "Nike Air Max Excee",
    image: "https://i.postimg.cc/V6zmsWWd/Nike-Air-Max-Excee.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 2,
    BrandId: 1,
  },
  {
    name: "Nike Quest 4",
    image: "https://i.postimg.cc/KjzbBcVb/Nike-Quest4.jpg",
    description: "",
    price: 105.25,
    status: "disponible",
    CategoryId: 2,
    BrandId: 1,
  },

  // Jordan Products
  //---------------------------Urbano--------------------------------//
  {
    name: "Air Jordan 1 High Royal Toe",
    image: "https://i.postimg.cc/qRKy00Qk/Air-Jordan1-High-Royal-Toe.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Jordan 1 Retro High OG Bloodline",
    image: "https://i.postimg.cc/VLvsb4Qt/Jordan1-Retro-High-OGBloodline.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Air Jordan 4 Cactus Jack",
    image: "https://i.postimg.cc/wxhLGq72/Air-Jordan4-Cactus-Jack.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Jordan 1 Retro High Hyper Royal Smoke Grey",
    image: "https://i.postimg.cc/Y0npsLgj/Jordan1-Retro-High-Hyper-Royal-Smoke-Grey.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
    onSale: true,
    Discounts: '20'
  },
  {
    name: "Jordan 1 Retro High J Balvin",
    image: "https://i.postimg.cc/zD0XB6M5/Jordan1-Retro-High-JBalvin.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Jordan 1 Retro High Dark Mocha",
    image: "https://i.postimg.cc/qqMJwxN9/Jordan1-Retro-High-Dark-Mocha.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Jordan 11 Retro Playoffs Bred 2019",
    image: "https://i.postimg.cc/SKFm3hXL/Jordan11-Retro-Playoffs-Bred2019.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Jordan 4 Retro Lightning 2021",
    image: "https://i.postimg.cc/k5Q7dp80/Jordan4-Retro-Lightning2021.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Jordan 4 Retro Bred 2019",
    image: "https://i.postimg.cc/fR0w8LbT/Jordan4-Retro-Bred2019.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
    onSale: true,
    Discounts: '15'
  },
  {
    name: "Jordan 3 UNC",
    image: "https://i.postimg.cc/VLhf9MmV/Jordan3-UNC.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Air Jordan 1 Mid Military Olive",
    image: "https://i.postimg.cc/nrt7h5wq/Air-Jordan1-Mid-Military-Olive.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },
  {
    name: "Air Jordan 1 Mid SE Purple",
    image: "https://i.postimg.cc/VvBtrR3p/Air-Jordan1-Mid-SEPurple.jpg",
    description: "",
    price: 800,
    status: "disponible",
    CategoryId: 1,
    BrandId: 2,
  },

  // OFF-WHITE products
  {
    name: "Off-White Vulc Low",
    image: "https://i.postimg.cc/DzTK5PDB/OFFWHITEVulc-Low.jpg",
    description: "",
    price: 305.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 3,
  },
  {
    name: "Off-White Vulc Low Eco Canvas",
    image: "https://i.postimg.cc/k5vPHtP9/OFFWHITEVulc-Low-Eco-Canvas.jpg",
    description: "",
    price: 315.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 3,
  },
  {
    name: "Off-White Low Vulc",
    image: "https://i.postimg.cc/GmYCk5M4/Off-White-Low-Vulc.jpg",
    description: "",
    price: 335.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 3,
    onSale: true,
    Discounts: '20'
  },
  {
    name: "Off-white Drowning Man Logo Slides",
    image: "https://i.postimg.cc/4ySg5kk9/OFFWHITEDrowning-Man-Logo-Slides.jpg",
    description: "",
    price: 255.25,
    status: "disponible",
    CategoryId: 3,
    BrandId: 3,
  },

  //adidas products
  //---------------------------Deportivo --------------------------------//
  {
    name: "Adidas Ultra Boost DNA Star Wars Princess Leia",
    image: "https://i.postimg.cc/zBv2kLJx/Ultra-Boost-DNAStar-Wars-Princess-Leia.jpg",
    description: "",
    price: 120.25,
    status: "disponible",
    CategoryId: 2,
    BrandId: 4,
  },
  {
    name: "Adidas Ultra Boost OG Beyonce Ivy Park Hi Res Yellow",
    image: "https://i.postimg.cc/nzWRSHrp/Ultra-Boost-OGBeyonce-Ivy-Park-Hi-Res-Yellow.jpg",
    description: "",
    price: 185.2,
    status: "disponible",
    CategoryId: 2,
    BrandId: 4,
  },
  {
    name: "Adidas X9000L3 ",
    image: "https://i.postimg.cc/zB47S02f/Adidas-X9000-L3.jpg",
    description: "",
    price: 145.15,
    status: "disponible",
    CategoryId: 2,
    BrandId: 4,
  },
  //---------------------------Deportivo -----------------------------//
  //---------------------------Urbano --------------------------------//

  {
    name: "Adidas Yung-1 Cloud White",
    image: "https://i.postimg.cc/DwfrG9fg/Adidas-Yung1-Cloud-White.jpg",
    description: "",
    price: 195.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Superstar",
    image: "https://i.postimg.cc/WbzsCykJ/Adidas-Superstar.jpg",
    description: "",
    price: 126.15,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas 3MC Vulc",
    image: "https://i.postimg.cc/L8SybQ9Y/Adidas3-MCVulc.jpg",
    description: "",
    price: 115.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Advantage Base",
    image: "https://i.postimg.cc/g2KMFyjM/Adidas-Advantage-Base.jpg",
    description: "",
    price: 95.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Nite Jogger",
    image: "https://i.postimg.cc/Zn3cfpXx/Adidas-Nite-Jogger.jpg",
    description: "",
    price: 105.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas OZWEEGO Celox",
    image: "https://i.postimg.cc/BZ1MQftP/Adidas-OZWEEGOCelox.jpg",
    description: "",
    price: 105.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Gazelle",
    image: "https://i.postimg.cc/Zq7V0Trp/Adidas-Gazelle.jpg",
    description: "",
    price: 105.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas CRAZYCHAOS SHADOW 2.0",
    image: "https://i.postimg.cc/ZRWjd1cg/Adidas-CRAZYCHAOSSHADOW2.jpg",
    description: "",
    price: 105.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  //---------------------------Urbano --------------------------------//

  //adidas Yeezy products
  {
    name: "Adidas Yeezy 350 v2 Beluga",
    image: "https://i.postimg.cc/7Y8X5tTs/Adidas-Yeezy350-Beluga.jpg",
    description: "",
    price: 220.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy 350 v2 Citrin Reflective",
    image: "https://i.postimg.cc/gkVs8yVY/Adidas-Yeezy350v2-Citrin-Reflective.jpg",
    description: "",
    price: 285.02,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy 350 v2 Static ",
    image: "https://i.postimg.cc/qvpLLtw2/Adidas-Yeezy350v2-Static.jpg",
    description: "",
    price: 145.15,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy 500 Enflame",
    image: "https://i.postimg.cc/sgKJ0VHq/Adidas-Yeezy500-Enflame.jpg",
    description: "",
    price: 215.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy 500 Taupe Light",
    image: "https://i.postimg.cc/MGTmChhT/Adidas-Yeezy500-Taupe-Light.jpg",
    description: "",
    price: 146.15,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy 700 MNVN Bright Cyan",
    image: "https://i.postimg.cc/Lsb32xpV/Adidas-Yeezy700-MNVNBright-Cyan.jpg",
    description: "",
    price: 115.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy Boost 700 V2 Geode",
    image: "https://i.postimg.cc/Gt0Ps998/Adidas-Yeezy-Boost700-V2-Geode.jpg",
    description: "",
    price: 174.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "adidas Yeezy Boost 700 Salt",
    image: "https://i.postimg.cc/9MwtMyXH/Adidas-Yeezy-Boost700-Salt.jpg",
    description: "",
    price: 105.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy Foam RNNR MX Cream Cl",
    image: "https://i.postimg.cc/mZMyW36Q/Adidas-Yeezy-Foam-RNNRMXTCream-Cl.jpg",
    description: "",
    price: 105.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy Slide Enflame Orange",
    image: "https://i.postimg.cc/8chRdDry/Adidas-Yeezy-Slide-Enflame-Orange.jpg",
    description: "",
    price: 235.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy Slide Pure",
    image: "https://i.postimg.cc/J4Lcry9S/Adidas-Yeezy-Slide-Pure.jpg",
    description: "",
    price: 115.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  {
    name: "Adidas Yeezy Slide Soot",
    image: "https://i.postimg.cc/YqzNhr70/Adidas-Yeezy-Slide-Soot.jpg",
    description: "",
    price: 243.65,
    status: "disponible",
    CategoryId: 1,
    BrandId: 4,
  },
  // PUMA Products
  //---------------------------Urbano --------------------------------//
  {
    name: "Puma Thunder Spectra",
    image: "https://i.postimg.cc/jSypWJ5N/Puma-Thunder-Spectra.jpg",
    description: "",
    price: 165.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 5,
  },
  {
    name: "Puma RS-X3 Puzzle Limestone",
    image: "https://i.postimg.cc/K8XXv5Zx/Puma-RSX3-Puzzle-Limestone.jpg",
    description: "",
    price: 165.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 5,
  },
  //---------------------------Urbano --------------------------------//
  //---------------------------Deportivo -----------------------------//
  {
    name: "Puma Evo-Speed Haraka Future",
    image: "https://i.postimg.cc/SR5B96CL/Pumaevo-SPEEDHaraka6-Distance.jpg",
    description: "",
    price: 165.99,
    status: "disponible",
    CategoryId: 2,
    BrandId: 5,
  },
  {
    name: "Puma Magnify Nitro SP",
    image: "https://i.postimg.cc/QxKG3zZf/Puma-Magnify-Nitro-SP.jpg",
    description: "",
    price: 165.99,
    status: "disponible",
    CategoryId: 2,
    BrandId: 5,
  },
  {
    name: "Puma Cell Fraction",
    image: "https://i.postimg.cc/SsQbbNm9/Puma-Cell-Fraction.jpg",
    description: "",
    price: 105.35,
    status: "disponible",
    CategoryId: 2,
    BrandId: 5,
  },
  {
    name: "Puma Eternity Nitro",
    image: "https://i.postimg.cc/PJPGN3pr/Puma-Eternity-Nitro.jpg",
    description: "",
    price: 165.99,
    status: "disponible",
    CategoryId: 2,
    BrandId: 5,
  },
  {
    name: "Puma FUSE",
    image: "https://i.postimg.cc/y6b42HtJ/PumaFUSE.jpg",
    description: "",
    price: 165.99,
    status: "disponible",
    CategoryId: 2,
    BrandId: 5,
  },
  {
    name: "Puma DEVIATE NITRO",
    image: "https://i.postimg.cc/bJ6cycvB/Puma-DEVIATENITRO.jpg",
    description: "",
    price: 165.99,
    status: "disponible",
    CategoryId: 2,
    BrandId: 5,
  },

  //---------------------------Deportivo -----------------------------//

  // REEBOK products
  {
    name: "Reebok Nano X1",
    image: "https://i.postimg.cc/nrs5nXgX/Reebok-Nano-X1.jpg",
    description: "",
    price: 125.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok  Nano X1 Adventure",
    image: "https://i.postimg.cc/NFWnFgvp/Reebok-Nano-X1-Adventure.jpg",
    description: "",
    price: 85.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok Nano X1 Power Rangers",
    image: "https://i.postimg.cc/YqWVVmQV/Reebok-Nano-X1-Power-Rangers.jpg",
    description: "",
    price: 185.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok Nano X1 VEGAN",
    image: "https://i.postimg.cc/Y2VZbxLY/Reebok-Nano-X1-VEGAN.jpg",
    description: "",
    price: 155.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok Flexagon Energy TR 3",
    image: "https://i.postimg.cc/G2mVS7jJ/Reebok-Flexagon-Energy-TR3.jpg",
    description: "",
    price: 195.25,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok  Flashfilm Train 2",
    image: "https://i.postimg.cc/7LVj98SZ/Reebok-Flashfilm-Train2.jpg",
    description: "",
    price: 225.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok Wonder Woman Nano X",
    image: "https://i.postimg.cc/pLQSVbGJ/Reebok-Wonder-Woman-Nano-X.jpg",
    description: "",
    price: 150.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok HIIT",
    image: "https://i.postimg.cc/pTc4NfGN/Reebok-HIIT.jpg",
    description: "",
    price: 170.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok Advanced Trainer",
    image: "https://i.postimg.cc/zf59TXbQ/Reebok-Advanced-Trainer.jpg",
    description: "",
    price: 155.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok Reago Essential 2 Reebok",
    image: "https://i.postimg.cc/6pxSN50Q/Reebok-Reago-Essential2-Reebok.jpg",
    description: "",
    price: 200.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok Ztaur Run",
    image: "https://i.postimg.cc/ZqVD3Ph9/Reebok-Ztaur-Run.jpg",
    description: "",
    price: 180.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },
  {
    name: "Reebok Zig Dynamica",
    image: "https://i.postimg.cc/yNVbkQ24/Reebok-Zig-Dynamica.jpg",
    description: "",
    price: 190.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 6,
  },

  // GUCCI products
  {
    name: "Gucci Web Slide Sandal",
    image: "https://i.postimg.cc/FRvsd4NF/Gucci-Web-Slide-Sandal.jpg",
    description: "",
    price: 400.25,
    status: "disponible",
    CategoryId: 3,
    BrandId: 7,
  },
  {
    name: "Gucci Ace",
    image: "https://i.postimg.cc/vZD1bbHp/GucciAce.jpg",
    description: "",
    price: 480.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci Ace  Interlocking G",
    image: "https://i.postimg.cc/gjNJbT9z/Gucci-Ace-Interlocking-G.jpg",
    description: "",
    price: 415.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci Ace Stripe Black",
    image: "https://i.postimg.cc/Ghg2MVJz/Gucci-Ace-Stripe-Black.jpg",
    description: "",
    price: 455.85,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci Rhyton",
    image: "https://i.postimg.cc/PqY55xGF/Gucci-Rhyton.jpg",
    description: "",
    price: 495.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci Slides",
    image: "https://i.postimg.cc/SxXKHdg4/Gucci-Slides.jpg",
    description: "",
    price: 385.0,
    status: "disponible",
    CategoryId: 3,
    BrandId: 7,
  },
  {
    name: "Gucci Ace Blade",
    image: "https://i.postimg.cc/0j8Q3qBX/Gucci-Ace-Blade.jpg",
    description: "",
    price: 450.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci Ace Embroidered Snake",
    image: "https://i.postimg.cc/GhmtxdYH/Gucci-Ace-Embroidered-Snake.jpg",
    description: "",
    price: 470.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci Stripe Slide White",
    image: "https://i.postimg.cc/Jz9h8XFk/Gucci-Stripe-Slide-White.jpg",
    description: "",
    price: 355.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci GG Slide Rubber Black",
    image: "https://i.postimg.cc/xjRqmcXw/Gucci-GGSlide-Rubber-Black.jpg",
    description: "",
    price: 400.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci Screener Mini GG White",
    image: "https://i.postimg.cc/W37p0H1G/Gucci-Screener-Mini-GGWhite.jpg",
    description: "",
    price: 480.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },
  {
    name: "Gucci AceEmbroidered",
    image: "https://i.postimg.cc/RF1hX0Xn/Gucci-Ace-Embroidered.jpg",
    description: "",
    price: 500.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 7,
  },

  // BALENCIAGA products
  {
    name: "Balenciaga Speed 2.0 Black",
    image: "https://i.postimg.cc/SKBYg34H/Balenciaga-Speed2-Black.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Triple S",
    image: "https://i.postimg.cc/ZKw9GCZ8/Balenciaga-Triple-S.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Track",
    image: "https://i.postimg.cc/prxhHjpZ/Balenciaga-Track.jpg",
    description: "",
    price: 105.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Pool Slides",
    image: "https://i.postimg.cc/P5qDJ1KV/Balenciaga-Pool-Slides.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 3,
    BrandId: 8,
  },
  {
    name: "Balenciaga Track Black",
    image: "https://i.postimg.cc/PJ4LrqDk/Balenciaga-Track-Black.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Speed Graffiti Trainers Black White",
    image: "https://i.postimg.cc/26nbMG8y/Balenciaga-Speed-Graffiti-Trainers-Black-White.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Track Trainers Burgundy Black",
    image: "https://i.postimg.cc/m2LzpQxZ/Balenciaga-Track-Trainers-Burgundy-Black.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Track Trainer Pink",
    image: "https://i.postimg.cc/44bH1WSF/Balenciaga-Track-Trainer-Pink.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Triple S Crystal Clear Sole",
    image: "https://i.postimg.cc/jS9DjmDC/Balenciaga-Triple-SCrystal-Clear-Sole.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Triple S Pink",
    image: "https://i.postimg.cc/JnCtNXcL/Balenciaga-Triple-SPink.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Triple S Light Blue",
    image: "https://i.postimg.cc/W4khq8Z8/Balenciaga-Triple-SLight-Blue.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },
  {
    name: "Balenciaga Furry Slide Black",
    image: "https://i.postimg.cc/KvfLm07g/Balenciaga-Furry-Slide-Black.jpg",
    description: "",
    price: 450.99,
    status: "disponible",
    CategoryId: 1,
    BrandId: 8,
  },

  // UNDER ARMOR products
  {
    name: "Under Armour UA W Surge 2",
    image: "https://i.postimg.cc/nhnyDhQP/UNDERARMOURUAWSURGE2.jpg",
    description: "",
    price: 200.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Charged Bandit 6 LAM",
    image: "https://i.postimg.cc/w38WH0Dr/UNDERARMOURCHARGEDBANDIT6-LAM.jpg",
    description: "",
    price: 280.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Charged Pursuit 2 LAM",
    image: "https://i.postimg.cc/mZvRt4wv/UNDERARMOURCHARGEDPURSUIT2-LAM.jpg",
    description: "",
    price: 215.35,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Charged Essential",
    image: "https://i.postimg.cc/Y0mXJJLg/UNDERARMOURCHARGEDESSENTIAL.jpg",
    description: "",
    price: 255.85,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Sonic 3",
    image: "https://i.postimg.cc/8k6g83St/UNDERARMOURSONIC3.jpg",
    description: "",
    price: 295.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Charged Essential 2",
    image: "https://i.postimg.cc/8kJNpchd/UNDERARMOURCHARGEDESSENTIAL2.jpg",
    description: "",
    price: 285.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Curry 7 Sour Patch Kids Peach",
    image: "https://i.postimg.cc/KvhSmNcF/Under-Armour-Curry7-Sour-Patch-Kids-Peach.jpg",
    description: "",
    price: 250.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Project Rock 2 Black White",
    image: "https://i.postimg.cc/1tgh37NR/Under-Armour-Project-Rock2-Black-White.jpg",
    description: "",
    price: 270.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour The Rock Delta Steeltown Gold",
    image: "https://i.postimg.cc/QxgLCTV7/Under-Armour-The-Rock-Delta-Steeltown-Gold.jpg",
    description: "",
    price: 255.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Mirage 3.0 Black/Black-Black",
    image: "https://i.postimg.cc/d1zMkR82/Under-Armour-Mirage3-Black-Black-Black.jpg",
    description: "",
    price: 200.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Curry 6 Dub Nation",
    image: "https://i.postimg.cc/VLXwthZd/Under-Armour-Curry6-Dub-Nation.jpg",
    description: "",
    price: 380.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },
  {
    name: "Under Armour Curry 1 Lux Red",
    image: "https://i.postimg.cc/vT9JW1zp/Under-Armour-UACurry1-Lux-Red.jpg",
    description: "",
    price: 300.0,
    status: "disponible",
    CategoryId: 2,
    BrandId: 9,
  },

  // VANS Products
  {
    name: "Vans Old Skool Black White",
    image: "https://i.postimg.cc/yNbtthpM/Vans-Old-Skool-Black-White.jpg",
    description: "",
    price: 100.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Era Horror Pack It Pennywise",
    image: "https://i.postimg.cc/6Q3FMbcV/Vans-Era-Horror-Pack-It-Pennywise.jpg",
    description: "",
    price: 80.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Vault Sk8-Mid LX Jound Brown",
    image: "https://i.postimg.cc/CxvQnH0R/Vans-Vault-Sk8-Mid-LXJJJJound-Brown.jpg",
    description: "",
    price: 115.35,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Sk8-Hi Black White",
    image: "https://i.postimg.cc/DyPDn3Yd/Vans-Sk8-Hi-Black-White.jpg",
    description: "",
    price: 100.85,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Classic Slip-On Horror Pack The Shining",
    image: "https://i.postimg.cc/N0CvYvFP/Vans-Classic-Slip-On-Horror-Pack-The-Shining.jpg",
    description: "",
    price: 95.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Old Skool Notre Off-White",
    image: "https://i.postimg.cc/gj95kzW4/Vans-Old-Skool-Notre-Off-White.jpg",
    description: "",
    price: 85.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Lampin Commedes Garcons",
    image: "https://i.postimg.cc/QtKw3BRH/Vans-Lampin-Commedes-Garcons.jpg",
    description: "",
    price: 150.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Old Skool Yacht Club",
    image: "https://i.postimg.cc/44tq2960/Vans-Old-Skool-Yacht-Club.jpg",
    description: "",
    price: 70.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Era WTAPS Bones Black",
    image: "https://i.postimg.cc/Vk43BPqL/Vans-Era-WTAPSBones-Black.jpg",
    description: "",
    price: 95.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Old Skool MoMA Salvador Dali",
    image: "https://i.postimg.cc/3Ngqksrh/Vans-Old-Skool-Mo-MASalvador-Dali.jpg",
    description: "",
    price: 100.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Old Skool Pac Sun ASAP Rocky Black",
    image: "https://i.postimg.cc/4NgMDxwx/Vans-Old-Skool-Pac-Sun-ASAPRocky-Black.jpg",
    description: "",
    price: 110.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
  {
    name: "Vans Sk8-Hi The Simpsons Lisa",
    image: "https://i.postimg.cc/zGDQf2sm/Vans-Sk8-Hi-The-Simpsons-Lisa.jpg",
    description: "",
    price: 90.0,
    status: "disponible",
    CategoryId: 1,
    BrandId: 10,
  },
];

module.exports = { allMocks };
