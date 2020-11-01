import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { addNewCart, deleteCart, getCarts } from '../../PosAPIS/CartAPIs';
import { addNewItem, deleteItem, getItems } from '../../PosAPIS/CartItemAPIs';
import { getCategories } from '../../PosAPIS/CategoryAPIs';
import { getProducts } from '../../PosAPIS/ProductAPIs';
import { Item, Category, Cart, Product } from '../../Types';
import CartItemsSection from '../CartItemsSection/CartItemsSection';
import { getCategoryNamePosPage } from '../CategoriesList/CategoryFunctions';
import StockItems from '../StockItems/StockItems';
import { PosPgaeStyles } from './Style';

const PosPage = () => {
  const [activeCart, setActiveCart] = useState<Cart>({_id: "", id: 0,time:new Date()});
  const [categories, setCategories] = useState<Category[]>([]);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [carts, setCarts] = useState<Cart[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const classes = PosPgaeStyles();

  const categoryNames = getCategoryNamePosPage(categories);

  const fetchItems = (): void => {
    getItems()
      .then(({ data: { items } }: Item[] | any) => {setCartItems(items); console.log({items})})
      .catch(() => setCartItems([]));
  };
  const fetchCategories = (): void => {
    getCategories()
      .then(({ data: { categories } }: Category[] | any) => {setCategories(categories)})
      .catch(() => setCategories([]));
  };
  const fetchProducts = (): void => {
    getProducts()
      .then(({ data: { products } }: Product[] | any) => {setProducts(products)})
      .catch((err: Error) => setProducts([]));
  };
  const fetchCarts = (): void => {
    getCarts()
      .then(({ data: { carts } }: Cart[] | any) => {setCarts(carts)})
      .catch((err: Error) => setCarts([]));
  };
  
  const handleDeleteItem = (_id: string): void => {
    deleteItem(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Item not deleted');
        }
        setCartItems(data.allData as Item[]);
        
      })
      .catch((err) => console.log(err));
  };

  const handleSaveItem = (formData: Item): void => {
    console.log({formData});
    addNewItem(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Item not saved');
        }
        setCartItems(data.allData as Item[]);
        console.log(data.allData )
        console.log(cartItems)
      })
      .catch((err: any) => console.log(err));
  };

  const handleSaveCart = (formData: Cart): void => {
    console.log({formData});
    addNewCart(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! cart not saved');
        }
        setCarts(data.allData as Cart[]);
      })
      .catch((err: any) => console.log(err));
  };


  const handleDeleteCart = (_id: string): void => {
    console.log("inside handleDeleteCart function");
    deleteCart(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! cart not deleted');
        }
        setCarts(data.allData as Cart[]);
        
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteActiveCartAndItem= (activeItem : Item[]) => {
  handleDeleteCart(activeCart._id);
   for(let item of activeItem){
     console.log(item)
    handleDeleteItem(item._id);
   }
  };

  const addItemToCart = (item: Product) => {

    const itemIndex = cartItems?.findIndex(
      (currentItem) =>
        currentItem.name === item.name && currentItem.cartId === activeCart.id
    );
   

    if (activeCart.id > 1 && (itemIndex < 0 || itemIndex === undefined)) {
      
      const lastId = cartItems?.length ? cartItems[cartItems.length - 1].id : 1;
      const newItem: Item = {
        _id: "",
        cartId: activeCart.id,
        id: lastId + 1,
        name: item.name,
        price: item.price,
        count: 1
      };
      handleSaveItem(newItem); 
      console.log({cartItems})
    } else if (activeCart.id < 1) {
      alert('select cart');
    } else {
      alert('item exist in Cart');
    }
  };
 
  useEffect(() => {
console.log({activeCart})
console.log({cartItems})
console.log({carts})
  }, [activeCart,cartItems,carts]);
  useEffect(() => {
    fetchCategories();
    fetchCarts();
    fetchItems();
    fetchProducts();
  }, []);
  return (
    <Grid container spacing={1} className={classes.PosPage}>
      <Grid item xs={5}>
         <CartItemsSection
         itemData={cartItems}
          activeCart={activeCart}
          cartList={carts}
          handleChangeActive= {(activeCart)=> setActiveCart(activeCart)}
          handleDeleteItem={handleDeleteItem}
          handleDeleteActiveCart={handleDeleteActiveCartAndItem}
          handleSaveCart={handleSaveCart}
          
        /> 
      </Grid>
      <Grid item xs={7}>
         <StockItems
         categoryNames={categoryNames}
          products={products}
          onMoveItem={(item) => addItemToCart(item)}
        /> 
      </Grid>
    </Grid>
  );
};

export default PosPage;
