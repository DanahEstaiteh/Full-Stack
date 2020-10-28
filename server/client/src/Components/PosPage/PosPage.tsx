import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getCarts } from '../../PosAPIS/CartAPIs';
import { addNewItem, getItems } from '../../PosAPIS/CartItemAPIs';
import { getCategories } from '../../PosAPIS/CategoryAPIs';
import { getProducts } from '../../PosAPIS/ProductAPIs';
import { ProductItem, Item, Category, Cart, Product } from '../../Types';
import CartItemsSection from '../CartItemsSection/CartItemsSection';
import { getCategoryNamePosPage } from '../CategoriesList/CategoryFunctions';
import StockItems from '../StockItems/StockItems';

const PosPage = () => {
  const [activeCart, setActiveCart] = useState<Cart>({_id: "", id: 0,time:new Date()});
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const categoryNames = getCategoryNamePosPage(categories);

  const fetchItems = (): void => {
    getItems()
      .then(({ data: { items } }: Cart[] | any) => {setItems(items)})
      .catch((err: Error) => setItems([]));
  };
  const fetchCategories = (): void => {
    getCategories()
      .then(({ data: { categories } }: Category[] | any) => {setCategories(categories)})
      .catch((err: Error) => setCategories([]));
  };
  
  const handleSaveItem = (formData: Item): void => {
    console.log({formData});
    addNewItem(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Item not saved');
        }
        setItems(data.allData as Item[]);
      })
      .catch((err: any) => console.log(err));
  };

  const addItemToCart = (item: Product) => {

    const itemIndex = items?.findIndex(
      (currentItem) =>
        currentItem.name === item.name && currentItem.cartId === activeCart.id
    );

    if (activeCart.id > 1 && itemIndex < 0) {
      const lastId = items.length ? items[items.length - 1].id : 1;
      const newItem: Item = {
        _id: "",
        cartId: activeCart.id,
        id: lastId + 1,
        name: item.name,
        price: item.price,
        count: 1
      };
      handleSaveItem(newItem); 
    } else if (activeCart.id < 2) {
      alert('select cart');
    } else {
      alert('item exist in Cart');
    }
  };
  useEffect(() => {}, [items, activeCart]);
  useEffect(() => {
    fetchCategories();
    fetchItems();
  }, []);
  return (
    <Grid container spacing={1}>
      <Grid item xs={5}>
         <CartItemsSection
         itemData={items}
          activeCart={activeCart}
          handleChangeActive= {(activeCart)=> setActiveCart(activeCart)}
          
        /> 
      </Grid>
      <Grid item xs={7}>
         <StockItems
          onMoveItem={(item) => addItemToCart(item)}
          categoryNames={categoryNames}
          
        /> 
      </Grid>
    </Grid>
  );
};

export default PosPage;
