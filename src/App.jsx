import { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import NavBar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  // const navRef = useRef(null);

  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#selection-web") {
      setTimeout(() => {
        const el = document.querySelector("#selection-web");
        if (el) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: el, offsetY: 0 },
            ease: "power3.inOut",
          });
        }
      }, 500);
    }
  }, [location]);

  // useGSAP(() => {
  //   // État initial : caché en bas (yPercent: 100) et transparent
  //   gsap.set(navRef.current, { yPercent: 100, autoAlpha: 0 });

  //   gsap.to(navRef.current, {
  //     yPercent: 0,
  //     autoAlpha: 1,
  //     duration: 0.4,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: document.body,
  //       start: "top -50",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // }, []);

  return (
    <div className="relative w-full bg-background">
      {/* <div
          ref={navRef}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 origin-bottom"
        >
          <NavBar/>
        </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:slug" element={<ProjectPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </div>
  );
}

export default App;
