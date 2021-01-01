import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Example from "./example";
import "./CSS/home.css";

function Home() {
  const [menu, setMenu] = useState<string>("home");
  console.log(menu);
  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <Example menu={menu} />
      <Footer />
    </div>
  );
}

export default Home;
