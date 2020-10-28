import React, { useEffect, useState } from 'react';
import { addNewCart, deleteCart, getCarts } from '../../PosAPIS/CartAPIs';
import { getItems } from '../../PosAPIS/CartItemAPIs';
import { Cart, Item } from '../../Types';
import CartSection from '../CartItemsSection/CartSection';
import CartTab from '../CartItemsSection/CartTab';

const CartSectionnn = () => {
    const [activeCart, setActiveCart] = useState<Cart>({_id: "", id: 0,time:new Date()});
    const [carts, setCarts] = useState<Cart[]>([]);
    const [items, setItems] = useState<Item[]>([]);

    const fetchCarts = (): void => {
        getCarts()
          .then(({ data: { carts } }: Cart[] | any) => {setCarts(carts)})
          .catch((err: Error) => setCarts([]));
      };
      const fetchItems = (): void => {
        getItems()
          .then(({ data: { items } }: Cart[] | any) => {setItems(items)})
          .catch((err: Error) => setItems([]));
      };

      const handleDelete = (id : number) => {
        handleDeleteCart(activeCart._id);
      }
      const handleDeleteCart = (_id: string): void => {
        deleteCart(_id)
          .then(({ status, data }) => {
            if (status !== 200) {
              throw new Error('Error! cart not deleted');
            }
            setCarts(data.allData as Cart[]);
          })
          .catch((err) => console.log(err));
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

    useEffect(() => {
        fetchCarts();
        fetchItems();
    }, [])
    return (
        <div>
         <CartTab cartList={carts} active={activeCart.id} onDelete={handleDelete} handleChangeActive={(active) => setActiveCart(active)} onSaveCart={handleSaveCart}/> 
         <CartSection
            onCancel={() => handleDelete(activeCart.id)}
            itemList={items}
          />
        </div>
    )
}

export default CartSectionnn;
