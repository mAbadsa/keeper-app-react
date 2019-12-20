import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notelist from "./Notelist";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Header />
        <CreateArea />
        <Notelist/>
      <Footer />
    </div>
  );
}

export default App;
