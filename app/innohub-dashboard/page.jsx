import MyGallery from "../components/homepage/myGallery";

// export const metadata = {
//   title: "Fatima`s All Projects",
// };

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl font-bold text-white text-center">
          InnoHub <span className="text-pink-500">Dashboard</span>
        </h1>
        <div className="mt-4 w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </div>
       <MyGallery />
    </div>
  );
}