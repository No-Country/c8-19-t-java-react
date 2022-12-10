const hotels = [
  {
    title: "Hilton Buenos Aires, AR",
    price: 500,
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1667229769/ngoqluwsvariln9zwmc4.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1508094584/fekjr2wo7ghnonhujrbk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1505108419/frgtfqd5aydbzu76lcvq.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1667229768/jbwddzultozznmepafrt.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1667229768/e5uw1h11hjap8sha4ydi.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1667229769/xtslho4jewwb71enfeyj.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1590431179/nyxdb6o3ip9h9kirfqhe.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1590431179/l4s0oqkxdrzxpvg2fopo.jpg",
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

    location: "buenos aires",
  },
  {
    title: "Up Tribe Hotel",
    price: 96,
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/dpeuf4olnlyzobhsel3e.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/ataduy96m2oeqkzmeolt.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/ydlphajr9hbqrhplaupm.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456844/knzvp6yjbbq18iphm9p3.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/mdkapwtapkuvhef29tj5.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1649456843/ebtgeg04slxsxeh2ka66.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1662122698/km4xekevimp8plsm58yt.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1662122699/py4ryfdd971y36ci1pbx.jpg",
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

    location: "buenos aires",
  },
  {
    title: "Bisonte Libertad",
    price: 98,
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1504870332/kyoiernjb5ljod6eig8p.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541994881/w5knxfd5kmhdmq93dtv9.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541994882/qhgjgkog08yl3fmqevyg.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541443261/opp0cjianxoruazkhr8d.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541443261/cwvwmv8u4lgwe9z3xbwr.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1542596377/bn7ln10zvia0cxamiozg.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632209744/euxykbdo4rbkek53doiy.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632209742/pxmzd2l9djpkwkrnmweo.jpg",
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

    location: "buenos aires",
  },
  {
    title: "Poetry Building",
    price: 250,
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632520412/xaois6atdnpvtq3qhzpw.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632520412/wquh6uufst5prqgvl22w.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ldhgfoawksmsqqt4eyzk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ldhgfoawksmsqqt4eyzk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ex8gsjfha6qyczgbdfqw.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551299/bzscpttiilfeh7fowxod.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632209742/dih87ixg7gaau5wnva6b.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632209743/ywklkf7dwwrlomipdtex.jpg",
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

    location: "buenos aires",
  },
  {
    title: "Regal Pacific Buenos Aires",
    price: 220,
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213800/fld1icnt2hcljec4tirt.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213800/kxdzljg1grw4djxgybj5.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213801/zq1jrah9kt8ckvxr0rc2.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1534034995/j36noyzvrqvcvl2gqs5s.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213800/iuwavd2m9yuulhrxxpv4.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1653617056/to2cfftttuyda2xsezt6.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1543900392/bs9sbxks1f837ppxdyhs.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632209742/o5oieln0nphvbd4c6hsw.jpg",
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

    location: "lujan",
  },

  {
    title: "Hotel Pulitzer",
    price: 220,
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632292504/fc1gzgyiqnawrjco7wdy.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1485001170/br08d1kpz63abfrdkxfu.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1485001175/pphax0z7zhldfzvhutlj.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1549326312/ikdhriaxqhxhylaly6ad.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1542696972/us6wbplmceqrdbe0apy1.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541439425/p0hry0bvxryywdqt24mn.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541439425/r21wovarm7yqbdlqwpj3.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1485001178/ax6ujuxbdj4ya7i3embf.jpg",
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

    location: "merlo",
  },
];

export default hotels;
