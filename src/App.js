// Inspired by https://startbootstrap.com/previews/landing-page
import Header from "./Components/Header";
import MasterHead from "./Components/MasterHead";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      {/*   
    *Header <navbar>
    MasterHead <email submit form in center>
    Section 1 <some information and icons>
    Section 2 <explainer, Varicard
    Testimonials <"What people are saying" round picture, shadow and a quote>
    Email input section <same as MasterHead>
    Footer <some links(left) and social icons on right>
    */}
      <Header />
      <MasterHead />
      <SectionOne />
      <SectionTwo />
      <Testimonials />
    </>
  );
}

export default App;
