import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

const useContent = (target) => {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => console.log(error.message));

    return null;
  }, [firebase, target]);

  return content;
};

export default useContent;
