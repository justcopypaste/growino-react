import React, { useEffect, useRef } from 'react';
import { Card } from "@mui/material";

const Camera = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    fetch(`http://ip-api.com/json/www.growino.app`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const url = `ws://${data.query}:4000`

        let player;
        if (canvasRef.current) {
          player = new window.JSMpeg.Player(url, { canvas: canvasRef.current });
        }
        return () => {
          if (player) {
            player.destroy();
          }
        };
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [url]);

  return (
    <Card sx={() => ({
      height: "340px",
      py: "32px",
      // backgroundImage: `url(${gif})`,
      // backgroundSize: "cover",
      // backgroundPosition: "50%",
      // opacity: 0.9
      padding: "0"
    })}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </Card>
  );
};

export default Camera;
