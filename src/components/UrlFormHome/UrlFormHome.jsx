import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_ENDPOINTS } from "../../services/endpoints";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert } from "@mui/material";
import phone from "../../assets/img/phone.webp";
import iphone from "../../assets/img/iphoneGSpsd.png";
import logo from "../../assets/img/gsLogo.png";
import { useNavigate } from "react-router-dom";

function UrlFormHome() {
  const [url, setUrl] = useState();
  let [shortUrl, setShortUrl] = useState([]);
  let [obj, setObj] = useState([]);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

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

    setShortUrl(result.shortUrl);
    setObj(result);
  }

  return (
    <div>
      <div className="navbar">
        <div className="navleft">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              navigate("/");
            }}
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              fill="currentColor"
            ></path>
          </svg>
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
          <div>
            <div className="main">
              <form onSubmit={handleSubmit}>
                <h1>
                  <span className="blue">Ge</span>
                  <span className="pink">tS</span>
                  <span className="yellow">pa</span>
                  <span className="red">ce</span> es el <br />
                  lugar donde todo sucede
                </h1>
                <p>
                  GetSpace es el acortador de urls con el que conseguirás
                  generar urls cortas que crean una mejor impresión. Es fácil.
                  Agregra tu url y haz clic en "Crear".
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
                      </svg>
                      Crear
                    </span>
                  </button>
                </div>
              </form>
              {obj.length === 0 ? (
                <div className="notVisible"></div>
              ) : (
                <div className="short-card">
                  <p>
                    <a
                      className="box"
                      href={obj.fullUrl}
                      target={"_blank noreferrer"}
                    >
                      http://localhost:3000/{shortUrl}
                    </a>
                  </p>
                  <CopyToClipboard
                    text={`http://localhost:3000/${shortUrl}`}
                    onCopy={() => setCopied(true)}
                  >
                    <ContentCopyIcon
                      fontSize="small"
                      className={copied ? "copied" : ""}
                    />
                  </CopyToClipboard>
                </div>
              )}
            </div>
          </div>
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
