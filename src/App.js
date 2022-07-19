import './App.css';
import Profile from './profile/profile';
import image from './profile/Myphoto.jpg';

function App() {
  const handleName = (name) => {
    alert(`Hi, I am ${name}, thanks for the click ;)`)
  }

  return (
    <div className="App">
      <Profile 
        fullName="Abdelkarim boumessouer" 
        profession="ingenieur en informatique"
        bio="je suis un ingenieur en informatique:developpement web"
        handleName={handleName}>
        <img src={image} alt="Meee!"></img>    
      </Profile>
    </div>
  );
}

export default App;