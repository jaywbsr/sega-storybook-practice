"use client";

import React from "react";
import { Button } from "antd";
import './gamebutton.css';

export interface buttonProps{
    // primary?: boolean;
    // backgroundColor?: string;
    size?: 'large' | 'middle' | 'small';
    // type: 'dashed' | 'primary' | 'default';
    label: string;
    onClick?: () => void;
}

const GameButton: React.FC<buttonProps> = ({size, label, onClick}) => {

  return (
    <Button type='default' size={size} color="purple" onClick={onClick}>
        {label}
    </Button>
  );
};

export default GameButton;
