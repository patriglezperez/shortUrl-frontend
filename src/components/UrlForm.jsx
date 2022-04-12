import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../services/endpoints";

function UrlForm() {
  const [url, setUrl] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/`, { url })
      .then((res) => res.data);

    console.log("result", result);
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* destination: {url} */}
      <input
        type="text"
        name="longUrl"
        id="longUrl"
        placeholder="https://example.com"
        onChange={(e) => setUrl(e.target.value)}
      />
      <input type="submit" value="create Short Url" />
    </form>
  );
}
export default UrlForm;
