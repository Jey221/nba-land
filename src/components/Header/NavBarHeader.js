import React from 'react';

export default function NavBarHeader() {
  return <div>NavBarHeader</div>;
}

/* 
import "./styles.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Menu } from "./Menu";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <Menu />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
}

*/

/* 
const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--background)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: any) => (
  <button onClick={toggle}>
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

*/

/* 
export function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}

*/

/* 
body {
  --black: #000000;
  --ash-black: #222;
  --white: #fafafa;
  --sky: #00ccff;
  --green: #22dddd;
  --blue: #1300ff;
  --dusk: #6600ff;
  --purple: #9900ff;
  --pink: #ff0066;
  --red: #fe0222;
  --orange: #fd7702;
  --yellow: #ffbb00;

  --background: var(--white);
  --accent: var(--pink);

  margin: 0;
  padding: 0;
  background-color: var(--background);
  color: var(--accent);
  padding-bottom: 100px;
  overflow: hidden;
  min-height: 100vh;
}

#root {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  font-family: sofia-pro, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3 {
  font-family: sofia-pro, sans-serif;
  font-weight: 600;
  font-style: normal;
}

h1 {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;
  text-align: center;
  margin: 100px 0 40px;
}

h2 {
  font-weight: 400;
  margin: 50px 0 10px;
}

p {
  margin: 0 0 30px 0;
  font-size: 18px;
}

code {
  font-family: input-mono, monospace;
  font-weight: 400;
  font-style: normal;
}

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  background: var(--background);
  -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-corner {
  background: #fff3;
}

.refresh {
  padding: 5px;
  position: absolute;
  border: 1px dotted var(--accent);
  border-radius: 5px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.refresh path {
  fill: var(--accent);
}

.box {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--accent);
  margin: 0;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  background: var(--accent);
  padding-top: 100px;
  transform: translateX(-100%);
  will-change: transform;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
}

li {
  color: var(--background);
  display: block;
  transform-origin: -20px 50%;
  font-weight: bold;
  font-size: 48px;
  padding: 10px;
  will-change: transform, opacity, filter;
}

ul,
li {
  list-style: none;
  margin: 0;
}

button {
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent);
  padding: 10px;
}

button path {
  fill: var(--background);
}

input {
  accent-color: var(--accent);
}

.controls {
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-bottom: 50px;
  align-items: center;
}

label {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

input[type="number"] {
  border: 0;
  border-bottom: 1px dotted var(--accent);
  color: var(--accent);
  margin-left: 10px;
  background: var(--background);
  width: 50px;
}

input[type="number"]:focus {
  outline: none;
  border-bottom: 2px solid var(--accent);
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.example {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.item {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: var(--accent);
  color: var(--background);
  font-size: 240px;
  line-height: 260px;
  font-weight: 700;
  border-radius: 30px;
}

*/
