import React from 'react';
import Form from './Form';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Form',
    Component: Form,
    argTypes: { onClick: { action: 'clicked' } }
} as Meta;

interface FormProps {
    isLogin: boolean;
    login: string;
    onLogin: (isLogin: boolean) => void;
}

const handleLogin = (isLogin: boolean) => {};

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const NotLogin = Template.bind({});

NotLogin.args = {
    isLogin: false,
    login: 'login',
    onLogin: () => handleLogin(true)
};

//export const Login = () => <Form isLogin={true} login="login"></Form>;
//export const notLogin = () => <Form isLogin={false} login="login"></Form>;
