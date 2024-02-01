import { useLoaderData } from "react-router-dom";

export default function ShowDetailsPage() {
  const show = useLoaderData();

  return (
    <main className="bg-gray-50 h-screen w-screen">
      <div className="w-full h-full overflow-hidden relative">
        <div className="w-full h-full bg-black bg-opacity-85 p-8 absolute top-0 left-0">
          <h1 className="font-semibold text-7xl text-gray-50">
            {show.name}
          </h1>
          <p className="text-gray-100">
            {show.summary}
          </p>
        </div>
        <img
          alt={show.name}
          title={show.name}
          className="object-cover object-center"
          src={show.image?.original}
        />
      </div>
    </main>
  );
}
