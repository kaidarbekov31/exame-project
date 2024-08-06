
import { FavouriteContext } from "../../context/favouritesContext";
import React, { useContext, useEffect } from "react";
import { List } from "antd";
import FavouritesItem from "./FavouritesItem";

const Favourites = () => {
  const { getFavourite, favourite } = useContext(FavouriteContext);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        await getFavourite();
      } catch (error) {
        console.error('Failed to fetch favourites', error);
      }
    };
    fetchFavourites();
  }, [getFavourite]);

  return (
    <div style={{ paddingTop: "100px", marginBottom: "50px" }}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={favourite?.products || []} 
        renderItem={(item) => <FavouritesItem item={item} />}
      />
    </div>
  );
};

export default Favourites;
