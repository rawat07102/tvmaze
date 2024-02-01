import { TextField } from "./TextField";

export default function BookTicketModal({ name, open, close }) {
  if (!open) {
    return null;
  }

  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-screen h-screen bg-opacity-50 bg-black">
      <form className="flex flex-col bg-black p-8 rounded gap-4 w-[400px]">
        <TextField label="Name" name="movie-name" value={name} />
        <TextField
          label="Number of Tickets"
          name="ticket-count"
          type="number"
          defaultValue={1}
          min={1}
          max={5}
        />
        <div className="flex justify-between items-center">
          <button
            className="p-2 rounded bg-yellow-500 font-bold hover:bg-yellow-400 hover:shadow-md hover:shadow-yellow-900 transition-all duration-200"
            onClick={close}
            type="submit"
          >
            CONFIRM BOOKING
          </button>
          <button
            className="p-2 rounded text-red-500 hover:underline"
            onClick={close}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
