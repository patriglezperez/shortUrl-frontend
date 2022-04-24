import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_ENDPOINTS } from "../services/endpoints";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert } from "@mui/material";
import LogoImg from "../assets/img/rocket.png";

function UrlFormHome() {
  const [url, setUrl] = useState();
  let [shortUrl, setShortUrl] = useState([]);
  let [obj, setObj] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
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
    <div className="background">
      <div className="navbar">
        <div className="nav">
          <div className="navleft">
            <img src={LogoImg} alt="logo" className="logo" />
            <p>getSpace</p>
          </div>
          <p>Account</p>
        </div>
        <Alert
          className={copied === false ? "notVisible " : ""}
          severity="success"
        >
          Url successfully copied!
        </Alert>
      </div>
      <div className="signup">
        <input type="button" value="Sign up" className="signup" />
      </div>
      <div className="page">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1 className="title">
              Get Space <br />
              <span>URL Generator</span>
            </h1>
            <p>
              Get Space URL shortener build to generate short links that creates
              better click impression{" "}
            </p>
            <div className="center">
              <input
                type="text"
                name="longUrl"
                className="longUrl"
                id="longUrl"
                placeholder="https://example.com"
                onChange={(e) => setUrl(e.target.value)}
              />
              <br />
              <br />

              <button type="submit" className="button">
                <span>Create</span>
                <div class="line"></div>
                <div class="line-2"></div>
                <div class="speak"></div>
                <div class="speak one"></div>
                <div class="speak two"></div>
                <div class="speak three"></div>
              </button>
            </div>
          </form>
          <br />
          {obj.length === 0 ? (
            <div className="notVisible"></div>
          ) : (
            <div>
              <CopyToClipboard text={shortUrl} onCopy={() => setCopied(true)}>
                <div
                  className="card"
                  href={obj.fullUrl}
                  target={"_blank noreferrer"}
                >
                  <p className={copied ? "copied" : ""}>{shortUrl}</p>

                  <ContentCopyIcon
                    fontSize="small"
                    className={copied ? "copied" : ""}
                    onClick={console.log("copiado")}
                  />
                </div>
              </CopyToClipboard>
            </div>
          )}
        </div>
        {/* <img src={imageHome} alt="Home" className="imageHome" /> */}
      </div>
    </div>
  );
}
export default UrlFormHome;
