import { useEffect, useState } from "react";
import { storage } from "../firebase.config";
import { ref, getDownloadURL } from "firebase/storage";

const useFirabeImage = (url) => {
  const [state, setState] = useState({loading: true, url: ""});
  const getImage = async () => {
    const response = await getDownloadURL(ref(storage, url));
    setState({loading: false, url: response })
  }

  useEffect(() => {
    getImage();
  },[])

  return{...state}
}

export default useFirabeImage;
