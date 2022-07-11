import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Login from './page/login';
import Template1 from './page/template1';
function App() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/Template1" element={<Template1></Template1>}></Route>
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
