import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom"

export default function HomePage() {
  const data = useLoaderData();

  return (
    <main className="h-screen w-screen bg-gray-50">
      <div className="flex gap-4 flex-wrap p-4">
        {data.map(({ show }) => (
          <Link 
            to={`show/${show.id}`}
            title={show.name} 
            key={show.id} 
            className="flex flex-col p-2 bg-gray-200 transition-all duration-300 shadow-gray-400 shadow hover:shadow-lg hover:shadow-gray-500 rounded cursor-pointer">
            <div className="h-[295px] w-[210px]">
              <img
                src={show.image?.medium ?? "https://placehold.co/210x295"}
                alt={show.name}
                className="object-cover rounded shadow shadow-gray-400"
              />
            </div>
            <div className="flex p-1 items-center">
            <h2 className="font-semibold">{show.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
