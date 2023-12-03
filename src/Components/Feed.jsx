import { getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firebaseApp } from "../firebase-config";
import { categoryFeeds, getAllFeeds } from "../utils/fetchData";
import { VideoPin } from ".";
import { Spinner, SimpleGrid, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Feed = () => {
  //firestore database instance
  const fireStoreDb = getFirestore(firebaseApp);

  const [feeds, setFeeds] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      categoryFeeds(fireStoreDb, categoryId).then((data) => {
        setFeeds(data);
        setLoading(false);
      });
    } else {
      getAllFeeds(fireStoreDb).then((data) => {
        setFeeds(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <Spinner msg={"Loading your feeds"} />;
  if (!feeds?.length > 0) return <NotFound />;
  return (
    <SimpleGrid
      minChildWidth="300px"
      spacing="15px"
      width="full"
      autoColumns={"max-content"}
      px="2"
      overflowX={"hidden"}
    >
      {feeds &&
        feeds.map((data) => (
          <VideoPin key={data.id} maxWidth={420} height="80px" data={data} />
        ))}
    </SimpleGrid>
  );
};

export default Feed;
