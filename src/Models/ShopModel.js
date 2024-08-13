import { useFBX, useGLTF } from '@react-three/drei'
import React from 'react'

const ShopModel = () => {
    const shop = useFBX('./models/Market.fbx')
  return (
      <primitive object={shop} position={[37,-0.9,19.5]} rotation-y={-Math.PI / 2}

          scale={0.11} />  )
}

export default ShopModel