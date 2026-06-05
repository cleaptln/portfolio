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
  SiFilament,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobedreamweaver,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
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
  { node: <SiFilament />, title: "Filament", href: "https://filamentphp.com/" },
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
  {
    node: <SiAdobepremierepro />,
    title: "Premiere Pro",
    href: "https://www.adobe.com/products/premiere.html",
  },
  {
    node: <SiAdobedreamweaver />,
    title: "Dreamweaver",
    href: "https://www.adobe.com/products/dreamweaver.html",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/fr/docs/Web/HTML",
  },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org/" },
];

function LogosLoopSection() {
  return (
    <div
      style={{
        height: "150px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
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
