import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

export default function Main ({Page}) {
    
      return (
        <div className="my_app">
          <Navbar />
          <Navbar2 />
          <Page />
        </div>
      );
}