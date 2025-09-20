// Chess piece SVGs adapted from Cburnett's set, licensed under CC BY-SA 3.0.
// https://en.wikipedia.org/wiki/User:Cburnett

import type { SVGProps } from "react";

export function BlackPawn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#000" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C30.06 24.84 31 23.03 31 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" />
      </g>
    </svg>
  );
}

export function WhitePawn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#FFF" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47C30.06 24.84 31 23.03 31 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" />
      </g>
    </svg>
  );
}

export function BlackKnight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#000" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10c1.333-2.667 3.333-4.667 6-6 1.143 1.9 2.286 3.8 3.429 5.7-.571.3-1.143.6-1.714.9-1.905.6-3.81 1.2-5.714 1.8-2.857.9-5.714 1.8-8.571 2.7-.857.3-1.714.6-2.571.9-.286 2.2-1.143 4.4-2.571 6.6-1.429 1.8-2.857 3.6-4.286 5.4.571-.9 1.143-1.8 1.714-2.7.952-1.8 1.905-3.6 2.857-5.4s1.905-3.6 2.857-5.4c.952-1.8 1.905-3.6 2.857-5.4.952-1.8 1.905-3.6 2.857-5.4 1.905-3.6 3.81-7.2 5.714-10.8.286.9.571 1.8.857 2.7.286.9.571 1.8.857 2.7-.286 1.2-.571 2.4-.857 3.6-.286 1.2-.571 2.4-.857 3.6-2.857 0-5.714 0-8.571 0-2.857 0-5.714 0-8.571 0 .571-1.2 1.143-2.4 1.714-3.6.571-1.2 1.143-2.4 1.714-3.6z" transform="translate(1 2)" />
        <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1-2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
        <path d="M22 10c-3 2-4 5-4 8l-2 11h20l-2-11c0-3-1-6-4-8-2-1-4-1-4-1s-2 0-4 1z" />
        <path d="M12 32h21v4H12z" />
      </g>
    </svg>
  );
}

export function WhiteKnight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#FFF" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10c1.333-2.667 3.333-4.667 6-6 1.143 1.9 2.286 3.8 3.429 5.7-.571.3-1.143.6-1.714.9-1.905.6-3.81 1.2-5.714 1.8-2.857.9-5.714 1.8-8.571 2.7-.857.3-1.714.6-2.571.9-.286 2.2-1.143 4.4-2.571 6.6-1.429 1.8-2.857 3.6-4.286 5.4.571-.9 1.143-1.8 1.714-2.7.952-1.8 1.905-3.6 2.857-5.4s1.905-3.6 2.857-5.4c.952-1.8 1.905-3.6 2.857-5.4.952-1.8 1.905-3.6 2.857-5.4 1.905-3.6 3.81-7.2 5.714-10.8.286.9.571 1.8.857 2.7.286.9.571 1.8.857 2.7-.286 1.2-.571 2.4-.857 3.6-.286 1.2-.571 2.4-.857 3.6-2.857 0-5.714 0-8.571 0-2.857 0-5.714 0-8.571 0 .571-1.2 1.143-2.4 1.714-3.6.571-1.2 1.143-2.4 1.714-3.6z" transform="translate(1 2)" />
        <path d="M22 10c-3 2-4 5-4 8l-2 11h20l-2-11c0-3-1-6-4-8-2-1-4-1-4-1s-2 0-4 1z" />
        <path d="M12 32h21v4H12z" />
      </g>
    </svg>
  );
}

export function BlackBishop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g fill="#000" strokeLinecap="butt">
          <path d="M9 36h27v-2H9v2zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 28.5l2.5-3h15.5l2.5 3h-20.5z" />
          <path d="M14.5 24.5l1-1.5h14l1 1.5h-16z" />
          <path d="M22.5 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
          <path d="M15 14h15v9H15z" />
        </g>
        <path d="M25 8.5s-1.5-1.5-2.5-1.5-2.5 1.5-2.5 1.5" strokeLinecap="butt" />
        <path d="M17.5 26h10" fill="none" stroke="#000" strokeLinejoin="miter" />
        <path d="M15 14h15v9H15z" fill="#000" />
        <path d="M22.5 5.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" fill="#000" />
        <path d="M20 18h5" stroke="#000" strokeLinecap="butt" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function WhiteBishop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g fill="#FFF" strokeLinecap="butt">
          <path d="M9 36h27v-2H9v2zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 28.5l2.5-3h15.5l2.5 3h-20.5z" />
          <path d="M14.5 24.5l1-1.5h14l1 1.5h-16z" />
          <path d="M22.5 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
          <path d="M15 14h15v9H15z" />
        </g>
        <path d="M25 8.5s-1.5-1.5-2.5-1.5-2.5 1.5-2.5 1.5" strokeLinecap="butt" />
        <path d="M17.5 26h10" fill="none" stroke="#FFF" strokeLinejoin="miter" />
        <path d="M20 18h5" stroke="#000" strokeLinecap="butt" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function BlackRook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#000" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 36h27v-2H9v2zM12 32V14h21v18z" />
        <path d="M12 14h21M12 32h21" />
        <path d="M12 14l3-4h15l3 4z" />
        <path d="M12 10h21" />
        <path d="M15 10V7h3v3zM22.5 10V7h3v3zM30 10V7h3v3z" />
      </g>
    </svg>
  );
}

export function WhiteRook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#FFF" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 36h27v-2H9v2zM12 32V14h21v18z" strokeLinecap="butt" />
        <path d="M12 14h21M12 32h21" strokeLinecap="butt" />
        <path d="M12 14l3-4h15l3 4z" strokeLinecap="butt" />
        <path d="M12 10h21" strokeLinecap="butt" />
        <path d="M15 10V7h3v3zM22.5 10V7h3v3zM30 10V7h3v3z" strokeLinecap="butt" />
      </g>
    </svg>
  );
}

export function BlackQueen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#000" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        <path d="M8 12s2 2 8.5 2 8.5-2 8.5-2" />
        <path d="M8 12l2 12h20l2-12" />
        <path d="M11.5 31.5l19-19" />
        <path d="M30.5 31.5l-19-19" />
        <path d="M8 32h30v4H8z" />
      </g>
    </svg>
  );
}

export function WhiteQueen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#FFF" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        <path d="M8 12s2 2 8.5 2 8.5-2 8.5-2" />
        <path d="M8 12l2 12h20l2-12" />
        <path d="M11.5 31.5l19-19" />
        <path d="M30.5 31.5l-19-19" />
        <path d="M8 32h30v4H8z" />
      </g>
    </svg>
  );
}

export function BlackKing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#000" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.5 11.63V6M20 8h5" />
        <path d="M22.5 25c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12.5 37l4.5-10.5 5.5 10.5h-10zm20 0l-4.5-10.5-5.5 10.5h10z" />
        <path d="M12.5 37h20v-4h-20v4z" />
        <path d="M12.5 37a4.5 4.5 0 0 1-3-4.5v-2" />
        <path d="M32.5 37a4.5 4.5 0 0 0 3-4.5v-2" />
      </g>
    </svg>
  );
}

export function WhiteKing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" {...props}>
      <g fill="#FFF" fillRule="evenodd" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.5 11.63V6M20 8h5" />
        <path d="M22.5 25c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12.5 37l4.5-10.5 5.5 10.5h-10zm20 0l-4.5-10.5-5.5 10.5h10z" />
        <path d="M12.5 37h20v-4h-20v4z" />
        <path d="M12.5 37a4.5 4.5 0 0 1-3-4.5v-2" />
        <path d="M32.5 37a4.5 4.5 0 0 0 3-4.5v-2" />
      </g>
    </svg>
  );
}
