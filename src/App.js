
import './App.css';
import img1 from './images/img1.jpg';
import ProfilePhoto from './profile/ProfilePhoto'; 
import FullName from './profile/FullName';
import Address from'./profile/Address.js';
function App() {
  return (
    <div className="App">
     <h1> Welcome in my space</h1>
     <img src={img1} alt="" height={400} width={400}/>
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
