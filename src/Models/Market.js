import React from 'react'
import { useFBX, useGLTF } from '@react-three/drei'

const Market = () => {
    const shop = useGLTF('./models/store.glb')
    return (
        <primitive object={shop.scene} position={[80, -0.9, 40]}  rotation-y={-Math.PI / 2}

            scale={2} />)

}

export default Market