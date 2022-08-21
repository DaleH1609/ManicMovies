import React from "react";
import ActorHeader from "../components/headerActor";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Actor Details Page/ActorHeader",
  component: ActorHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <ActorHeader actors={SampleActor} />;

Basic.storyName = "Default";
