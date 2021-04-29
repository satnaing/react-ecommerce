import GhostButton from "../../components/Buttons/GhostButton";
import Button from "../../components/Buttons/Button";
import OverlayContainer from "../../components/OverlayContainer/OverlayContainer";
import Card3 from "../../components/Card/Card3";
import Card5 from "../../components/Card/Card5";
import TestiSlider from "../../components/TestiSlider/TestiSlider";
import { default as featuredItems } from "../../Items";
import { FC, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";

import { connect } from "react-redux";

// image import
import bg1 from "../../assets/bg-img/banner_minipage1.jpg";
import bg2 from "../../assets/bg-img/banner_minipage2.jpg";
import bg3 from "../../assets/bg-img/banner_minipage3.jpg";
import { addItem } from "../../redux/actions/itemActions";

const Home: FC<any> = ({ addToCart }) => {
  const [totalItems, setTotalItems] = useState(10);

  const currentItems = featuredItems.slice(0, totalItems);

  // let arrItems = [];

  // for (let i = 1; i <= totalItems; i++) {
  //   arrItems = [...arrItems, i];
  // }

  return (
    <div className="">
      <HeroSection />
      <section className="w-full h-auto px-16 py-10 border border-b-2 border-gray100">
        <div className="h-full flex flex-col md:flex-row">
          <div className="h-full w-full md:w-1/2 p-4">
            <OverlayContainer imgSrc={bg1}>
              <GhostButton
                value="New Arrivals"
                size="xl"
                inverted
                noBorder
                extraClass="absolute bottom-10-per right-10-per z-20"
              />
            </OverlayContainer>
          </div>
          <div className="w-full md:w-1/4 bg-cover p-4">
            <OverlayContainer imgSrc={bg2}>
              <GhostButton
                value="Women Collection"
                size="lg"
                inverted
                noBorder
                extraClass="absolute bottom-10-per z-20"
              />
            </OverlayContainer>
          </div>
          <div className="w-full md:w-1/4 bg-cover p-4">
            <OverlayContainer imgSrc={bg3}>
              <GhostButton
                value="Men Collection"
                size="lg"
                inverted
                noBorder
                extraClass="absolute bottom-10-per z-20"
              />
            </OverlayContainer>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex flex-col justify-center items-center mt-16 mb-20">
        <div className="w-1/3 text-center mb-8">
          <h4 className="text-3xl mb-4">Best Selling</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
            aliquam hic, voluptatibus iste consectetur odit
          </span>
        </div>
        <div className="flex flex-col md:flex-row w-full px-20">
          <Card3
            imgSrc1="https://i.ibb.co/x1bkwRz/women-relaxedshirt-a2.webp"
            imgSrc2="https://i.ibb.co/w4zmsH5/women-shortpatch-a1.webp"
            itemName="Shortpatch"
            itemPrice={200.0}
          />
          <Card3
            imgSrc1="https://i.ibb.co/w4zmsH5/women-shortpatch-a1.webp"
            imgSrc2="https://i.ibb.co/NtZFJ83/woman-hoodie-1.webp"
            itemName="Relaxed Shirt"
            itemPrice={130.0}
          />
          <Card3
            imgSrc1="https://i.ibb.co/NtZFJ83/woman-hoodie-1.webp"
            imgSrc2="https://i.ibb.co/w4zmsH5/women-shortpatch-a1.webp"
            itemName="HodieS"
            itemPrice={230.0}
          />
        </div>
      </section>
      <section className="w-full h-full py-16 flex flex-col items-center bg-lightgreen">
        <h4 className="text-3xl">Testimonial</h4>
        <TestiSlider />
      </section>

      <section className="px-16 my-16 flex flex-col items-center">
        <div className="text-center mb-6">
          <h4 className="text-3xl">Featured Products</h4>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap w-full mb-8">
          {currentItems.map((item) => (
            <Card5
              key={item.id}
              imgSrc1={item.img1}
              imgSrc2={item.img2}
              itemName={item.name}
              itemPrice={item.price}
              onClick={() => addToCart(item.name)}
            />
          ))}
        </div>
        <span
          className="cursor-pointer"
          onClick={() => setTotalItems((prevState) => prevState * 2)}
        >
          <Button value="See More" />
        </span>
      </section>

      {/* Test Button */}
      {/* <button onClick={addToCart("hello world")}>Click Me</button> */}

      <div className="border-gray100 border-b-2"></div>

      <section className="mt-16 mb-20 flex flex-col justify-center items-center text-center">
        <div className="textBox w-2/5 mb-6">
          <h4 className="text-3xl mb-6">Our Shop</h4>
          <span>
            Stop by our stores to learn the stories behind our products, get a
            personal styling session, or shop the latest in person. See our
            store locations.
          </span>
        </div>
        <div className="w-full px-20 flex justify-center">
          <img
            className="w-full"
            src="https://i.ibb.co/Nrm1c3z/ourshop.png"
            alt="Our Shop"
          />
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (item: string) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
