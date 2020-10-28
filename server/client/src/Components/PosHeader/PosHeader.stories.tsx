import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import PosHeader from '../PosHeader/PosHeader';

export default {
  title: 'Header',
  Component: PosHeader
};

const Template: Story = () => <PosHeader />;

export const Header = Template.bind({});
