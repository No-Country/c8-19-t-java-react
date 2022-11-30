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
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1667229768/whpnvra7uwu6vdp7ubq0.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1667229768/nczsj1t9hasx8g9nf7be.jpg",
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
        title: "suite ejecutiva",
        pictures: [
          "https://i.travelapi.com/hotels/1000000/550000/547000/546934/e2ab3a82_z.jpg",
          "https://i.travelapi.com/hotels/1000000/550000/547000/546934/cf7ef581_z.jpg",
          "https://i.travelapi.com/hotels/1000000/550000/547000/546934/16e0de89_z.jpg",
          "https://i.travelapi.com/hotels/1000000/550000/547000/546934/6fc446c1_z.jpg",
        ],
        price: 500,
      },
    ],
  },
  {
    title: "CasaSur Recoleta",
    price: 200,
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191156/yimkrzcqrbgkcyg22vta.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191156/liunh798nvnwofvmlf0b.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191156/mwsamd0msy8qvtn3k0j3.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191157/mod8yb04u1hluohaou3f.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1629125285/p4izjviiun4ugufs9k3q.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191156/iil90t05om82x5mbxy72.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1493387575/vpraeo6lyfbqbvi2d7za.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1629125288/qbawq7fs6yfomrrvqhms.jpg",
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
        title: "doble standard",
        pictures: [
          "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191156/xm8vwazht5tfhwzo6oxo.jpg",
          "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191156/vaewujhjouxqllv73rvq.jpg",
          "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191156/iil90t05om82x5mbxy72.jpg",
          "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1609191156/a2tcdtlz8t3upmn4dj4n.jpg",
        ],
        price: 200,
      },
    ],
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
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541994881/wge5umygtwjnurvas7qc.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1504870331/hvgecbslbggmkr0okvv6.jpg",
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
        pictures: [
          "https://photos.hotelbeds.com/giata/xxl/05/057942/057942a_hb_ro_016.jpg",
          "https://photos.hotelbeds.com/giata/xxl/05/057942/057942a_hb_ro_015.jpg",
          "https://photos.hotelbeds.com/giata/xxl/05/057942/057942a_hb_ro_017.jpg",
          "https://photos.hotelbeds.com/giata/xxl/05/057942/057942a_hb_ro_018.jpg",
        ],
        price: 98,
      },
      {
        title: "double superior",
        pictures: [
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
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632520412/xaois6atdnpvtq3qhzpw.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632520412/wquh6uufst5prqgvl22w.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ldhgfoawksmsqqt4eyzk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ldhgfoawksmsqqt4eyzk.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551298/ex8gsjfha6qyczgbdfqw.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1558551299/bzscpttiilfeh7fowxod.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632520413/nhhezexv908yk4f1urdx.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632520413/beukn4vugot8yb59bvna.jpg",
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
        pictures: [
          "https://i.travelapi.com/hotels/5000000/4100000/4099900/4099826/d23db5d3_z.jpg",
          "https://i.travelapi.com/hotels/5000000/4100000/4099900/4099826/d23db5d3_z.jpg",
          "https://i.travelapi.com/hotels/5000000/4100000/4099900/4099826/202110a8_z.jpg",
          "https://i.travelapi.com/hotels/5000000/4100000/4099900/4099826/a058205c_z.jpg",
        ],
        price: 250,
      },
    ],
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
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213801/oqcr3rhfbfyswk5rd7zs.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1632213801/p3mzqcwxjeavgna6hnu3.jpg",
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
        pictures: [
          "https://photos.hotelbeds.com/giata/xxl/07/077101/077101a_hb_ro_025.jpg",
          "https://photos.hotelbeds.com/giata/xxl/07/077101/077101a_hb_ro_027.jpg",

          "https://photos.hotelbeds.com/giata/xxl/07/077101/077101a_hb_ro_029.jpg",
        ],
        price: 220,
      },
    ],
  },
  {
    title: "Claridge Hotel",
    price: 100,
    pictures: [
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1505027106/t7xdobkhzpqdtu9xcirl.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1537755559/ptst4gaq4gmnkh53rjog.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1537755559/ql1avzqash2wp0eg3ujn.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1537755560/l8gqp4amjubmgwpaxljw.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1541441940/gfa6mvn9bqotuoa7ucod.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1537755561/gi892j7mqwb99szirh0c.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1505027135/d4qndiqlmmyvznkhpxxo.jpg",
      "https://res.cloudinary.com/lastminute/image/upload/w_1000,h_1000,c_fit,q_auto,f_auto/v1505027140/utufoh4cwg820oqbbghq.jpg",
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
        pictures: [
          "https://photos.hotelbeds.com/giata/xxl/07/077698/077698a_hb_ro_027.jpg",
          "https://photos.hotelbeds.com/giata/xxl/07/077698/077698a_hb_ro_028.jpg",
        ],
        price: 220,
      },
      {
        title: "suite",
        pictures: [
          "https://photos.hotelbeds.com/giata/xxl/07/077698/077698a_hb_ro_004.jpg",
          "https://photos.hotelbeds.com/giata/xxl/07/077698/077698a_hb_ro_008.jpg",
          "https://photos.hotelbeds.com/giata/xxl/07/077698/077698a_hb_ro_020.jpg",
        ],
        price: 220,
      },
    ],
  },
];

export default hotels;
