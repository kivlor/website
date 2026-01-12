import { Suspense } from 'solid-js'
import { Canvas } from '@solid-three/fiber'
import { OrbitControls } from '@solid-three/drei'

export function AvatarScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 3], fov: 32 }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={["#1f2937"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <directionalLight position={[-2, 1, 1]} intensity={0.5} />
      <Suspense>
        <group position={[0, -0.1, 0]}>
          <mesh position={[0, 0.3, 0]}>
            <icosahedronGeometry args={[0.7, 1]} />
            <meshStandardMaterial color="#e9b48a" flatShading />
          </mesh>

          <mesh position={[0, -0.1, 0.05]}>
            <coneGeometry args={[0.6, 0.8, 6]} />
            <meshStandardMaterial color="#3e322c" flatShading />
          </mesh>

          <mesh position={[0, 0.05, 0.58]} rotation={[0.2, 0, 0]}>
            <coneGeometry args={[0.12, 0.3, 5]} />
            <meshStandardMaterial color="#d8a070" flatShading />
          </mesh>

          <mesh position={[-0.24, 0.12, 0.55]}>
            <sphereGeometry args={[0.12, 14, 10]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0.24, 0.12, 0.55]}>
            <sphereGeometry args={[0.12, 14, 10]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>

          <mesh position={[-0.24, 0.12, 0.66]}>
            <sphereGeometry args={[0.06, 12, 10]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>
          <mesh position={[0.24, 0.12, 0.66]}>
            <sphereGeometry args={[0.06, 12, 10]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>

          <mesh position={[-0.3, 0.28, 0.5]} rotation={[0, 0, 0.1]}>
            <boxGeometry args={[0.25, 0.05, 0.2]} />
            <meshStandardMaterial color="#4b3b33" flatShading />
          </mesh>
          <mesh position={[0.3, 0.28, 0.5]} rotation={[0, 0, -0.1]}>
            <boxGeometry args={[0.25, 0.05, 0.2]} />
            <meshStandardMaterial color="#4b3b33" flatShading />
          </mesh>

          <mesh position={[-0.63, 0.12, 0]} rotation={[0, 0.3, 0]}>
            <boxGeometry args={[0.18, 0.3, 0.18]} />
            <meshStandardMaterial color="#e2a97e" flatShading />
          </mesh>
          <mesh position={[0.63, 0.12, 0]} rotation={[0, -0.3, 0]}>
            <boxGeometry args={[0.18, 0.3, 0.18]} />
            <meshStandardMaterial color="#e2a97e" flatShading />
          </mesh>

          <mesh position={[0, -0.32, 0.42]} rotation={[0.1, 0, 0]}>
            <boxGeometry args={[0.35, 0.12, 0.2]} />
            <meshStandardMaterial color="#c98559" flatShading />
          </mesh>

          <mesh position={[0, -0.62, 0.02]}>
            <cylinderGeometry args={[0.3, 0.4, 0.3, 8]} />
            <meshStandardMaterial color="#e0a577" flatShading />
          </mesh>
        </group>
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />
    </Canvas>
  )
}
