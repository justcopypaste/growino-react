import React, { useEffect, useRef } from 'react';
import { Card } from "@mui/material";

const Camera = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const url = `wss://cam.growino.app:4000`

    let player;
    if (canvasRef.current) {
      player = new window.JSMpeg.Player(url, { canvas: canvasRef.current });
    }
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [url]);

  return (
    <Card sx={() => ({
      height: "340px",
      py: "32px",
      opacity: 0.85,
      padding: "0"
    })}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </Card>
  );
};

export default Camera;
