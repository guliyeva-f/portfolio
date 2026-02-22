import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export const metadata = {
  title:
    "Fatima Guliyeva | Frontend Developer Portfolio | Fatimə Quliyeva",

  description:
    "Fatima Guliyeva is a Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web applications. Bu səhifə Fatimə Quliyevanın frontend layihələri, bacarıqları və peşəkar təcrübəsini təqdim edir.",

  keywords: [
    "Fatima Guliyeva",
    "Fatimə Quliyeva",
    "Fatima Guliyeva portfolio",
    "frontend developer",
    "react developer",
    "nextjs developer",
    "Azerbaijan frontend developer",
  ],
};

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