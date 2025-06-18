"use client";

import React from "react";
import { Image, Typography } from "antd";
import "./gamecard.css";

const { Paragraph } = Typography;

interface GameCardProps {
  imageUrl: string;
  tag: string;
  title: string;
  content: string;
}

const GameCard: React.FC<GameCardProps> = ({
  imageUrl,
  tag,
  title,
  content,
}) => {
  return (
    <div className="game-card">
      <div className="image-container">
        <Image
          alt={title}
          preview={false}
          src={imageUrl}
          className="cardimage"
        />
      </div>
      <Paragraph className="game-card-tag">{tag}</Paragraph>
      <Paragraph className="game-card-title">{title}</Paragraph>
      <Paragraph className="game-card-content">{content}</Paragraph>
    </div>
  );
};

export default GameCard;
