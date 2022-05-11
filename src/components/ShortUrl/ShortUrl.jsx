import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_ENDPOINTS } from "../../services/endpoints";

function ShortUrl() {
  const short = useParams();
  let [givefullUrl, setGiveFullUrl] = useState("");

  //Petition to the short one to bring us the long one
  useEffect(() => {
    async function findFullUrl() {
      setGiveFullUrl("");
      const shortUrl = short.shortUrl;
      const result = await axios
        .get(`${SERVER_ENDPOINTS}/api/urls/find/${shortUrl}`)
        .then((res) => res.data.result);

      const full = await result.fullUrl;
      setGiveFullUrl(full);
    }

    findFullUrl();
  }, []);

  const pageRender =
    givefullUrl === "" ? (
      <div class="loader">
        <svg viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke-width="4"
            stroke-linecap="round"
          ></circle>
        </svg>
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
