import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_ENDPOINTS } from "../services/endpoints";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert } from "@mui/material";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import StaticContext from "../context/StaticContext";

function UrlFormHome() {
  const [url, setUrl] = useState();
  let [shortUrl, setShortUrl] = useState([]);
  let [obj, setObj] = useState([]);
  const [copied, setCopied] = useState(false);

  /*Para que tenga en cuenta el token*/
  const location = useLocation().state;
  const user = location.user;
  console.log(user);

  const token = user.token;
  // const config = {
  //   headers: {
  //     authorization: `bearer ${token}`,
  //   },
  // };

  const context = useContext(StaticContext);
  console.log(context, "context");

  //Se borre el alert a X tiempo
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

  return (
    <div className="background">
      <div className="container">
        <NavBar />
        <div>
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
                <p className="shortdescription">
                  Get Space URL shortener build to generate short links that
                  creates better click impression
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

                  <button type="submit" className="btn">
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
                    }}
                  >
                    <div className="card">
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default UrlFormHome;
