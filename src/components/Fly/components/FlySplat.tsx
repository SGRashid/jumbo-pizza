import { type FC } from "react";
import { type FlySplatProps } from "./Fly.types.ts";

export const FlySplat: FC<FlySplatProps> = ({
    x = 0,
    y = 0,
    size = 80,
    color = "#4CAF50"
}) => (
  <svg 
    width={size} 
    height={size * 0.8} 
    viewBox="0 0 100 80" 
    style={{
      position: 'fixed',
      left: x - size / 2, // центрируем
      top: y - size * 0.4, // центрируем с учетом высоты
      pointerEvents: 'none',
      zIndex: 999,
      display: 'block'
    }}
  >
    {/* Основное пятно */}
    <path
      d="M20,35 C10,25 8,15 15,8 C22,1 35,5 42,10 C50,3 65,2 72,10 C79,18 80,30 75,38 C70,46 60,50 50,52 C40,58 25,60 18,50 C15,45 20,40 20,35Z"
      fill={color}
      fillOpacity="0.8"
      stroke={color}
      strokeWidth="1.5"
    />
    
    {/* Брызги */}
    <circle cx="10" cy="10" r="3" fill={color} fillOpacity="0.6"/>
    <circle cx="5" cy="25" r="2" fill={color} fillOpacity="0.5"/>
    <circle cx="15" cy="5" r="2.5" fill={color} fillOpacity="0.5"/>
    
    <circle cx="88" cy="12" r="3" fill={color} fillOpacity="0.6"/>
    <circle cx="92" cy="28" r="2" fill={color} fillOpacity="0.5"/>
    <circle cx="82" cy="3" r="2.5" fill={color} fillOpacity="0.5"/>
    
    <circle cx="8" cy="45" r="2" fill={color} fillOpacity="0.5"/>
    <circle cx="25" cy="58" r="2.5" fill={color} fillOpacity="0.6"/>
    
    <circle cx="70" cy="52" r="2" fill={color} fillOpacity="0.5"/>
    <circle cx="85" cy="45" r="3" fill={color} fillOpacity="0.6"/>
    <circle cx="78" cy="62" r="2" fill={color} fillOpacity="0.5"/>
  </svg>
);