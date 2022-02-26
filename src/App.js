import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Ecosystem from "./pages/ecosystem/Ecosystem";
import Contact from "./pages/contact/Contact";
import Network from "./pages/network/Network";
import Partner from "./pages/partner/Partner";
import Team from "./pages/team/Team";
import Whitepaper from "./pages/whitepaper/Whitepaper";
import Tokenomics from "./pages/tokenomics/Tokenomics";
import Staking from "./pages/staking/Staking";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/ecosystem" component={Ecosystem} />
          <Route path="/network" component={Network} />
          <Route path="/partner" component={Partner} />
          <Route path="/team" component={Team} />
          <Route path="/whitepaper" component={Whitepaper} />
          <Route path="/tokenomics" component={Tokenomics} />
          <Route path="/staking" component={Staking} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
