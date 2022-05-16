import { useEffect, useContext } from "react";
import { Alert } from "@mui/material";
import AddUrl from "./AddUrl/AddUrl";
import StaticContext from "../../context/staticContext";
import ImageCompose from "../../assets/img/paths.png";

function UrlFormHome() {
  const { copied, setCopied } = useContext(StaticContext);

  //we will delete the alert at 2 seconds//
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <Alert
        className={copied === false ? "notVisible " : "visible"}
        severity="success"
      >
        Url copiada con éxito!
      </Alert>
      <div className="urlHome">
        <AddUrl />
        <img src={ImageCompose} alt="phone paths" />
      </div>
    </>
  );
}
export default UrlFormHome;
