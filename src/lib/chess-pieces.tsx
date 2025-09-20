// Chess piece SVGs adapted from Cburnett's set, licensed under CC BY-SA 3.0.
// https://en.wikipedia.org/wiki/User:Cburnett

import type { SVGProps } from "react";

export function BlackPawn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C30.06 24.84 31 23.03 31 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function WhitePawn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#FFF"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C30.06 24.84 31 23.03 31 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
          stroke="#000"
        />
      </g>
    </svg>
  );
}

export function BlackKnight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22,10C19.5,10,17,12,17,14c0,1.5,1,2.5,1,2.5l3.5,0c0,0,1,1.5,0.5,2.5c-0.5,1-1.5,1-1.5,1l-2,0.5 c0,0,0,1,1,1c1,0,3,0,3-2c0,0,1,0,1-1c0,0,0-1-1.5-1.5c-1.5-0.5-2.5-2-2.5-3c0-1,0.5-1.5,1-1.5c0.5,0,1,0.5,1,0.5l-0.5,2 l-3.5-1c0,0,0.5-2.5,3.5-2.5c3,0,4.5,2,4.5,2l-1.5,2.5c0,0,0.5,1,1,1c0.5,0,1.5-1,1.5-1l1-3.5c0,0-2.5-1.5-3.5-1.5c-1,0-2.5,0.5-2.5,0.5" />
        <path d="M11.5,30c0,0-1,1-1,2c0,1,0,2.5,2.5,2.5c2.5,0,22.5,0,22.5,0c2.5,0,2.5-2.5,2.5-2.5c0,0-1-1-1-2" />
        <path d="M12.5,30l1.5-11.5l17.5,0L32.5,30" />
        <path d="M12.5,18.5l17.5,0" />
        <path d="M14.25,24.5l15,0" />
      </g>
    </svg>
  );
}

export function WhiteKnight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#fff"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22,10C19.5,10,17,12,17,14c0,1.5,1,2.5,1,2.5l3.5,0c0,0,1,1.5,0.5,2.5c-0.5,1-1.5,1-1.5,1l-2,0.5 c0,0,0,1,1,1c1,0,3,0,3-2c0,0,1,0,1-1c0,0,0-1-1.5-1.5c-1.5-0.5-2.5-2-2.5-3c0-1,0.5-1.5,1-1.5c0.5,0,1,0.5,1,0.5l-0.5,2 l-3.5-1c0,0,0.5-2.5,3.5-2.5c3,0,4.5,2,4.5,2l-1.5,2.5c0,0,0.5,1,1,1c0.5,0,1.5-1,1.5-1l1-3.5c0,0-2.5-1.5-3.5-1.5c-1,0-2.5,0.5-2.5,0.5" />
        <path d="M11.5,30c0,0-1,1-1,2c0,1,0,2.5,2.5,2.5c2.5,0,22.5,0,22.5,0c2.5,0,2.5-2.5,2.5-2.5c0,0-1-1-1-2" />
        <path d="M12.5,30l1.5-11.5l17.5,0L32.5,30" />
        <path d="M12.5,18.5l17.5,0" />
        <path d="M14.25,24.5l15,0" />
      </g>
    </svg>
  );
}

export function BlackBishop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g fill="#000" strokeLinecap="butt">
          <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2.05-3.39.97-10.11-.43-13.5 2-3.39-2.43-10.11-1.03-13.5-2z" />
          <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0 .5.5 0 2z" />
          <path d="M25 8.5c-1.5-1-3.5-1-5 0-1.5-1.5-1.5-3 .5-4-2 2.5-4.5 0-3.5-3.5-1.5 1.5-2.5 2-2.5 3.5 1.5 1 .5 2.5-1 3.5-1-1.5-2.5-2-2.5-3.5 0-2 2.5-3 2.5-3-1.5-1.5-2.5-1.5-2.5 0 0 1.5-1.5 2.5-1.5 2.5-3 0-5 3.5-5 3.5 6.5 2 8 6.5 8 6.5-2 1.5-4 1.5-4 1-1.5-1.5-1.5-2.5 0-2.5z" />
        </g>
        <path
          d="M17.5 26h10M15 32c2.5 2.5 12.5 2.5 15 0"
          strokeLinecap="butt"
        />
        <path
          d="M22.5 25c5.5-1.5 6-11.5-5-15.5"
          fill="none"
          strokeLinejoin="miter"
        />
      </g>
    </svg>
  );
}

export function WhiteBishop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g fill="#fff" strokeLinecap="butt">
          <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2.05-3.39.97-10.11-.43-13.5 2-3.39-2.43-10.11-1.03-13.5-2z" />
          <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0 .5.5 0 2z" />
          <path d="M25 8.5c-1.5-1-3.5-1-5 0-1.5-1.5-1.5-3 .5-4-2 2.5-4.5 0-3.5-3.5-1.5 1.5-2.5 2-2.5 3.5 1.5 1 .5 2.5-1 3.5-1-1.5-2.5-2-2.5-3.5 0-2 2.5-3 2.5-3-1.5-1.5-2.5-1.5-2.5 0 0 1.5-1.5 2.5-1.5 2.5-3 0-5 3.5-5 3.5 6.5 2 8 6.5 8 6.5-2 1.5-4 1.5-4 1-1.5-1.5-1.5-2.5 0-2.5z" />
        </g>
        <path
          d="M17.5 26h10M15 32c2.5 2.5 12.5 2.5 15 0"
          stroke="#000"
          strokeLinecap="butt"
        />
        <path
          d="M22.5 25c5.5-1.5 6-11.5-5-15.5"
          fill="none"
          stroke="#000"
          strokeLinejoin="miter"
        />
      </g>
    </svg>
  );
}

export function BlackRook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M9,39H36V36H9V39ZM12,36V12H33V36H12Z"
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M12,12l3-3h15l3,3"
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M12 24h21"
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M12 12h21"
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M15 9h15"
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M15 9V6h3V9h9V6h3V9"
          style={{ strokeLinecap: "butt" }}
        />
      </g>
    </svg>
  );
}

export function WhiteRook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#fff"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M9,39H36V36H9V39ZM12,36V12H33V36H12Z"
          strokeLinecap="butt"
        />
        <path d="M12,12l3-3h15l3,3" strokeLinecap="butt" />
        <path
          d="M12 24h21"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="M12 12h21"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="M15 9h15"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="M15 9V6h3V9h9V6h3V9"
          strokeLinecap="butt"
        />
      </g>
    </svg>
  );
}

export function BlackQueen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8,12a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M24.5,7.5a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M41,12a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M16,8.5a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M33,9a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M12,36c4-2,19-2,23,0" fill="none" />
        <path
          d="M12,36c-2,0-2-2-2-2l-2-12c0-2,2-3,2-3s1,1,2,1,2-1,2-1,2,1,2,1,2-1,2-1,2,1,2,1,2-1,2-1,2,1,2,1,1-1,2-1,2,3,2,3l-2,12s0,2-2,2"
          fill="none"
        />
      </g>
    </svg>
  );
}

export function WhiteQueen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#fff"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8,12a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M24.5,7.5a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M41,12a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M16,8.5a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M33,9a2,2,0,1,1-4,0,2,2,0,1,1,4,0Z" />
        <path d="M12,36c4-2,19-2,23,0" fill="none" />
        <path
          d="M12,36c-2,0-2-2-2-2l-2-12c0-2,2-3,2-3s1,1,2,1,2-1,2-1,2,1,2,1,2-1,2-1,2,1,2,1,2-1,2-1,2,1,2,1,1-1,2-1,2,3,2,3l-2,12s0,2-2,2"
          fill="none"
        />
      </g>
    </svg>
  );
}

export function BlackKing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22.5 11.63V6M20 8h5"
          style={{
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M22.5,25c-5.523,0-10-4.477-10-10s4.477-10,10-10,10,4.477,10,10-4.477,10-10,10Z"
          style={{
            opacity: 1,
            fill: "#000",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "#000",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m12.5 37 4.5-10.5 5.5 10.5-10 0zm20 0-4.5-10.5-5.5 10.5 10 0z"
          style={{
            strokeLinecap: "butt",
          }}
        />
        <path
          d="M12.5,37h20v-4h-20v4Z"
          style={{
            strokeLinecap: "butt",
          }}
        />
        <path
          d="m12.5 30.5-3-3-2 3 5 .5z"
          style={{
            strokeLinecap: "butt",
          }}
        />
        <path
          d="m32.5 30.5 3-3 2 3-5 .5z"
          style={{
            strokeLinecap: "butt",
          }}
        />
      </g>
    </svg>
  );
}

export function WhiteKing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#fff"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22.5 11.63V6M20 8h5"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M22.5 25c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
        <path
          d="m12.5 37 4.5-10.5 5.5 10.5-10 0zm20 0-4.5-10.5-5.5 10.5 10 0z"
          strokeLinecap="butt"
        />
        <path
          d="M12.5 37h20v-4h-20v4z"
          strokeLinecap="butt"
        />
        <path
          d="m12.5 30.5-3-3-2 3 5 .5z"
          strokeLinecap="butt"
        />
        <path
          d="m32.5 30.5 3-3 2 3-5 .5z"
          strokeLinecap="butt"
        />
      </g>
    </svg>
  );
}
