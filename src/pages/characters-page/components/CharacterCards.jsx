import React, { useState } from "react";
//Apollo
import { useQuery, gql } from "@apollo/client";
//Router
import { Link } from "react-router-dom";
import Loading from "../../key-components/Loading";

const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
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
        id
      }
    }
  }
`;
function CharacterCards() {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY);

  if (loading) return <Loading/>;
  if (error) return <p>Error :{error.message}</p>;
  return data.characters.results.map(({ image, name, status, id }) => (
    <div
      className="max-w-[10/100] bg-zinc-800 my-5 mx-10 rounded-xl transition-all bg-opacity-40 hover:bg-opacity-90"
      key={name}
      props={id}
    >
      <ul>
        <li className="flex justify-left items-center p-10">
          <img
            className="flex rounded-full w-28 border-2 border-green-400 px-[20]"
            src={image}
            alt='#'
          />
          <span className="block text-green-500 text-2xl py-6 px-5">
            <p>Name: {name}</p>
            <p className="mb-6">Status: {status}</p>
            <Link className="text-base bg-green-600 bg-opacity-30 p-3 rounded-xl transition-all text-white hover:text-lg" to={`/character/${id}`}>
              See more info...
            </Link>
          </span>
        </li>
      </ul>
    </div>
  ));
}
export default CharacterCards;
