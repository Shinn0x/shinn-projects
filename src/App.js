import { Accordion } from "./components/Accordion/Accordion";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import { Navbar } from "./components/Navbar/Navbar";
import { RandomColor } from "./components/RadomColor/RandomColor";
import { StarRating } from "./components/StarRating/StarRating";

function App() {
  return (
    <>
      <Navbar />
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
    </>
  );
}

export default App;
