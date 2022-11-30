const hotels = [
  {
    title: "Claridge Hotel",
    price: 100,
    picture: [
      "https://res.cloudinary.com/lastminute/image/upload/w_500,h_350,c_fill,q_auto,f_auto/t7xdobkhzpqdtu9xcirl.jpg",
      "https://vuelo-hotel.viajar.com/details/hotel/Claridge-Hotel-Buenos-Aires-112559/hotel-only?search.departureIntervals=20221201-20221215&bf_subsource=S01HPV10S10RR01&search.accomodationOnly=true&search.type=OSE&search.destinationCities=155671&search.rooms%5B0%5D.adults=2&search.rooms%5B0%5D.children=0&hdpSearchId=1h7g4mm243u9s&businessProfileId=VIAJAR&searchId=127219515&referenceEventId=1h7g4mm243u9s8131ez&requestId=3372263618&sessionId=7003181547768809472&extReferenceType=OSE&extReferenceId=1h7g4mm243u9s#hotel-gallery",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1537755558/diajcwebzbvaoshkszlk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1537755562/bhzyk16nsftvnb6o9xil.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1537755558/eddpmho3vz8vzqgl2kmu.jpg",
      "https://vuelo-hotel.viajar.com/details/hotel/Claridge-Hotel-Buenos-Aires-112559/hotel-only?search.departureIntervals=20221201-20221215&bf_subsource=S01HPV10S10RR01&search.accomodationOnly=true&search.type=OSE&search.destinationCities=155671&search.rooms%5B0%5D.adults=2&search.rooms%5B0%5D.children=0&hdpSearchId=1h7g4mm243u9s&businessProfileId=VIAJAR&searchId=127219515&referenceEventId=1h7g4mm243u9s8131ez&requestId=3372263618&sessionId=7003181547768809472&extReferenceType=OSE&extReferenceId=1h7g4mm243u9s#hotel-gallery",
    ],

    services: {
      wifi: true,
      parking: true,
      pets: false,
      breakfast: true,
      pool: true,
    },
    rating: 5,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis maiores deserunt magni aliquam dolores, consequuntur eveniet ratione? Velit dolores vitae, praesentium ipsum facere quos id molestiae quia necessitatibus maxime magnam voluptates sequi, officiis, natus dignissimos placeat minus laborum. Ipsa fugit eligendi quis autem alias omnis sit quas iure dolorem voluptas aliquam architecto iusto cupiditate animi quisquam minima vel voluptatem fuga, at nihil. Cupiditate enim hic at veritatis magnam dolorem officia qui tenetur in earum repellat, expedita quidem numquam maxime pariatur adipisci perspiciatis dicta porro aspernatur itaque cum voluptatibus voluptas animi. Quae tempore fugit quaerat minus temporibus ducimus eligendi. Sunt!",
    rooms: [
      {
        title: "superior double room",
        picture: [
          "https://photos.hotelbeds.com/giata/bigger/07/077698/077698a_hb_ro_027.jpg",
          "https://photos.hotelbeds.com/giata/bigger/07/077698/077698a_hb_ro_028.jpg",
        ],
        price: 100,
      },
      {
        title: "superior triple room",
        picture: [
          "https://photos.hotelbeds.com/giata/bigger/07/077698/077698a_hb_ro_024.jpg",
          "https://photos.hotelbeds.com/giata/bigger/07/077698/077698a_hb_ro_025.jpg",
        ],
        price: 122,
      },
    ],
  },
  {
    title: "Up Tribe Hotel",
    price: 96,
    picture: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/dpeuf4olnlyzobhsel3e.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/ataduy96m2oeqkzmeolt.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/ydlphajr9hbqrhplaupm.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456844/knzvp6yjbbq18iphm9p3.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/mdkapwtapkuvhef29tj5.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/ebtgeg04slxsxeh2ka66.jpg",
    ],

    services: {
      wifi: true,
      parking: true,
      pets: false,
      breakfast: true,
      pool: true,
    },
    rating: 4.5,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis maiores deserunt magni aliquam dolores, consequuntur eveniet ratione? Velit dolores vitae, praesentium ipsum facere quos id molestiae quia necessitatibus maxime magnam voluptates sequi, officiis, natus dignissimos placeat minus laborum. Ipsa fugit eligendi quis autem alias omnis sit quas iure dolorem voluptas aliquam architecto iusto cupiditate animi quisquam minima vel voluptatem fuga, at nihil. Cupiditate enim hic at veritatis magnam dolorem officia qui tenetur in earum repellat, expedita quidem numquam maxime pariatur adipisci perspiciatis dicta porro aspernatur itaque cum voluptatibus voluptas animi. Quae tempore fugit quaerat minus temporibus ducimus eligendi. Sunt!",
    rooms: [
      {
        title: "doble standard",
        picture: [
          "https://photos.hotelbeds.com/giata/xxl/05/057938/057938a_hb_ro_025.jpg",
          "https://photos.hotelbeds.com/giata/xxl/05/057938/057938a_hb_ro_037.jpg",
        ],
        price: 96,
      },
      {
        title: "superior triple room",
        picture: [
          "https://photos.hotelbeds.com/giata/bigger/07/077698/077698a_hb_ro_024.jpg",
          "https://photos.hotelbeds.com/giata/bigger/07/077698/077698a_hb_ro_025.jpg",
        ],
        price: 122,
      },
    ],
  },
  {
    title: "Bisonte Libertad",
    price: 98,
    picture: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1504870332/kyoiernjb5ljod6eig8p.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541994881/w5knxfd5kmhdmq93dtv9.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541994882/qhgjgkog08yl3fmqevyg.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541443261/opp0cjianxoruazkhr8d.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541443261/cwvwmv8u4lgwe9z3xbwr.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1542596377/bn7ln10zvia0cxamiozg.jpg",
    ],

    services: {
      wifi: true,
      parking: true,
      pets: false,
      breakfast: true,
      pool: true,
    },
    rating: 4,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis maiores deserunt magni aliquam dolores, consequuntur eveniet ratione? Velit dolores vitae, praesentium ipsum facere quos id molestiae quia necessitatibus maxime magnam voluptates sequi, officiis, natus dignissimos placeat minus laborum. Ipsa fugit eligendi quis autem alias omnis sit quas iure dolorem voluptas aliquam architecto iusto cupiditate animi quisquam minima vel voluptatem fuga, at nihil. Cupiditate enim hic at veritatis magnam dolorem officia qui tenetur in earum repellat, expedita quidem numquam maxime pariatur adipisci perspiciatis dicta porro aspernatur itaque cum voluptatibus voluptas animi. Quae tempore fugit quaerat minus temporibus ducimus eligendi. Sunt!",
    rooms: [
      {
        title: "double standard",
        picture: [
          "https://photos.hotelbeds.com/giata/xxl/05/057942/057942a_hb_ro_016.jpg",
          "https://photos.hotelbeds.com/giata/xxl/05/057942/057942a_hb_ro_018.jpg",
        ],
        price: 98,
      },
      {
        title: "double superior",
        picture: [
          "https://photos.hotelbeds.com/giata/xxl/05/057942/057942a_hb_ro_013.jpg",
          "https://photos.hotelbeds.com/giata/xxl/05/057942/057942a_hb_ro_014.jpg",
        ],
        price: 120,
      },
    ],
  },
  {
    title: "Poetry Building",
    price: 250,
    picture: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632520412/xaois6atdnpvtq3qhzpw.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632520412/wquh6uufst5prqgvl22w.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ldhgfoawksmsqqt4eyzk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ldhgfoawksmsqqt4eyzk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ex8gsjfha6qyczgbdfqw.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551299/bzscpttiilfeh7fowxod.jpg",
    ],

    services: {
      wifi: true,
      parking: true,
      pets: false,
      breakfast: true,
      pool: true,
    },
    rating: 5,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis maiores deserunt magni aliquam dolores, consequuntur eveniet ratione? Velit dolores vitae, praesentium ipsum facere quos id molestiae quia necessitatibus maxime magnam voluptates sequi, officiis, natus dignissimos placeat minus laborum. Ipsa fugit eligendi quis autem alias omnis sit quas iure dolorem voluptas aliquam architecto iusto cupiditate animi quisquam minima vel voluptatem fuga, at nihil. Cupiditate enim hic at veritatis magnam dolorem officia qui tenetur in earum repellat, expedita quidem numquam maxime pariatur adipisci perspiciatis dicta porro aspernatur itaque cum voluptatibus voluptas animi. Quae tempore fugit quaerat minus temporibus ducimus eligendi. Sunt!",
    rooms: [
      {
        title: "triple standard",
        picture: [
          "https://i.travelapi.com/hotels/5000000/4100000/4099900/4099826/d23db5d3_z.jpg",
          "https://i.travelapi.com/hotels/5000000/4100000/4099900/4099826/d23db5d3_z.jpg",
        ],
        price: 250,
      },
    ],
  },
  {
    title: "Regal Pacific Buenos Aires",
    price: 220,
    picture: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213800/fld1icnt2hcljec4tirt.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213800/kxdzljg1grw4djxgybj5.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213801/zq1jrah9kt8ckvxr0rc2.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1534034995/j36noyzvrqvcvl2gqs5s.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213800/iuwavd2m9yuulhrxxpv4.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1653617056/to2cfftttuyda2xsezt6.jpg",
    ],

    services: {
      wifi: true,
      parking: true,
      pets: false,
      breakfast: true,
      pool: true,
    },
    rating: 5,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis maiores deserunt magni aliquam dolores, consequuntur eveniet ratione? Velit dolores vitae, praesentium ipsum facere quos id molestiae quia necessitatibus maxime magnam voluptates sequi, officiis, natus dignissimos placeat minus laborum. Ipsa fugit eligendi quis autem alias omnis sit quas iure dolorem voluptas aliquam architecto iusto cupiditate animi quisquam minima vel voluptatem fuga, at nihil. Cupiditate enim hic at veritatis magnam dolorem officia qui tenetur in earum repellat, expedita quidem numquam maxime pariatur adipisci perspiciatis dicta porro aspernatur itaque cum voluptatibus voluptas animi. Quae tempore fugit quaerat minus temporibus ducimus eligendi. Sunt!",
    rooms: [
      {
        title: "superior double room",
        picture: [
          "https://photos.hotelbeds.com/giata/xxl/07/077101/077101a_hb_ro_025.jpg",
          "https://photos.hotelbeds.com/giata/xxl/07/077101/077101a_hb_ro_027.jpg",
        ],
        price: 220,
      },
    ],
  },
];

export default hotels;
