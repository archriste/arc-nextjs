'use client';

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function NavButton({ to, text, classes }: { to: string, text: string, classes: string }) {
  return (
      <Link to={to} spy={true} smooth={"easeInOutCubic"} duration={1000}>
        <button className={`flex h-full items-center justify-center px-4 sm:px-8 text-white transition duration-200 ${classes}`}>{text}</button>
      </Link>
  );
}
