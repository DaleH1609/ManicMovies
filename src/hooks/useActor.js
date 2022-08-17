import { useEffect, useState } from "react";
import {getActorBio} from '../api/tmdb-api'

const useActor = id => {
  const [actors, setActor] = useState(null);
  useEffect(() => {
    getActorBio(id).then(movie => {
      setActor(actors);
    });
  }, [id]);
  return [actors, setActor];
};

export default useActor