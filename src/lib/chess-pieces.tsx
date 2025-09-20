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
        <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C30.06 24.84 31 23.03 31 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" />
      </g>
    </svg>
  );
}

export function WhitePawn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C30.06 24.84 31 23.03 31 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" />
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
        <path d="M 22,10 C 19.5,10 17,12 17,14 17,15.5 18,16.5 18,16.5 l 3.5,0 c 0,0 1,1.5 0.5,2.5 C 21.5,20 20.5,20 20.5,20 l -2,0.5 c 0,0 0,1 1,1 1,0 3,0 3,-2 l 1,0 c 0,-1 -1.5,-1.5 -1.5,-1.5 -1.5,-0.5 -2.5,-2 -2.5,-3 0,-1 0.5,-1.5 1,-1.5 0.5,0 1,0.5 1,0.5 l -0.5,2 -3.5,-1 c 0,0 0.5,-2.5 3.5,-2.5 3,0 4.5,2 4.5,2 l -1.5,2.5 c 0,0 0.5,1 1,1 0.5,0 1.5,-1 1.5,-1 l 1,-3.5 C 31,11 28.5,9.5 27.5,9.5 26.5,9.5 25,10 25,10" />
        <path d="M 12.5,37 C 12.5,37 10.5,35.5 10.5,34.5 10.5,33.5 12.5,32 12.5,32 l 20,0 C 32.5,32 34.5,33.5 34.5,34.5 34.5,35.5 32.5,37 32.5,37 l -20,0 z" />
        <path d="m 14,32 2.5,-11.5 12.5,0 L 31,32" />
        <path d="m 14,20.5 17,0" />
      </g>
    </svg>
  );
}

export function WhiteKnight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 22,10 C 19.5,10 17,12 17,14 17,15.5 18,16.5 18,16.5 l 3.5,0 c 0,0 1,1.5 0.5,2.5 C 21.5,20 20.5,20 20.5,20 l -2,0.5 c 0,0 0,1 1,1 1,0 3,0 3,-2 l 1,0 c 0,-1 -1.5,-1.5 -1.5,-1.5 -1.5,-0.5 -2.5,-2 -2.5,-3 0,-1 0.5,-1.5 1,-1.5 0.5,0 1,0.5 1,0.5 l -0.5,2 -3.5,-1 c 0,0 0.5,-2.5 3.5,-2.5 3,0 4.5,2 4.5,2 l -1.5,2.5 c 0,0 0.5,1 1,1 0.5,0 1.5,-1 1.5,-1 l 1,-3.5 C 31,11 28.5,9.5 27.5,9.5 26.5,9.5 25,10 25,10" />
        <path d="M 12.5,37 C 12.5,37 10.5,35.5 10.5,34.5 10.5,33.5 12.5,32 12.5,32 l 20,0 C 32.5,32 34.5,33.5 34.5,34.5 34.5,35.5 32.5,37 32.5,37 l -20,0 z" />
        <path d="m 14,32 2.5,-11.5 12.5,0 L 31,32" />
        <path d="m 14,20.5 17,0" />
      </g>
    </svg>
  );
}

export function BlackBishop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 25.89,36.43 32.61,35.03 36,36 C 32.61,37.03 25.89,35.57 22.5,38 19.11,35.57 12.39,37.03 9,36 z" />
        <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,13.5 22.5,8.5 C 11.5,13.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
        <path d="M 25 8 A 8.5 8.5 0 0 1 22.5 11.5 A 8.5 8.5 0 0 1 20 8" />
        <path d="M 22.5 11.5 L 22.5 14" />
      </g>
    </svg>
  );
}

export function WhiteBishop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 25.89,36.43 32.61,35.03 36,36 C 32.61,37.03 25.89,35.57 22.5,38 19.11,35.57 12.39,37.03 9,36 z" />
        <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,13.5 22.5,8.5 C 11.5,13.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
        <path d="M 25 8 A 8.5 8.5 0 0 1 22.5 11.5 A 8.5 8.5 0 0 1 20 8" />
        <path d="M 22.5 11.5 L 22.5 14" />
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
          d="M 9,39 H 36 V 36 H 9 Z"
          strokeLinecap="butt"
        />
        <path d="M 12,36 V 12 H 33 V 36 Z" strokeLinecap="butt" />
        <path d="M 11,12 V 9 h 4 v 3 h 5 V 9 h 5 v 3 h 5 V 9 h 4 v 3" strokeLinecap="butt" />
        <path d="M 12,12 H 33" fill="none" />
      </g>
    </svg>
  );
}

export function WhiteRook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M 9,39 H 36 V 36 H 9 Z"
          strokeLinecap="butt"
        />
        <path d="M 12,36 V 12 H 33 V 36 Z" strokeLinecap="butt" />
        <path d="M 11,12 V 9 h 4 v 3 h 5 V 9 h 5 v 3 h 5 V 9 h 4 v 3" strokeLinecap="butt" />
        <path d="M 12,12 H 33" fill="none" />
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
        <path d="M 8 12 A 2 2 0 1 1 4 12 A 2 2 0 1 1 8 12 Z" />
        <path d="M 24.5 7.5 A 2 2 0 1 1 20.5 7.5 A 2 2 0 1 1 24.5 7.5 Z" />
        <path d="M 41 12 A 2 2 0 1 1 37 12 A 2 2 0 1 1 41 12 Z" />
        <path d="M 16 8.5 A 2 2 0 1 1 12 8.5 A 2 2 0 1 1 16 8.5 Z" />
        <path d="M 33 9 A 2 2 0 1 1 29 9 A 2 2 0 1 1 33 9 Z" />
        <path
          d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 25.89,36.43 32.61,35.03 36,36 C 32.61,37.03 25.89,35.57 22.5,38 19.11,35.57 12.39,37.03 9,36 z"
        />
        <path d="m 11,38 3,-19.5 5.5,13 L 22.5,19 25,31.5 30.5,18.5 34,38" fill="none"/>
      </g>
    </svg>
  );
}

export function WhiteQueen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 8 12 A 2 2 0 1 1 4 12 A 2 2 0 1 1 8 12 Z" />
        <path d="M 24.5 7.5 A 2 2 0 1 1 20.5 7.5 A 2 2 0 1 1 24.5 7.5 Z" />
        <path d="M 41 12 A 2 2 0 1 1 37 12 A 2 2 0 1 1 41 12 Z" />
        <path d="M 16 8.5 A 2 2 0 1 1 12 8.5 A 2 2 0 1 1 16 8.5 Z" />
        <path d="M 33 9 A 2 2 0 1 1 29 9 A 2 2 0 1 1 33 9 Z" />
        <path
          d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 25.89,36.43 32.61,35.03 36,36 C 32.61,37.03 25.89,35.57 22.5,38 19.11,35.57 12.39,37.03 9,36 z"
        />
        <path d="m 11,38 3,-19.5 5.5,13 L 22.5,19 25,31.5 30.5,18.5 34,38" fill="none"/>
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
        <path d="M 22.5 11.63 V 6 M 20 8 h 5" strokeLinecap="round" />
        <path d="M 22.5,25 C 17,25 12.5,30 12.5,30 C 12.5,30 12.5,30 12.5,30 M 22.5,25 C 28,25 32.5,30 32.5,30 C 32.5,30 32.5,30 32.5,30" strokeLinecap="butt" />
        <path
          d="M 12.5,37 C 12.5,37 10.5,35.5 10.5,34.5 10.5,33.5 12.5,32 12.5,32 l 20,0 C 32.5,32 34.5,33.5 34.5,34.5 34.5,35.5 32.5,37 32.5,37 l -20,0 z"
          strokeLinecap="butt"
        />
        <path
          d="M 22.5,25 C 28,25 32.5,30 32.5,30"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="M 12.5,30 C 12.5,30 18,25 22.5,25"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="m 11,29 c -0.5,4 3.5,8 3.5,8"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="m 34,29 c 0.5,4 -3.5,8 -3.5,8"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="M 22.5,15 C 19.5,15 15,16.5 15,20 C 15,23.5 19.5,25 22.5,25 C 25.5,25 30,23.5 30,20 C 30,16.5 25.5,15 22.5,15 Z"
        />
      </g>
    </svg>
  );
}

export function WhiteKing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 22.5 11.63 V 6 M 20 8 h 5" strokeLinecap="round" />
        <path d="M 22.5,25 C 17,25 12.5,30 12.5,30 C 12.5,30 12.5,30 12.5,30 M 22.5,25 C 28,25 32.5,30 32.5,30 C 32.5,30 32.5,30 32.5,30" strokeLinecap="butt" />
        <path
          d="M 12.5,37 C 12.5,37 10.5,35.5 10.5,34.5 10.5,33.5 12.5,32 12.5,32 l 20,0 C 32.5,32 34.5,33.5 34.5,34.5 34.5,35.5 32.5,37 32.5,37 l -20,0 z"
          strokeLinecap="butt"
        />
        <path
          d="M 22.5,25 C 28,25 32.5,30 32.5,30"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="M 12.5,30 C 12.5,30 18,25 22.5,25"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="m 11,29 c -0.5,4 3.5,8 3.5,8"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="m 34,29 c 0.5,4 -3.5,8 -3.5,8"
          fill="none"
          strokeLinejoin="miter"
        />
        <path
          d="M 22.5,15 C 19.5,15 15,16.5 15,20 C 15,23.5 19.5,25 22.5,25 C 25.5,25 30,23.5 30,20 C 30,16.5 25.5,15 22.5,15 Z"
        />
      </g>
    </svg>
  );
}
