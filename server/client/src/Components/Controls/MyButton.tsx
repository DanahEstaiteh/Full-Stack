import React from 'react';
import Button from '@material-ui/core/Button';
import { myButtonStyles } from './Style';

type varientType = 'text' | 'outlined' | 'contained';
type colorType = 'inherit' | 'primary' | 'secondary' | 'default';
type sizeType = 'small' | 'medium' | 'large';
type buttonType = 'button' | 'reset' | 'submit';

interface MyButtonProps {
    variant: varientType;
    text: string;
    color: colorType;
    size: sizeType;
    type: buttonType;
    className?: string;
    disabled?: boolean;
    onClick?: (event: any) => void;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const {
        text,
        variant,
        size,
        type,
        color,
        className,
        disabled,
        onClick
    } = props;
    const classes = myButtonStyles();
    return (
        <Button
            variant={variant}
            size={size}
            color={color}
            className={className}
            type={type}
            classes={{ root: classes.root, label: classes.label }}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default MyButton;
