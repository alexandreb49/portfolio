"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RocketScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    let W = mount.clientWidth;
    let H = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(0, 0.2, 11.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);

    const accent = new THREE.Color("#5b8cff");

    // lighting
    scene.add(new THREE.AmbientLight(0x8090b0, 0.45));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(-5, 6, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(accent.getHex(), 2.4);
    rim.position.set(6, -2, -5);
    scene.add(rim);
    const fill = new THREE.DirectionalLight(0x5566aa, 0.5);
    fill.position.set(4, 1, 8);
    scene.add(fill);
    const enginePoint = new THREE.PointLight(accent.getHex(), 3, 8, 2);
    enginePoint.position.set(0, -2.7, 0.2);
    scene.add(enginePoint);

    // rocket
    const rocket = new THREE.Group();

    const hull = new THREE.MeshStandardMaterial({ color: 0xdfe4ec, metalness: 0.85, roughness: 0.34 });
    const hullDark = new THREE.MeshStandardMaterial({ color: 0x2a3140, metalness: 0.7, roughness: 0.5 });
    const accentMat = new THREE.MeshStandardMaterial({
      color: accent.clone(), metalness: 0.5, roughness: 0.3,
      emissive: accent.clone(), emissiveIntensity: 0.35,
    });

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 3.4, 60, 1), hull);
    body.position.y = 0.2;
    rocket.add(body);

    const stripe1 = new THREE.Mesh(new THREE.CylinderGeometry(0.561, 0.561, 0.16, 60), accentMat);
    stripe1.position.y = 1.4;
    rocket.add(stripe1);
    const stripe2 = new THREE.Mesh(new THREE.CylinderGeometry(0.566, 0.571, 0.07, 60), accentMat);
    stripe2.position.y = -0.5;
    rocket.add(stripe2);

    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.57, 0.57, 0.28, 60), hullDark);
    band.position.y = 0.55;
    rocket.add(band);

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.5, 60), hull);
    nose.position.y = 2.65;
    rocket.add(nose);
    const noseTip = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), accentMat);
    noseTip.position.y = 3.42;
    rocket.add(noseTip);

    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.48, 0.45, 60), hullDark);
    skirt.position.y = -1.72;
    rocket.add(skirt);
    const bell = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.46, 0.55, 48, 1, true),
      new THREE.MeshStandardMaterial({ color: 0x39414f, metalness: 0.9, roughness: 0.35, side: THREE.DoubleSide })
    );
    bell.position.y = -2.2;
    rocket.add(bell);

    // fins
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0.95, -0.85);
    finShape.lineTo(0.95, -1.15);
    finShape.lineTo(0, -0.55);
    finShape.lineTo(0, 0);
    const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.07, bevelEnabled: false });
    finGeo.translate(0, 0, -0.035);
    for (let i = 0; i < 4; i++) {
      const fin = new THREE.Mesh(finGeo, hullDark);
      fin.position.set(0, -1.0, 0);
      fin.rotation.y = (i / 4) * Math.PI * 2;
      const holder = new THREE.Group();
      holder.add(fin);
      fin.position.x = 0.52;
      holder.rotation.y = (i / 4) * Math.PI * 2;
      rocket.add(holder);
    }

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.62, 0.012, 8, 60),
      new THREE.MeshBasicMaterial({ color: 0x4a5468 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.05;
    rocket.add(ring);

    rocket.rotation.z = 0.12;
    scene.add(rocket);

    // engine glow
    function glowTexture(hex: string) {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, hex);
      g.addColorStop(0.3, hex);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(c);
    }
    const glowMat = new THREE.SpriteMaterial({
      map: glowTexture("#9db8ff"),
      color: accent.clone(),
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      opacity: 0.9,
    });
    const glow = new THREE.Sprite(glowMat);
    glow.scale.set(2.2, 2.2, 1);
    glow.position.set(0, -2.7, 0.1);
    rocket.add(glow);

    const plumeMat = new THREE.MeshBasicMaterial({
      color: accent.clone(),
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const plume = new THREE.Mesh(new THREE.ConeGeometry(0.34, 1.6, 32, 1, true), plumeMat);
    plume.position.set(0, -3.2, 0);
    plume.rotation.x = Math.PI;
    rocket.add(plume);

    // starfield
    function makeStars(count: number, radius: number, size: number, color: number, opacity: number) {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const r = radius * (0.4 + Math.random() * 0.6);
        const th = Math.random() * Math.PI * 2;
        const ph = Math.acos(2 * Math.random() - 1);
        pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
        pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
        pos[i * 3 + 2] = r * Math.cos(ph) - 8;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color, size, transparent: true, opacity, depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Points(geo, mat);
    }
    const stars = makeStars(1300, 26, 0.06, 0xcfd8ec, 0.9);
    scene.add(stars);
    const accentDust = makeStars(140, 20, 0.1, accent.getHex(), 0.7);
    scene.add(accentDust);

    function layout() {
      rocket.position.x = 0;
      rocket.position.y = -0.2;
      camera.position.x = 0;
      rocket.scale.setScalar(1);
    }
    layout();

    let tx = 0, ty = 0, mx = 0, my = 0;
    const onPointerMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove);

    let rafId: number;
    const clock = new THREE.Clock();
    function tick() {
      const t = clock.getElapsedTime();
      mx += (tx - mx) * 0.04;
      my += (ty - my) * 0.04;
      rocket.rotation.y += 0.0035;
      rocket.rotation.x = -my * 0.25;
      rocket.rotation.z = 0.12 + mx * 0.12;
      rocket.position.y += Math.sin(t * 1.1) * 0.0009;
      stars.rotation.y = t * 0.012;
      accentDust.rotation.y = -t * 0.02;
      camera.position.x += (mx * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (0.2 - my * 0.35 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      const fl = 0.85 + Math.sin(t * 22) * 0.12 + Math.random() * 0.06;
      glow.scale.setScalar(2.2 * fl);
      glowMat.opacity = 0.78 * fl;
      enginePoint.intensity = 2.6 * fl;
      plumeMat.opacity = 0.14 * fl;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    }
    tick();

    const onResize = () => {
      W = mount.clientWidth;
      H = mount.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
      layout();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: 0 }} />;
}
