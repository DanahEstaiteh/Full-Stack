import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { categoryData, itemData, cartData } from '../../Data/Data';
import { ProductItem, Item } from '../../Types';
import CartItemsSection from '../CartItemsSection/CartItemsSection';
import { getCategoryNamePosPage } from '../CategoriesList/CategoryFunctions';
import StockItems from '../StockItems/StockItems';

const PosPage = () => {
  //const products: ProductItem[] = getProductItem('home');
  const [activeCart, setActiveCart] = useState<number>(0);
  const [activeCartData, setActiveCartData] = useState<Item[]>([]);
  const [data, setData] = useState<Item[]>(itemData);
  const categoryNames = getCategoryNamePosPage(categoryData);
  const addItemToCart = (item: ProductItem) => {
    const itemIndex = itemData.findIndex(
      (currentItem) =>
        currentItem.name === item.name && currentItem.cartId === activeCart
    );
    if (activeCart > 1 && itemIndex < 0) {
      const lastId = itemData.length ? itemData[itemData.length - 1].id : 1;
      const newItem: Item = {
        cartId: activeCart,
        id: lastId + 1,
        name: item.name,
        price: item.price,
        count: 1
      };
      itemData.push(newItem);
      setData(itemData.filter((item) => item.cartId === activeCart));
    } else if (activeCart < 2) {
      alert('select cart');
    } else {
      alert('item exist in Cart');
    }
  };
  useEffect(() => {}, [itemData, activeCart]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={5}>
        <CartItemsSection
          getActiveCart={(activeCart) => setActiveCart(activeCart)}
          cartList={cartData}
          itemData={data}
          isAddItem={true}
        />
      </Grid>
      <Grid item xs={7}>
        {/* <StockItems
          onMoveItem={(item) => addItemToCart(item)}
          categoryNames={categoryNames}
          productsItem={products}
        /> */}
      </Grid>
    </Grid>
  );
};

export default PosPage;
