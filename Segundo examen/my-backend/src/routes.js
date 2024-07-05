import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { AuthProvider } from './context/AuthContext';

function Routes() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/products" component={ProductList} />
          <Route path="/" exact component={ProductList} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default Routes;
