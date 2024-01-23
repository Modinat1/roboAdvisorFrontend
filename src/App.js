import Automation from "./components/Automation/Automation";
import Header from "./components/Header/Header";
import OurStory from "./components/OurStory/OurStory";
import RangeSlider from "./components/RangeSlider/RangeSlider";
import ShowCase from "./components/ShowCase/ShowCase";
import { SucessAnalytics } from "./components/SucessAnalytics/SucessAnalytics";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <section className="img_bg">
      <Header/>
      <ShowCase/>
      </section>
      <SucessAnalytics/>
      <OurStory/>
      <RangeSlider/>
      <Automation/>
      <Footer/>
    </div>
  );
}

export default App;
