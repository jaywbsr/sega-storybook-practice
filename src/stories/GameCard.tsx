'use client';

import React from "react";
import { Card, Image, Typography } from "antd";
import './gamecard.css';

const { Title, Paragraph } = Typography;

interface GameCardProps {
  imageUrl: string;
  tag: string;
  title: string;
  content: string;
}

const GameCard: React.FC<GameCardProps> = ({ imageUrl, tag, title, content }) => {
  return (
    <Card className="game-card" bodyStyle={{ padding: 15 }}>
  <Image
    alt={title}
    preview={false}
    src={imageUrl}
    className="game-card-image"
  />
  <Card className="game-card-tag">
    {tag}
  </Card>
  <Title level={5} className="game-card-title">
    {title}
  </Title>
  <Paragraph className="game-card-content">{content}</Paragraph>
</Card>
  );
};

export default GameCard;
