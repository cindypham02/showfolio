import React from "react";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Card from "./components/Card"; // Import Card component
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const carouselItems = [
    { imageUrl: "/images/svt.jpg", caption: "Latest Concert: Seventeen" },
    { imageUrl: "/images/en.jpg", caption: "Favorite Concert: Enhypen" },
    { imageUrl: "/images/txt.jpg", caption: "Summer Concert: TXT" },
  ];

  const accordionSections = [
    { title: "Merchandise", content: "Official band merchandise available at the venue." },
    { title: "Venue", content: "Varies depending on city" },
    { title: "Interaction", content: "Meet and greet opportunities before and after the show." },
  ];

  const cardData = [
    {
      title: "ATEEZ Concert",
      image: "/images/atz.jpg",
      description: "Artist: ATEEZ<br />Arena: Allstate Arena<br />City: Chicago<br />Date: 8/16/24",
    },
    {
      title: "BTS Concert",
      image: "/images/bts.jpg",
      description: "Artist: BTS<br />Arena: Sofi Stadium<br />City: Los Angeles<br />Date: 11/28/21",
    },
    {
      title: "AGUST D Concert",
      image: "/images/suga.jpg",
      description: "Artist: AGUST D<br />Arena: Allstate Arena<br />City: Chicago<br />Date:5/6/23",
    },
    {
      title: "Keshi",
      image: "/images/keshi.jpg",
      description: "Artist: Keshi<br />Arena: Old National Centre<br />City: Indianapolis<br />Date: 3/22/23",
    },
  ];

  return (
    <div className="App">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Side: Cards */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>

          {/* Center: Accordion */}
          <div className="md:col-span-1">
            <Accordion sections={accordionSections} />
          </div>

          {/* Right Side: Carousel */}
          <div className="md:col-span-2">
            <Carousel items={carouselItems} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

