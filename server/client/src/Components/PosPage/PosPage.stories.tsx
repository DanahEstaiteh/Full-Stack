import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import PosPage from './PosPage';

export default {
  title: 'Pos Page',
  Component: PosPage
};

const Template: Story = () => <PosPage />;

export const PosPageRes = Template.bind({});
