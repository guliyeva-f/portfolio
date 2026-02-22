import Image from "next/image";
import Link from "next/link";
import MyGallery from "../components/homepage/myGallery";

const allProjects = [
  {
    id: 1,
    title: "Night Cinema",
    image: "/projects/cinema.png",
    link: "https://night-cinema.vercel.app/",
  },
  {
    id: 3,
    title: "Libraff",
    image: "/projects/libraff.png",
    link: "https://fatimas-libraff.vercel.app/",
  },
  {
    id: 4,
    title: "ATB",
    image: "/projects/atb.png",
    link: "https://task-atb-by-guliyeva.vercel.app/",
  },
  {
    id: 5,
    title: "GIF Finder",
    image: "/projects/flower.png",
    link: "https://gif-finder-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "ToDo List",
    image: "/projects/todolist.png",
    link: "https://todo-app-fq.vercel.app/",
  },
  {
    id: 7,
    title: "Colorlib Foody",
    image: "/projects/colorlib.png",
    link: "https://foody-colorlib.vercel.app/",
  },
  {
    id: 6,
    title: "Turbo Az",
    image: "/projects/turbo.png",
    link: "https://turbo-az-task.vercel.app/",
  },
  {
    id: 8,
    title: "Country App",
    image: "/projects/country.png",
    link: "https://fatimas-country-app.vercel.app/",
  },
  {
    id: 9,
    title: "Basket",
    image: "/projects/basket.png",
    link: "https://basket-filter.vercel.app/",
  },
  {
    id: 10,
    title: "ToDo",
    image: "/projects/todo.png",
    link: "https://to-do-list-six-self-50.vercel.app/",
  },
  {
    id: 11,
    title: "StopWatch",
    image: "/projects/watch.png",
    link: "https://stop-watch-eight-umber.vercel.app/",
  },
  {
    id: 12,
    title: "Counter",
    image: "/projects/counter.png",
    link: "https://my-first-vite-project.vercel.app/",
  },
];

export const metadata = {
  title: "Projects | Fatima Guliyeva Frontend Developer",
  description:
    "Frontend projects by Fatima Guliyeva built with React, Next.js and Tailwind CSS.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl font-bold text-white text-center">
          All <span className="text-pink-500">Projects</span>
        </h1>
        <div className="mt-4 w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </div>
       <MyGallery />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-6">
        {allProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur 
            hover:border-pink-500/40 hover:scale-[1.02] aspect-3/2 transition-all duration-300"
          >
            <div className="relative w-full aspect-5/3 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">
              {project.title}
            </h2>
            <div className="flex justify-end"><Link
              href={project.link}
              target="_blank"
              className="inline-block mt-3 px-4 py-2 text-sm font-medium rounded-lg
              bg-linear-to-r from-purple-500 to-pink-500 text-white transition">
              View Project
            </Link></div>
          </div>
        ))}
      </div>
    </div>
  );
}