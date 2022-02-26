import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Carousal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://www.bankrate.com/2021/08/25110556/11-types-of-cryptocurrency-that-arent-Bitcoin.jpeg?auto=webp&optimize=high&crop=16:9",
        "https://c.ndtvimg.com/2021-08/s9ng9nc_cryptocurrrency-generic650_625x300_11_August_21.jpg",
        "https://s.yimg.com/ny/api/res/1.2/jwSWj2uIzLmNZp4blWga7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/LqfG9HOEp3UwhWrxYh2eLw--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/43cc9a8371a15331511e3b691f68f813",
        "https://academy-public.coinmarketcap.com/optimized-uploads/3a7032f0e3384e6cbd5984231cfc0fa5.jpg",
        "https://www.telegraph.co.uk/content/dam/technology/Spark/city-index/bitcoin-table-xlarge.jpg?imwidth=640",
        "https://s.yimg.com/ny/api/res/1.2/jwSWj2uIzLmNZp4blWga7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/LqfG9HOEp3UwhWrxYh2eLw--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/43cc9a8371a15331511e3b691f68f813",
        "https://academy-public.coinmarketcap.com/optimized-uploads/3a7032f0e3384e6cbd5984231cfc0fa5.jpg",
        "https://www.telegraph.co.uk/content/dam/technology/Spark/city-index/bitcoin-table-xlarge.jpg?imwidth=640",
      ],
    };
  }

  render() {
    const { images } = this.state;
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        {images?.map((data, keys) => (
          <div key={keys} className="item">
            <img alt="slider" src={data} />
          </div>
        ))}
      </OwlCarousel>
    );
  }
}
