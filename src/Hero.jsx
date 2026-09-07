// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import "./Hero.css";

// gsap.registerPlugin(useGSAP);

// const images = [
//   {
//     src: "/favicon.svg",
//     className: "float-img img-1",
//   },
//   {
//     src: "/favicon.svg",
//     className: "float-img img-2",
//   },
//   {
//     src: "/favicon.svg",
//     className: "float-img img-3",
//   },
//   {
//     src: "/favicon.svg",
//     className: "float-img img-4",
//   },
//   {
//     src: "/favicon.svg",
//     className: "float-img img-5",
//   },
//   {
//     src: "/favicon.svg",
//     className: "float-img img-6",
//   },
// ];

// export default function Hero() {
//   const heroRef = useRef(null);

//   useGSAP(
//     () => {
//       const floatingImages = gsap.utils.toArray(".float-img");

//       // Continuous floating motion
//       floatingImages.forEach((image, index) => {
//         gsap.to(image, {
//           y: index % 2 === 0 ? -25 : 25,
//           rotation: index % 2 === 0 ? 4 : -4,
//           duration: 3 + index * 0.5,
//           ease: "sine.inOut",
//           repeat: -1,
//           yoyo: true,
//           delay: index * 0.3,
//         });
//       });

//       // Mouse parallax
//       const handleMouseMove = (event) => {
//         const x = event.clientX / window.innerWidth - 0.5;

//         const y = event.clientY / window.innerHeight - 0.5;

//         floatingImages.forEach((image, index) => {
//           const strength = (index + 1) * 12;

//           gsap.to(image, {
//             x: x * strength,
//             y: y * strength,
//             duration: 1,
//             ease: "power3.out",
//             overwrite: "auto",
//           });
//         });
//       };

//       window.addEventListener("mousemove", handleMouseMove);

//       return () => {
//         window.removeEventListener("mousemove", handleMouseMove);
//       };
//     },
//     { scope: heroRef },
//   );

//   return (
//     <section ref={heroRef} className="hero">
//       <div className="hero-content">
//         <p className="eyebrow">ATLANTIC RECORDS</p>

//         <h1>
//           MUSIC
//           <br />
//           FOR EVERYONE
//         </h1>

//         <p className="description">
//           Discover artists, albums and sounds that move culture forward.  lore
//         </p>

//         <button>EXPLORE MUSIC</button>
//       </div>

//       {images.map((image, index) => (
//         <img key={index} src={image.src} alt="" className={image.className} />
//       ))}
//     </section>
//   );
// }
