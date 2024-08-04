import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "../Links";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const bio = "I am an aspiring software developer from Moringa school";
  const github = "https://github.com/Feliciakwame";
  const linkedin = "https://www.linkedin.com/in/felicia-kwame-197ba3285/";
  return (
    <div>
      <NavBar />
      <Home name="Felicia" city="Nairobi" />
      <Links github />

      <About bio={bio} github={github} linkedin={linkedin} isPassed={true} />
    </div>
  );
}

export default App;
