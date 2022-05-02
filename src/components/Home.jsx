import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation().state;
  const navigate = useNavigate();
  console.log(location, "location");
  return (
    <>
      <NavBar />
      <div
        onClick={() => {
          navigate(`/short`, {
            state: {
              user: location.user,
            },
          });
        }}
      >
        Acortar una url
      </div>
      <div>ver mis urls</div>
    </>
  );
}
export default Home;
