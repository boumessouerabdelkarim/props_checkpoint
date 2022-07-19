import "./profile.css";
import PropTypes from "prop-types";

function Profile({ fullName, profession, bio, handleName, children }) {
  const handleAlert = (e) => {
    handleName(fullName);
  };

  return (
    <div className="card">
      <div className="img-container">
        <div>{children}</div>
        <button onClick={handleAlert}>Click me ;)</button>
      </div>
      <div className="content">
        <h1 >{fullName}</h1>
        <h3>{profession}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func,
};
Profile.defaultProps = {
    
    fullName: "abdelkarim boumessouer",
    bio: "je suis un ingenieur en informatique",
    profession: "Software Engineer, Buisness man",
    children: `<img src='./profile/Myphoto.jpg' alt='checkpoint'/>`,
  };

export default Profile;