import React from "react";
import { useLoaderData } from "react-router-dom";
import BookTicketModal from "./BookTicketModal";

export default function ShowDetailsPage() {
  const show = useLoaderData();
  const [open, setOpen] = React.useState(false);

  return (
    <main className="bg-gray-50 h-screen w-screen relative">
      <div className="w-full h-full overflow-hidden relative">
        <div className="flex gap-8 flex-col items-center w-full h-full bg-black bg-opacity-90 p-8 absolute top-0 left-0">
          <div className="flex flex-col gap-4 text-gray-100">
            <h1 className="font-semibold inline text-6xl text-yellow-500">
              {show.name}
            </h1>
            <span
              className="text-lg summary"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            ></span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="p-2 hover:bg-yellow-400 bg-yellow-500 font-bold uppercase text-lg rounded transition-all duration-300 hover:shadow-lg hover:shadow-yellow-950"
          >
            Book Ticket
          </button>
        </div>
        <img
          alt={show.name}
          title={show.name}
          className="h-full w-full object-cover object-center"
          src={show.image?.original}
        />
      </div>
      {open && (
        <BookTicketModal
          open={open}
          close={() => setOpen(false)}
          showName={show.name}
        />
      )}
    </main>
  );
}
