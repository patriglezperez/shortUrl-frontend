import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShortUrl() {
  const short = useParams();
  const [err, setErr] = useState(false);
  let [givefullUrl, setGiveFullUrl] = useState("");
  const navigate = useNavigate();

  //Petition to the short one to bring us the long one
  useEffect(() => {
    async function findFullUrl() {
      setGiveFullUrl("");
      const shortUrl = short.shortUrl;
      try {
        const result = await axios
          .get(`http://localhost:3001/api/urls/find/${shortUrl}`)
          .then((res) => res.data.result);

        const full = await result.fullUrl;
        console.log(result, "full");
        setGiveFullUrl(full);
      } catch (err) {
        setErr(true);
      }
    }

    findFullUrl();
  }, []);

  //redirected to error page for not finding the short url
  useEffect(() => {
    setTimeout(() => {
      navigate("*");
    }, 3000);
  }, []);

  const pageRender =
    err === true ? (
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ) : (
      ""
    );
  givefullUrl !== "" && (window.location.href = givefullUrl);

  return (
    <>
      <div className="background">{pageRender}</div>
    </>
  );
}
export default ShortUrl;
