import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../services/endpoints";
// import { Button } from "@mui/material";

function UrlForm() {
  const [url, setUrl] = useState();
  let [shortUrl, setShortUrl] = useState([]);
  let [obj, setObj] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    setShortUrl(null);
    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/`, { url })
      .then((res) => res.data);

    console.log("result", result);
    setShortUrl(result.shortUrl);
    setObj(result);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/* destination: {url} */}
        <h1>Get Space URL Generator</h1>
        <p>
          Get Space URL shortener build to generate short links that creates
          better click impression{" "}
        </p>
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
        {/* <Button type="submit">Create a Link</Button> */}
        <button type="submit" className="button">
          Get in touch
        </button>
      </form>
      <br />
      {shortUrl ? (
        <div>
          <p>
            <a
              className="shorLink"
              href={obj.fullUrl}
              target={"_blank noreferrer"}
            >
              {shortUrl}
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
}
export default UrlForm;
