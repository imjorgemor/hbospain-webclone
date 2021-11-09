import axios from "axios";

export const fetchData = async (fetchUrl) => {
    const request = await axios.get(fetchUrl)
    return request.data.results;
}