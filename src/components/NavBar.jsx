import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/img/rocket.png";

function NavBar() {
  const navigate = useNavigate();
  const locationUrl = window.location.href;
  const signUpView = "/SignUp";
  const signInView = "/signIn";
  const userHomeView = "/home";
  const shortUrlView = "/short";

  let renderNav;

  if (locationUrl.includes(signUpView)) {
    renderNav = (
      <div className="sign">
        <input
          type="button"
          value="Account"
          className="signin"
          onClick={() => {
            navigate(`/signIn`);
          }}
        />
      </div>
    );
  } else if (locationUrl.includes(signInView)) {
    renderNav = (
      <div className="sign">
        <input
          type="button"
          value="Sign up"
          className="signup"
          onClick={() => {
            navigate(`/SignUp`);
          }}
        />
      </div>
    );
  } else if (locationUrl.includes(userHomeView)) {
    renderNav = <div className="sign"></div>;
  } else if (locationUrl.includes(shortUrlView)) {
    renderNav = (
      <div className="sign">
        <input
          type="button"
          value="Home"
          className="home"
          onClick={() => {
            navigate(`/home`);
          }}
        />
      </div>
    );
  } else {
    renderNav = (
      <div className="sign">
        <input
          type="button"
          value="Account"
          className="signin"
          onClick={() => {
            navigate(`/signIn`);
          }}
        />
        <input
          type="button"
          value="Sign up"
          className="signup"
          onClick={() => {
            navigate(`/SignUp`);
          }}
        />
      </div>
    );
  }

  return (
    <div className="nav">
      <div
        className="navleft"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={LogoImg} alt="logo" className="logo" />
        <p>getSpace</p>
      </div>

      {renderNav}
    </div>
  );
}

export default NavBar;
