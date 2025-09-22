
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
      >
        <path d="M22.5 36c3.9-1.4 5.5-4.4 5.5-10.5 0-4.5-1.5-8.5-5.5-10.5-4 2-5.5 6-5.5 10.5 0 6.1 1.6 9.1 5.5 10.5z" />
        <path d="M22.5 12.5c-3.12 2.5-4.5 6-4.5 9.5 0 4.5 1.38 7 4.5 9.5 3.12-2.5 4.5-5 4.5-9.5 0-3.5-1.38-7-4.5-9.5z" stroke="none" />
        <path d="M22.5 15c0 4.5 1.5 8.5 5.5 10.5" fill="none" />
        <path d="M22.5 15c-4 2-5.5 6-5.5 10.5" fill="none" />
        <path d="M22.5 36c-3.9-1.4-5.5-4.4-5.5-10.5" fill="none" />
        <path d="M12 39.5h21" fill="none" strokeLinejoin="round" />
        <path d="M22.5 12.5c-3.12 2.5-4.5 6-4.5 9.5" fill="none" />
        <path d="M22.5 12.5c3.12 2.5 4.5 6 4.5 9.5" fill="none" />
        <path d="M30 36.5c-2.33 1-4.66 1-7.5 0-2.84-1-5.17-1-7.5 0" fill="none" strokeLinejoin="round" />
        <path d="M30 39.5c-2.33 1-4.66 1-7.5 0-2.84-1-5.17-1-7.5 0" fill="none" strokeLinejoin="round" />
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
      >
        <path d="M22.5 36c3.9-1.4 5.5-4.4 5.5-10.5 0-4.5-1.5-8.5-5.5-10.5-4 2-5.5 6-5.5 10.5 0 6.1 1.6 9.1 5.5 10.5z" />
        <path d="M22.5 12.5c-3.12 2.5-4.5 6-4.5 9.5 0 4.5 1.38 7 4.5 9.5 3.12-2.5 4.5-5 4.5-9.5 0-3.5-1.38-7-4.5-9.5z" stroke="none" fill="#fff" />
        <path d="M22.5 15c0 4.5 1.5 8.5 5.5 10.5" fill="none" />
        <path d="M22.5 15c-4 2-5.5 6-5.5 10.5" fill="none" />
        <path d="M22.5 36c-3.9-1.4-5.5-4.4-5.5-10.5" fill="none" />
        <path d="M12 39.5h21" fill="none" strokeLinejoin="round" />
        <path d="M22.5 12.5c-3.12 2.5-4.5 6-4.5 9.5" fill="none" />
        <path d="M22.5 12.5c3.12 2.5 4.5 6 4.5 9.5" fill="none" />
        <path d="M30 36.5c-2.33 1-4.66 1-7.5 0-2.84-1-5.17-1-7.5 0" fill="none" strokeLinejoin="round" />
        <path d="M30 39.5c-2.33 1-4.66 1-7.5 0-2.84-1-5.17-1-7.5 0" fill="none" strokeLinejoin="round" />
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
        <path d="M 9,39 H 36 V 36 H 9 Z" />
        <path d="m 12.5,32 1.5,-11.5 17,0 1.5,11.5" />
        <path d="M 12,36 V 32 h 21 v 4" />
        <path d="M 14,20.5 V 14 l 5.5,0 V 9 h 6 v 5 l 5.5,0 v 6.5" />
        <path d="M 14,14 h 17" />
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
        <path d="M 9,39 H 36 V 36 H 9 Z" />
        <path d="m 12.5,32 1.5,-11.5 17,0 1.5,11.5" />
        <path d="M 12,36 V 32 h 21 v 4" />
        <path d="M 14,20.5 V 14 l 5.5,0 V 9 h 6 v 5 l 5.5,0 v 6.5" />
        <path d="M 14,14 h 17" />
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
        <path d="M 8,12 A 2,2 0 1,1 4,12 A 2,2 0 1,1 8,12 z" />
        <path d="M 24.5,7.5 A 2,2 0 1,1 20.5,7.5 A 2,2 0 1,1 24.5,7.5 z" />
        <path d="M 41,12 A 2,2 0 1,1 37,12 A 2,2 0 1,1 41,12 z" />
        <path d="M 16,8.5 A 2,2 0 1,1 12,8.5 A 2,2 0 1,1 16,8.5 z" />
        <path d="M 33,9 A 2,2 0 1,1 29,9 A 2,2 0 1,1 33,9 z" />
        <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z" />
        <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 32.61,37.03 25.89,35.57 22.5,38 C 19.11,35.57 12.39,37.03 9,36 z" />
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
        <path d="M 8,12 A 2,2 0 1,1 4,12 A 2,2 0 1,1 8,12 z" />
        <path d="M 24.5,7.5 A 2,2 0 1,1 20.5,7.5 A 2,2 0 1,1 24.5,7.5 z" />
        <path d="M 41,12 A 2,2 0 1,1 37,12 A 2,2 0 1,1 41,12 z" />
        <path d="M 16,8.5 A 2,2 0 1,1 12,8.5 A 2,2 0 1,1 16,8.5 z" />
        <path d="M 33,9 A 2,2 0 1,1 29,9 A 2,2 0 1,1 33,9 z" />
        <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z" />
        <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 32.61,37.03 25.89,35.57 22.5,38 C 19.11,35.57 12.39,37.03 9,36 z" />
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
        <path d="m 22.5,11.63 0,-5.63 2.5,2.5 -2.5,-2.5 -2.5,2.5" />
        <path d="M 22.5,25 C 28,25 32.5,30 32.5,30 C 32.5,30 32.5,30 32.5,30 M 22.5,25 C 17,25 12.5,30 12.5,30 C 12.5,30 12.5,30 12.5,30" strokeLinecap="butt" />
        <path d="M 12.5,37 C 12.5,37 10.5,35.5 10.5,34.5 10.5,33.5 12.5,32 12.5,32 l 20,0 C 32.5,32 34.5,33.5 34.5,34.5 34.5,35.5 32.5,37 32.5,37 l -20,0 z" strokeLinecap="butt" />
        <path d="M 22.5,25 C 28,25 32.5,30 32.5,30" fill="none" strokeLinejoin="miter" />
        <path d="M 12.5,30 C 12.5,30 18,25 22.5,25" fill="none" strokeLinejoin="miter" />
        <path d="m 11,29 c -0.5,4 3.5,8 3.5,8" fill="none" strokeLinejoin="miter" />
        <path d="m 34,29 c 0.5,4 -3.5,8 -3.5,8" fill="none" strokeLinejoin="miter" />
        <path d="M 22.5,11.63 C 26.5,14.5 29,18 29,20 C 29,23.5 25.5,25 22.5,25 C 19.5,25 16,23.5 16,20 C 16,18 18.5,14.5 22.5,11.63 Z" />
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
        <path d="m 22.5,11.63 0,-5.63 2.5,2.5 -2.5,-2.5 -2.5,2.5" />
        <path d="M 22.5,25 C 28,25 32.5,30 32.5,30 C 32.5,30 32.5,30 32.5,30 M 22.5,25 C 17,25 12.5,30 12.5,30 C 12.5,30 12.5,30 12.5,30" strokeLinecap="butt" />
        <path d="M 12.5,37 C 12.5,37 10.5,35.5 10.5,34.5 10.5,33.5 12.5,32 12.5,32 l 20,0 C 32.5,32 34.5,33.5 34.5,34.5 34.5,35.5 32.5,37 32.5,37 l -20,0 z" strokeLinecap="butt" />
        <path d="M 22.5,25 C 28,25 32.5,30 32.5,30" fill="none" strokeLinejoin="miter" />
        <path d="M 12.5,30 C 12.5,30 18,25 22.5,25" fill="none" strokeLinejoin="miter" />
        <path d="m 11,29 c -0.5,4 3.5,8 3.5,8" fill="none" strokeLinejoin="miter" />
        <path d="m 34,29 c 0.5,4 -3.5,8 -3.5,8" fill="none" strokeLinejoin="miter" />
        <path d="M 22.5,11.63 C 26.5,14.5 29,18 29,20 C 29,23.5 25.5,25 22.5,25 C 19.5,25 16,23.5 16,20 C 16,18 18.5,14.5 22.5,11.63 Z" />
      </g>
    </svg>
  );
}

    