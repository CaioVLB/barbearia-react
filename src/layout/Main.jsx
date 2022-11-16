import Navbar from "./Navbar";

export default function Main ({Page}) {
    
      return (
        <div className="my_app">
          <Navbar />
          <Page />
        </div>
      );
}