import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_ENDPOINTS } from "../../services/endpoints";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert } from "@mui/material";
import phone from "../../assets/img/phone.webp";
import iphone from "../../assets/img/iphoneGSpsd.png";

function UrlFormHome() {
  const [url, setUrl] = useState();
  let [shortUrl, setShortUrl] = useState([]);
  let [obj, setObj] = useState([]);
  const [copied, setCopied] = useState(false);
  const page = window.location.href;
  console.log(page);
  //we will delete the alert at x time
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  //create url
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
    <>
      <Alert
        className={copied === false ? "notVisible " : ""}
        severity="success"
      >
        Url copiada con éxito!
      </Alert>

      <div className="container-home ">
        <div className="left ">
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
                GetSpace es el acortador de urls con el que conseguirás generar
                urls cortas que crean una mejor impresión. Es fácil. Agregra tu
                url y haz clic en "Crear".
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
                    {page}
                    {shortUrl}
                  </a>
                </p>
                <CopyToClipboard
                  text={`${process.env.REACT_APP_URL}/${shortUrl}`}
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

        {/* images with background paths */}
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
    </>
  );
}
export default UrlFormHome;
