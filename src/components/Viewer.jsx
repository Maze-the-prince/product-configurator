import { useEffect, useRef } from 'react';
import { Three3DScene } from '../three/Three3DScene.js';

export function Viewer({ config, scalePercent, onReady, onError, onArState, onArScale }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const arStateRef = useRef(onArState);
  const arScaleRef = useRef(onArScale);
  arStateRef.current = onArState;
  arScaleRef.current = onArScale;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    let scene;
    try {
      scene = new Three3DScene(canvas, {
        modelUrl: `${import.meta.env.BASE_URL}assets/model.glb`,
        onArState: (mode) => arStateRef.current?.(mode),
        onArScale: (value) => arScaleRef.current?.(value)
      });
    } catch (err) {
      console.error(err);
      onError?.(err);
      return undefined;
    }
    sceneRef.current = scene;
    scene.load()
      .then(() => {
        scene.setColors(config);
        scene.setScalePercent(scalePercent);
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

  useEffect(() => {
    sceneRef.current?.setScalePercent(scalePercent);
  }, [scalePercent]);

  return <canvas id="viewerCanvas" ref={canvasRef} />;
}
