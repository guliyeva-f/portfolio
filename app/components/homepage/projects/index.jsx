import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-20 h-20 bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-0.5 bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky" >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex justify-center -bottom-10">
          <a href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex overflow-hidden rounded-full p-0.5 focus:outline-none"
          ><span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-linear-to-r from-pink-600 via-purple-600 to-blue-600"
          ></span><span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-950/90"
          ><svg stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none" className="mr-2 h-5 w-5 text-pink-500 transition-transform duration-300 group-hover:-translate-x-1" >
                <path
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="relative bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-white/50 font-semibold"
              >Show More
              </span><svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2 h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1"
              ><path
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;