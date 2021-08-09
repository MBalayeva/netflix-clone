import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Inner, Overlay, Button } from "./styles/player";

export const PlayerContext = createContext();

const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

export default Player;

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          {...restProps}
          data-testid="netflix"
          onClick={() => setShowPlayer(false)}
        >
          <Inner>
            <video id="netflix player" controls>
              <source src={src} type="video/mp4" />
            </video>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function ButtonPlayer({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
      {...restProps}
    >
      Play
    </Button>
  );
};
