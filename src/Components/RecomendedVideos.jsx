import { getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { getAllFeeds } from "../utils/fetchData";
import { VideoPin } from ".";

const RecomendedVideos = ({ feeds }) => {
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
  )
}

export default RecomendedVideos;