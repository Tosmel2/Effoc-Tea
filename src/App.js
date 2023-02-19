import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Testimonials from './components/Testimonial';
import Products from './components/Products';
import Navbar from './components/Navbar';
// import SignInSignUpForm from './components/SignInSignUpForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <About />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
