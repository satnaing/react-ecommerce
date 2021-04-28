import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import Test from "./pages/Test/Test";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-category" component={ProductCategory} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/test" component={Test} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
