import axios from "axios";
import { useState, useContext } from "react";
import { SERVER_ENDPOINTS } from "../../../services/endpoints";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import StaticContext from "../../../context/staticContext";

function UrlFormHome() {
  const { copied, setCopied } = useContext(StaticContext);
  const [url, setUrl] = useState();
  let [shortUrl, setShortUrl] = useState([]);
  let [obj, setObj] = useState([]);

  const locationpage = "get-space.vercel.app/";

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
            GetSpace es el acortador de urls con el que conseguirás generar urls
            cortas que crean una mejor impresión. Es fácil. Agregra tu url y haz
            clic en "Crear".
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
                {locationpage}
                {shortUrl}
              </a>
            </p>
            <CopyToClipboard
              text={`${locationpage}${shortUrl}`}
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
    </>
  );
}
export default UrlFormHome;
