import React from "react";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/Header";
import "./CSS/Header.css";
import "./CSS/ContentPage.css";
import ContentPage from "./Pages/ContentPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div >
      {/* <AppRouter/> */}
      <Header />
      <Footer/>
      {/* <ContentPage/> */}
    </div>
  );
}

export default App;
