import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      //database related works
      const db = getDatabase();
      console.log(db);
      const videoRef = ref(db, "videos");
      console.log(videoRef);
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        //request firebase data
        const snapshot = await get(videoQuery);
        setLoading(false);
        console.log(snapshot);
        if (snapshot.exists()) {
          setVideos((prevVideo) => {
            return [...prevVideo, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideo();
  }, [page]);

  return { loading, error, videos, hasMore };
}
