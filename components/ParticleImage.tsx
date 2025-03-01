import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ParticleImageProps {
  imageUrl: string; // 表示する画像のURL
}

const ParticleImage: React.FC<ParticleImageProps> = ({ imageUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageUrl || !containerRef.current) return;

    const currentContainer = containerRef.current; // containerRef.current をローカル変数にコピー

    // シーン、カメラ、レンダラーの作成
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90, // 視野角
      containerRef.current.clientWidth / containerRef.current.clientHeight, // アスペクト比
      0.2, // near
      1000 // far
    );
    camera.position.z = 300; // カメラの位置

    const renderer = new THREE.WebGLRenderer({ antialias: true }); // レンダラーの作成
    renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比を設定
    renderer.setSize(
      currentContainer.clientWidth,
      currentContainer.clientHeight
    ); // レンダラーのサイズ
    currentContainer.appendChild(renderer.domElement); // レンダラーをDOMに追加

    // 画像の読み込みとパーティクル生成
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imageUrl, (texture) => {
      const canvas = document.createElement('canvas'); // canvas要素の作成
      const context = canvas.getContext('2d'); // 2Dコンテキストの取得
      if (!context) return; // contextが存在しない場合は処理を中断

      canvas.width = texture.image.width; // canvasの幅
      canvas.height = texture.image.height; // canvasの高さ
      context.drawImage(texture.image, 0, 0); // 画像をcanvasに描画

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height); // 画像のピクセルデータを取得
      const pixels = imageData.data; // ピクセルデータ

      const particlesGeometry = new THREE.BufferGeometry(); // パーティクルジオメトリの作成
      const positions: number[] = []; // 頂点座標
      const colors: number[] = []; // 頂点の色
      const targets: number[] = []; // 目標座標

      // パーティクルの生成
      for (let y = 0; y < canvas.height; y += 2) {
        // y座標を1ピクセルずつスキップ
        for (let x = 0; x < canvas.width; x += 2) {
          // x座標を1ピクセルずつスキップ
          const index = (y * canvas.width + x) * 4; // ピクセルデータのインデックス
          let r = pixels[index] / 255; // 赤
          let g = pixels[index + 1] / 255; // 緑
          let b = pixels[index + 2] / 255; // 青

          // 色の値を調整してコントラストを上げる
          r = Math.pow(r, 2); // 指数関数でコントラストを調整
          g = Math.pow(g, 2);
          b = Math.pow(b, 2);

          // ランダムな位置にパーティクルを配置
          positions.push(
            Math.random() * 200 - 100,
            Math.random() * 200 - 100,
            Math.random() * 200 - 100
          );
          colors.push(r, g, b); // 頂点の色を設定

          // 目標座標を設定
          targets.push(x - canvas.width / 2, -y + canvas.height / 2, 0);
        }
      }

      // ジオメトリに属性を設定
      particlesGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      particlesGeometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(colors, 3)
      );
      particlesGeometry.setAttribute(
        'target',
        new THREE.Float32BufferAttribute(targets, 3)
      );

      // パーティクルマテリアルの作成
      const particlesMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
      }); // パーティクルのサイズと色
      const particles = new THREE.Points(particlesGeometry, particlesMaterial); // パーティクルの作成
      scene.add(particles); // シーンにパーティクルを追加

      // アニメーション
      setTimeout(() => {
        const animate = () => {
          if (
            !particlesGeometry.attributes.position ||
            !particlesGeometry.attributes.target
          )
            return;
          const positionAttribute = particlesGeometry.attributes
            .position as THREE.BufferAttribute; // 頂点座標の属性
          const targetAttribute = particlesGeometry.attributes
            .target as THREE.BufferAttribute; // 目標座標の属性

          // パーティクルを目標座標に移動
          for (let i = 0; i < positionAttribute.count; i++) {
            const dx = targetAttribute.getX(i) - positionAttribute.getX(i); // x座標の差分
            const dy = targetAttribute.getY(i) - positionAttribute.getY(i); // y座標の差分
            const dz = targetAttribute.getZ(i) - positionAttribute.getZ(i); // z座標の差分

            // 移動速度を調整
            positionAttribute.setX(i, positionAttribute.getX(i) + dx * 0.02);
            positionAttribute.setY(i, positionAttribute.getY(i) + dy * 0.02);
            positionAttribute.setZ(i, positionAttribute.getZ(i) + dz * 0.02);
          }

          positionAttribute.needsUpdate = true; // 頂点座標の更新を通知
          renderer.render(scene, camera); // レンダリング
          requestAnimationFrame(animate); // アニメーションを繰り返す
        };

        animate(); // アニメーションを開始
      }, 1500); // 1500ミリ秒 = 1.5秒

      // リサイズ処理
      const handleResize = () => {
        if (!currentContainer) return;
        camera.aspect =
          currentContainer.clientWidth / currentContainer.clientHeight; // アスペクト比を更新
        camera.updateProjectionMatrix(); // カメラのプロジェクションマトリックスを更新
        renderer.setSize(
          currentContainer.clientWidth,
          currentContainer.clientHeight
        ); // レンダラーのサイズを更新
      };
      window.addEventListener('resize', handleResize); // リサイズイベントを登録
      return () => window.removeEventListener('resize', handleResize); // リサイズイベントを解除
    });

    // コンポーネントのアンマウント時にレンダラーを破棄
    return () => {
      if (currentContainer) {
        while (currentContainer.firstChild) {
          currentContainer.removeChild(currentContainer.firstChild);
        }
      }
    };
  }, [imageUrl]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />; // レンダラーを配置するdiv要素
};

export default ParticleImage;
