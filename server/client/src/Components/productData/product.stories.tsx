import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import ProductData from './ProductData';

export default {
  title: 'product',
  Component: ProductData
};

const Template: Story = () => <ProductData />;

export const ProductList = Template.bind({});
