import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getCarts } from '../../PosAPIS/CartAPIs';
import { getItems } from '../../PosAPIS/CartItemAPIs';
import { getCategories } from '../../PosAPIS/CategoryAPIs';
import { ProductItem, Item, Category, Cart } from '../../Types';
import CartItemsSection from '../CartItemsSection/CartItemsSection';
import { getCategoryNamePosPage } from '../CategoriesList/CategoryFunctions';
import StockItems from '../StockItems/StockItems';

const PosPage = () => {
  //const products: ProductItem[] = getProductItem('home');
  const [activeCart, setActiveCart] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [carts, setCarts] = useState<Cart[]>([]);
  const [activeCartData, setActiveCartData] = useState<Item[]>([]);
  const [data, setData] = useState<Item[]>(items);
  const categoryNames = getCategoryNamePosPage(categories);

  const fetchCategories = (): void => {
    getCategories()
      .then(({ data: { categories } }: Category[] | any) => {setCategories(categories)})
      .catch((err: Error) => setCategories([]));
  };
  const fetchCarts = (): void => {
    getCarts()
      .then(({ data: { carts } }: Cart[] | any) => {setCarts(carts)})
      .catch((err: Error) => setCategories([]));
  };
  const fetchItems = (): void => {
    getItems()
      .then(({ data: { items } }: Cart[] | any) => {setItems(items)})
      .catch((err: Error) => setCategories([]));
  };
  const addItemToCart = (item: ProductItem) => {
    const itemIndex = items.findIndex(
      (currentItem) =>
        currentItem.name === item.name && currentItem.cartId === activeCart
    );
    if (activeCart > 1 && itemIndex < 0) {
      const lastId = items.length ? items[items.length - 1].id : 1;
      const newItem: Item = {
        _id: "",
        cartId: activeCart,
        id: lastId + 1,
        name: item.name,
        price: item.price,
        count: 1
      };
      items.push(newItem);
      setData(items.filter((item) => item.cartId === activeCart));
    } else if (activeCart < 2) {
      alert('select cart');
    } else {
      alert('item exist in Cart');
    }
  };
  useEffect(() => {}, [items, activeCart]);
  useEffect(() => {
    fetchCategories();
    fetchCarts();
    fetchItems();
  }, []);
  return (
    <Grid container spacing={1}>
      <Grid item xs={5}>
        <CartItemsSection
          getActiveCart={(activeCart) => setActiveCart(activeCart)}
          cartList={carts}
          itemData={items}
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
