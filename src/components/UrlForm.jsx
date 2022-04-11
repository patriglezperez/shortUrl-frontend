import axios from "axios";
import { useState } from "react";
import { SERVER_ENDPOINTS } from "../../src/";

function UrlForm() {
  const [fullUrl, setfullUrl] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    const result = await axios
      .post(`${SERVER_ENDPOINTS}`, { fullUrl })
      .then((res) => res.data);

    console.log(result);
  }
  return (
    <form onSubmit={handleSubmit}>
      destination: {fullUrl}
      <input
        type="text"
        name="longUrl"
        id="longUrl"
        placeholder="https://example.com"
        onChange={(e) => setfullUrl(e.target.value)}
      />
      <input type="submit" value="create Short Url" />
    </form>
  );
}
export default UrlForm;
