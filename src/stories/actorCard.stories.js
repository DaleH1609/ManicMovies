import React from "react";
import ActorCard from "../components/actorCard";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/ActorCard",
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      movie={SampleActor}
      action={(actors) => <AddToFavoritesIcon actors={actors} />}
      taging={(actors) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, poster_path: undefined };
  return (
    <ActorCard
      movie={sampleNoPoster}
      action={(actors) => <AddToFavoritesIcon actors={actors} />}
      taging={(actors) => null}
    />
  );
};
Exceptional.storyName = "exception";
