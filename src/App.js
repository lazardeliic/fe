
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <Router>
       <HeaderComponent></HeaderComponent>
       <div className="container">
        <Switch>
          <Route exact path="/" component={EmployeeListComponent}></Route>
          <Route path="/employees" component={EmployeeListComponent}></Route>
          <Route path = "/add-employee" component={AddEmployeeComponent}></Route>
          <Route path = "/edit-employee/:id" component={AddEmployeeComponent}></Route>
        </Switch>
       </div>
       <FooterComponent></FooterComponent>
       <ToastContainer autoClose={5000}></ToastContainer>
       </Router>
    </div>
  );
}


export default App;
