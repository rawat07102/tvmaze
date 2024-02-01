import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/HomePage"
import axios from "axios";
import ShowDetailsPage from "../features/showDetails/ShowDetailsPage";

async function loadShows() {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
  return res.data;
}

async function loadShowDetails({ params }) {
  const { showId } = params;
  const res = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
  return res.data;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: loadShows,
  },
  {
    path: "show/:showId",
    element: <ShowDetailsPage />,
    loader: loadShowDetails,
  },
]);
