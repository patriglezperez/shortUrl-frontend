import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_ENDPOINTS } from "../services/endpoints";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert } from "@mui/material";
import NavBar from "./NavBar";

function UrlFormHome() {
  const [url, setUrl] = useState();
  let [shortUrl, setShortUrl] = useState([]);
  let [obj, setObj] = useState([]);
  const [copied, setCopied] = useState(false);
  let [givefullUrl, setGiveFullUrl] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  //Peticion para que nos cree una url corta
  async function handleCreate(e) {
    e.preventDefault();
    setShortUrl(null);
    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/urls/add`, { url })
      .then((res) => res.data);

    console.log("result", result);
    setShortUrl(result.shortUrl);
    setObj(result);
  }

  //Peticion a la corta para que nos traiga la larga
  async function findFullUrl(shortUrl) {
    setGiveFullUrl("");
    const result2 = await axios
      .get(`${SERVER_ENDPOINTS}/api/urls/find/${shortUrl}`)
      .then((res) => res.data.result);

    setGiveFullUrl(result2.fullUrl);
    console.log("result2", result2);
    console.log("result short Url", givefullUrl);
    return givefullUrl;
  }

  return (
    <>
      <NavBar />
      <div className="background">
        <Alert
          className={copied === false ? "notVisible " : ""}
          severity="success"
        >
          Url successfully copied!
        </Alert>

        <div className="page">
          <div className="form">
            <form onSubmit={handleCreate}>
              <h1 className="title">
                Get Space <br />
                <span>URL Generator</span>
              </h1>
              <p>
                Get Space URL shortener build to generate short links that
                creates better click impression{" "}
              </p>
              <div className="center">
                <input
                  type="text"
                  name="longUrl"
                  className="input"
                  id="longUrl"
                  placeholder="https://example.com"
                  onChange={(e) => setUrl(e.target.value)}
                />
                <br />
                <br />

                <button type="submit" class="btn">
                  Create
                </button>
              </div>
            </form>
            <br />
            {obj.length === 0 ? (
              <div className="notVisible"></div>
            ) : (
              <div>
                <CopyToClipboard
                  text={shortUrl}
                  onCopy={(e) => {
                    setCopied(true);
                    findFullUrl(shortUrl);
                    return givefullUrl;
                  }}
                >
                  <div className="card">
                    <p href={givefullUrl} className={copied ? "copied" : ""}>
                      {shortUrl}
                    </p>

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
        </div>
      </div>
    </>
  );
}
export default UrlFormHome;
/**/
