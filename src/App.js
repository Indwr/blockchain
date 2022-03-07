import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Cookies from "./pages/cookies/Cookies";
import Footer from "./components/footer/Footer";
import Carousal from "./components/carousal/Carousal";
import CarousalSecond from "./components/carousal-second/CarousalSecond";
import Wallet from "./pages/wallet";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return true ? <Redirect to="/home" /> : <Redirect to="/home" />;
            }}
          />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/ecosystem" component={Ecosystem} />
          <Route path="/network" component={Network} />
          <Route path="/partner" component={Partner} />
          <Route path="/team" component={Team} />
          <Route path="/whitepaper" component={Whitepaper} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/tokenomics" component={Tokenomics} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/staking" component={Staking} />
          <Route exact path="/terms" component={Terms} />
          <Route path="/carousal" component={Carousal} />
          <Route path="/carousal-second" component={CarousalSecond} />
          <Route path="/wallet" component={Wallet} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
