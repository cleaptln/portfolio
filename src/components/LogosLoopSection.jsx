import LogoLoop from "./ReactBits/LogoLoop";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiGreensock,
  SiFigma,
  SiWordpress,
  SiMysql,
  SiLaravel,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiCss3,
  SiHtml5
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  { node: <SiGreensock />, title: "GSAP", href: "https://greensock.com/gsap/" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com/" },
  { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com/" },
  {
    node: <SiAdobephotoshop />,
    title: "Photoshop",
    href: "https://www.adobe.com/products/photoshop.html",
  },
  {
    node: <SiAdobeillustrator />,
    title: "Illustrator",
    href: "https://www.adobe.com/products/illustrator.html",
  },
  {
    node: <SiAdobeaftereffects />,
    title: "After Effects",
    href: "https://www.adobe.com/products/aftereffects.html",
  },
    {node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/fr/docs/Web/CSS" },
    {node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/fr/docs/Web/HTML" },   
];

function LogosLoopSection() {
  return (
    <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOut
        useCustomRender={false}
      />
    </div>
  );
}

export default LogosLoopSection;
