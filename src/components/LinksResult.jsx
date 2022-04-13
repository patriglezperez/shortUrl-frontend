import axios from "axios";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const SERVER_ENDPOINT =
  process.env.REACT_APP_SERVER_ENDPOINT || "http://localhost:3001";

function LinksResult() {
  const [shortenLink, setShortenLink] = useState("Hello Word");
  const [copied, setCopied] = useState(false);
  let shortUrl = useParams();
  console.log("shortUrl de LinksResult", shortUrl);

  //Borrar lo que hemos copiado al segundo --> En proceso
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);

      return () => clearTimeout(timer);
    }, 1000);
  }, [copied]);

  return (
    <div className="result">
      <p>{shortUrl}</p>
    </div>
  );
}
export default LinksResult;

//Copiar a papeles
// <div className="result">
// <p>{shortenLink}</p>
// <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
//   <button className={copied ? "copied" : ""}>Copy to clipboard</button>
// </CopyToClipboard>
// </div>
