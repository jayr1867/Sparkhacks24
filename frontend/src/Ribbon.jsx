import logo from "../public/logo.jpg"; // Update the path to your logo image

const signIn = () => {
  window.open("https://aahar-server.onrender.com/auth/google", "_self");
};

const Ribbon = () => {
  return (
    <div className="ribbon">
      <div className="ribbon-content">
        <img src={logo} alt="Logo" className="ribbon-logo" />
        <span>AAHAR</span>
      </div>
      <button className="ribbon-button" onClick={signIn}>
        Sign Up/Sign In
      </button>
    </div>
  );
};

export default Ribbon;
