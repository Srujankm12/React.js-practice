
import './App.css';
import Navbar from './component/Navbar';
// import TextForm from './component/TextForm';
import About from './component/About';

function App() {
  return (
  <>
{/* <Navbar title="hey" about="about me"/> */}

<Navbar/>

<div className="container my-5">
{/* <TextForm heading="Enter the text below in this textform"/> */}
<About/>


</div>
  </>
  );
}

export default App;
