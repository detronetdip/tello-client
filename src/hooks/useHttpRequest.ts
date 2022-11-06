import { useEffect, useState } from "react";
import axios from "../utils/HttpRequest";

export function useHttpRequest(
  url: string,
  Method: "POST" | "GET" | "PUT" | "DELETE"
) {
  const [isLoding, setIsLoding] = useState(false);
  const [data, setData] = useState<null | string>(null);
  if (Method === "GET") {
    useEffect(() => {
      setIsLoding(true);
      axios
        .get(url, { withCredentials: true })
        .then((res) => {
          setIsLoding(false);
          setData(res.data);
        })
        .catch((err) => {
          setIsLoding(false);
        });
    }, []);
  }
  return { data, isLoding };
}
