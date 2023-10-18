import End_page_content from "./components/End_page_content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image_of_location from "./components/Image_of_location";
import Navbar from "./components/Navbar";
import Page_content from "./components/Page_content";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Page_content></Page_content>
      <Image_of_location></Image_of_location>
      <End_page_content></End_page_content>
      <Footer></Footer>
    </>
  );
}

export default App;
