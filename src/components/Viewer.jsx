import { useEffect, useRef } from 'react';
import { Three3DScene } from '../three/Three3DScene.js';

export function Viewer({ config, onReady, onError }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const scene = new Three3DScene(canvas, { modelUrl: `${import.meta.env.BASE_URL}assets/model.glb` });
    sceneRef.current = scene;
    scene.load()
      .then(() => {
        scene.setColors(config);
        onReady?.(scene);
      })
      .catch((err) => {
        console.error(err);
        onError?.(err);
      });
    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    sceneRef.current?.setColors(config);
  }, [config.body, config.lid]);

  return <canvas id="viewerCanvas" ref={canvasRef} />;
}
