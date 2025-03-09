import { Accordion } from "./components/Accordion/Accordion";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import { LoadMoreData } from "./components/LoadMoreData/LoadMoreData";
import { Navbar } from "./components/Navbar/Navbar";
import { QrCodeGenerator } from "./components/QrCodeGenerator/QrCodeGenerator";
import { RandomColor } from "./components/RadomColor/RandomColor";
import { ScrollIndicator } from "./components/ScrollIndicator/ScrollIndicator";
import { StarRating } from "./components/StarRating/StarRating";
import { TreeView } from "./components/TreeView/TreeView";

function App() {
  return (
    <>
      <Navbar />
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <LoadMoreData />
      <TreeView />
      <QrCodeGenerator />
      <ScrollIndicator />
    </>
  );
}

export default App;
