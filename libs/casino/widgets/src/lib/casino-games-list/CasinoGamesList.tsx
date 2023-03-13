import React from 'react';
import fetch from 'node-fetch';

import { suspensePromise, type JSONValue } from '@sw2.0/core';

import styles from './CasinoGamesList.module.scss';

type Game = {
  name: string;
  image: string;
};

type GamesJson = JSONValue & {
  games: [Game];
};

//Example from: https://www.codementor.io/@nairage/react-18-suspense-fetch-data-from-a-headless-cms-1wh1armfwa
const fetchGames = () => {
  const data = fetch('http://localhost:4200/games').then(async (res) => {
    try {
      return await res.json();
    } catch (err) {
      return [];
    }
  }) as Promise<JSONValue>;

  return suspensePromise(data);
};
const resourceGames = fetchGames();

export const CasinoGamesList = () => {
  const result = resourceGames?.read() as GamesJson;
  const games = result?.games as Array<Game>;

  const gamesList = result?.games?.map((game, index) => {
    return (
      <section
        key={`${game.name} - ${index}`}
        className={styles.gameContainer}
        onClick={() => alert(`This is ${game.name} game!`)}
      >
        <img
          src={`http://localhost:4200/assets/games/${game.image}`}
          className={styles.gameImage}
          alt={game.name}
        />
      </section>
    );
  });

  return games?.length > 0 ? (
    <div className={styles.container}>{gamesList}</div>
  ) : (
    <p>{'No games available :('}</p>
  );
};

export default CasinoGamesList;
