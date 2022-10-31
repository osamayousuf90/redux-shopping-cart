import axios from "axios";

// export const RegisterUrl = async (api) => {
//   return await axios.get( `https://linkitsoft.com/LIS/public/api/user/${api}`,)
// }

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json, text/plain, */*",
    // "access-control-allow-origin" : "*",
    // "Authorization": `Bearer ${token}`,
}
})



export default instance;