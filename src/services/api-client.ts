import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9d5d96b3ba414c5184cce45bea95178e"
    }
});