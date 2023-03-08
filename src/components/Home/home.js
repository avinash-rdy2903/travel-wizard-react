import logo from '../../logo.gif';
import './App.css';
import aroundTheWorldPic from '../Images/aroundTheWorld.jpg';

function Home() {

  var sectionStyle = {
    backgroundImage: `url(${aroundTheWorldPic})`,
    padding: '50px 0 50px 0',
    height: '400px',
    backgroundSize: '100%',
  }
  return (
    <>
      <div className="App">
        <header className="App-header" style={sectionStyle}>
          <p class='text-secondary h1'>
            Let us help you explore.
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <p class='text-secondary'>
            You <code>shall</code> pass!
          </p>
        </header>
      </div>
    </>
  );
}

export default Home;