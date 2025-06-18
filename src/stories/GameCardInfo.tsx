"use client";

import React from "react";
import { Image, Typography } from "antd";
import "./gamecardinfo.css";

const { Paragraph } = Typography;

type ContentItem = {
  text: string;
  icon?: React.ReactNode;
  url?: string;
};

interface GameInfoCardProps {
  imageUrl: string;
  title: string;
  content: ContentItem[];
  date: string;
  theme: 'red'|'green'|'blue';
}

const GameInfoCard: React.FC<GameInfoCardProps> = ({
  imageUrl,
  title,
  content,
  date,
  theme,
}) => {
  return (
    <div className="gameinfo-card">
      <Image
        alt={title}
        preview={false}
        src={imageUrl}
        className="gameinfo-card-image"
      />
      <div className={`gameinfo-container ${theme}`}>
        <div className="gameinfo-divfordate">
          <Paragraph className="gameinfo-card-title">{title}</Paragraph>
          <Typography className="gameinfo-card-content">
            <h1 >Theme: {theme}</h1>
            <p style={{ marginBottom: "0px", fontWeight: "bold" }}>Include</p>
            {/* <ul>
              {content.map((point, index) => (
                <li className="list-disc" key={index}>
                  {point}
                </li>
              ))}
            </ul> */}
            
            <ul>
              {content.map((item, index) => (
                <li
                  className="list-disc"
                  key={index}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </Typography>
        </div>
        <Typography className="gameinfo-card-date">{date}</Typography>
        <div className="gameinfo-card-preorder-button">
          <a>PRE-ORDER</a>
        </div>
      </div>
    </div>
  );
};

export default GameInfoCard;
