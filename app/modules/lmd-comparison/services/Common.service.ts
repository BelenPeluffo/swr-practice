import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

export class CommonService {
  protected static getData = async (url: string, element = "") => {
    const response = await axiosInstance.get(url + element);
    return response.status === 200 ? response.data : null;
  };

  protected static patchData = async <BodyType>(
    url: string,
    body: BodyType
  ) => {
    const response = await axios.patch(url, body);
    return response.status === 200 ? response.data : null;
  };
}
