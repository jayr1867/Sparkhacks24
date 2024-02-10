import logo from "./assets/logo.jpg"; // Update the path to your logo image

const Ribbon = () => {
  return (
    <div className="ribbon">
      <div className="ribbon-content">
        <img src={logo} alt="Logo" className="ribbon-logo" />
        <span>AAHAR</span>
      </div>
      <button className="ribbon-button">Sign Up/Sign In</button>
    </div>
  );
};

export default Ribbon;
