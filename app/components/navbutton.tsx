'use client';

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function NavButton({ to, text, classes }: { to: string, text: string, classes: string }) {
  return (
      <Link to={to} spy={true} smooth={"easeInOutCubic"} duration={200}>
        <button className={classes}>{text}</button>
      </Link>
  );
}
