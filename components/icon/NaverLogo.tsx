import { SVGProps } from "react";

const NaverLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 32v448h172.366V255.862L331.358 480H504V32H331.358v223.862L181.366 32H9Z" fill="#fff" />
  </svg>
);

export default NaverLogo;
