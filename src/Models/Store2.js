import React from 'react'
import { useFBX, useGLTF } from '@react-three/drei'

const Store2 = () => {
    const shop = useGLTF('./models/Cloth.glb')
    const banner = useFBX('./models/Banner_8.fbx')
    const banner2 = useFBX('./models/Banner_9.fbx')
    const banner3 = useFBX('./models/Banner_10.fbx')
    return (<>
    
        <primitive object={shop.scene} position={[76, -0.9, 65]} rotation-y={-Math.PI / 2}

scale={0.018} />
        <primitive object={banner} position={[76, -0.9,74]}
            rotation-z={0}
            // rotation-y={Math.PI / 2}
            scale={0.077} />
        <primitive object={banner2} position={[85.5, -0.9, 64.5]}
            rotation-z={0}
            rotation-y={Math.PI / 2}
            scale={0.077} />
        <primitive object={banner3} position={[95.5, 6.8, 40.5]}
            rotation-z={Math.PI / 2}
            rotation-y={0}
            rotation-x={Math.PI / 2}    
            scale={0.27} />
</>

        )

}

export default Store2