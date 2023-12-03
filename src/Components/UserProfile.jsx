import { Flex, Spinner,Image } from '@chakra-ui/react';
import { getFirestore } from 'firebase/firestore';
import React, { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
import { firebaseApp } from '../firebase-config';
import { getUserInfo, useruploadedVideos } from '../utils/fetchData';
import RecomendedVideos from "./RecomendedVideos";

const randomImage =
  "https://source.unsplash.com/1600x900/?nature,photography,technology";


const UserProfile = () => {
  const { userId } =useParams();
  const [isLoading, setIsLoading] = useState(false);
  const[userInfo,setUserInfo] = useState(null);
  const [feeds, setFeeds] = useState(null)

  const fireStoreDb = getFirestore(firebaseApp);

  useEffect(() => {
    setIsLoading(true);
    if (userId) {
      getUserInfo(fireStoreDb, userId).then((user) =>{
        setUserInfo(user);

      });

      useruploadedVideos(fireStoreDb, userId).then(feed =>{
        setFeeds(feed);

      })
      setIsLoading(false);
    }
  }, [userId]);

  if(isLoading) return <Spinner/>
  
  return (
    <Flex alignItems={"center"}
    justifyContent={"center"}
    width={"full"}
    height={"auto"}
    p={2}
    direction={"column"} >

<Flex alignItems={"center"}
    justifyContent={"center"}
    width={"full"}
    height={"auto"}
    p={2}
    direction={"column"} >

      <Image  src={randomImage}
        height={"320px"}
        width="full"
        objectFit={"cover"}
        borderRadius={"md"}
      />
      <Image
          src={userInfo?.photoURL}
          width="120px"
          objectFit={"cover"}
          border="2px"
          borderColor={"gray.100"}
          rounded="full"
          shadow={"lg"}
          mt="-16"
        />
      
    </Flex>
    {feeds && (
                <Flex direction={"column"} width={"full"} my={6} >
                   
                    <RecomendedVideos feeds={feeds} />
                </Flex>
            )};
    </Flex>
  )
}

export default UserProfile