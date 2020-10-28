import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import CategoriesList from './CategoriesList';


export default {
  title: 'Category',
  Component: CategoriesList
};

const Template: Story = () => <CategoriesList  />;

export const CategoryList = Template.bind({});
