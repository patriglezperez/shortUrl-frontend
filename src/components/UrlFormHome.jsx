import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_ENDPOINTS } from "../services/endpoints";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert } from "@mui/material";
import phone from "../assets/img/phone.webp";
import iphone from "../assets/img/iphoneGSpsd.png";
import logo from "../assets/img/gsLogo.png";

function UrlFormHome() {
  const [url, setUrl] = useState();
  let [shortUrl, setShortUrl] = useState([]);
  let [obj, setObj] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  async function handleSubmit(e) {
    e.preventDefault();
    setShortUrl(null);
    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/urls/add`, { url })
      .then((res) => res.data);

    console.log("result", result);
    setShortUrl(result.shortUrl);
    setObj(result);
  }

  return (
    <div>
      <div className="navbar">
        <div className="navleft">
          <img src={logo} alt="logo" className="logo" />
          <p className="left-logo">getSpace</p>
        </div>
        <Alert
          className={copied === false ? "notVisible " : ""}
          severity="success"
        >
          Url successfully copied!
        </Alert>
      </div>
      <div className="container-home">
        <div className="left">
          <div className="main">
            <div>
              <form onSubmit={handleSubmit}>
                <h1>
                  <span className="blue">Ge</span>
                  <span className="pink">tS</span>
                  <span className="yellow">pa</span>
                  <span className="red">ce</span> es el <br />
                  lugar donde todo sucede
                </h1>
                <p>
                  Get Space es el acortador de URLs para generar enlaces cortos
                  que crean una mejor impresión de los clicks. Es fácil. Agregra
                  tu url y haz clic en "Crear" para conseguir una nueva url más
                  corta.
                </p>
                <div className="urls">
                  <input
                    placeholder="https://example.com"
                    type="text"
                    className="input"
                    onChange={(e) => setUrl(e.target.value)}
                  />

                  <br />
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                        ></path>
                      </svg>{" "}
                      Crear
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <br />
          {obj.length === 0 ? (
            <div className="notVisible"></div>
          ) : (
            <div className="shortLink">
              <p>
                <a
                  className="box"
                  href={obj.fullUrl}
                  target={"_blank noreferrer"}
                >
                  {shortUrl}
                </a>
              </p>
              <CopyToClipboard text={shortUrl} onCopy={() => setCopied(true)}>
                <ContentCopyIcon
                  fontSize="small"
                  className={copied ? "copied" : ""}
                  onClick={console.log("copiado")}
                />
              </CopyToClipboard>
            </div>
          )}
        </div>

        <div className="right">
          <img src={iphone} alt="logo" className="img1" />
          <img src={phone} alt="test" className="img2" />
          <div className="back-path">
            <svg height="60mm" width="90mm" className="circle">
              <circle cx="29mm" cy="28mm" r="28mm" />
            </svg>
            <svg height="80mm" width="80mm" className="semicircle">
              <circle cx="0mm" cy="40mm" r="30mm" />
            </svg>
            <div className="composition">
              <svg width="300" height="200" className="star">
                <polygon points="100,10 40,198 190,78 10,78 160,198" />
              </svg>
              <svg width="260" height="200" className="star2">
                <polygon points="100,10 40,198 190,78 10,78 160,198" />
              </svg>
            </div>
            <svg height="20mm" width="90mm" className="line">
              <rect width="70mm" height="25mm" rx="1mm" ry="1mm" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UrlFormHome;
