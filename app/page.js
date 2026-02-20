import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// export const metadata = {
//   title: "Fatima Guliyeva | Frontend Developer Portfolio",
//   description:
//     "Portfolio of Fatima Guliyeva, a Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web applications.",
//   keywords: [
//     "Fatima Guliyeva",
//     "Fatima Guliyeva portfolio",
//     "Fatima frontend developer",
//     "frontend developer",
//     "react developer",
//     "nextjs developer",
//     "web developer portfolio",
//     "fatima guliyeva frontend",
//   ],
//   authors: [{ name: "Fatima Guliyeva" }],
//   creator: "Fatima Guliyeva",
//   applicationName: "Fatima Guliyeva Portfolio",
//   openGraph: {
//     title: "Fatima Guliyeva — Frontend Developer",
//     description:
//       "Explore projects, skills, and experience of Frontend Developer Fatima Guliyeva.",
//     url: "https://guliyeva-f-portfolio.vercel.app",
//     siteName: "Fatima Guliyeva Portfolio",
//     type: "website",
//   },
// };

export default async function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <div className="flex justify-center -translate-y-px">
        <div className="w-3/4">
          <div className="h-px bg-linear-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <div className="flex justify-center -translate-y-px">
        <div className="w-3/4">
          <div className="h-px bg-linear-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <ContactSection />
    </div>
  )
};