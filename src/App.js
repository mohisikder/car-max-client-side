import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import AddProduct from './Pages/Dashboard/Admin/AddProduct/AddProduct';
import ManageProducts from './Pages/Dashboard/Admin/ManageProducts/ManageProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Payment from './Pages/Dashboard/Payment/Payment';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/explore">
              <Explore/>
            </Route>
            <PrivateRoute exact path="/productdetails/:productId">
              <ProductDetails/>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/payment">
              <Payment/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
          </Switch>
          <Route>
            <Footer/>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
