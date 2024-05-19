import React from 'react'
import { useFBX, useGLTF } from '@react-three/drei'
import { MeshNormalMaterial } from 'three'


const TheatreStage = () => {

    const cinema = useGLTF('./models/theatre_stage.glb')
    return (<>
        <mesh scale={70}

            position={[0, 0, 79.9]} rotation-y={-Math.PI / 5}  >
            <planeGeometry />
            <meshPhongMaterial color={"#1B2631"} side={2} />
        </mesh>
        <mesh scale={30}

            position={[30, 4, 120]} rotation-y={-Math.PI / 2}  >
            <planeGeometry />
            <meshPhongMaterial color={"#1B2631"} side={2} />
        </mesh >
        <mesh scale={38}

            position={[55, 10, 95]} rotation-y={0}  >
            <planeGeometry />
            <meshPhongMaterial color={"#1B2631"} side={2} />
        </mesh >
        <primitive position={[55, -2, 120]} object={cinema.scene}
            rotation-y={Math.PI / 2 * (3)}
            scale={3} />

    </>
    )
}

export default TheatreStage