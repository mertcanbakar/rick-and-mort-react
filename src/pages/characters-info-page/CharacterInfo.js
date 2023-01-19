import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loading from "../key-components/Loading";


const CHARACTERS_INFO = gql`
  query Query($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      image
      name
      species
      status
      gender
      episode {
        name
      }
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;

function CharacterInfo() {
  const { name } = useParams();
  console.log(name);

  const { loading, error, data } = useQuery(CHARACTERS_INFO, {
    variables: { ids: [name] },
  });
  if (loading) return <Loading/>;
  if (error) return <p>Error :{error.message}</p>;

  return data.charactersByIds.map(
    ({ name, image, gender, species, status, episode, location, origin }) => (
      <>
      <div className="block my-[10%] mx-auto text-white max-w-[90%] bg-zinc-900 p-16 rounded-3xl bg-opacity-90 shadow-lg shadow-green-500/50">
        <div className="flex ">
          <img
            className="rounded-xl shadow-lg shadow-green-500/50 border-2 border-green-500/50 mb-5 object-cover"
            src={image}
            alt={name}
          />
          <span className="flex flex-col justify-center items-center text-3xl  p-[50px] mx-auto">
            <p className="text-green-600">{name}</p>
            <p>{species}</p>
            <p>{status}</p>
            <p>{gender}</p>
          </span>
        </div>
        <span className="flex flex-col py-10 text-2xl ">
          <p className="text-green-400">Location: </p>
          <p className="my-6">{location.name}</p>
          <p className="text-green-400 ">Origin: </p>
          <p className="my-6">{origin.name}</p>
          <p className="text-green-400 text-3xl">Episode:</p>
          <p className="my-6">
             {episode.map((ep) => ep.name).join(", ")}
          </p>
        </span>
      </div>
      </>
    )
  );
  
}

export default CharacterInfo;
