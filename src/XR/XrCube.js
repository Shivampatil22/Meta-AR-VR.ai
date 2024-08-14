import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useFBX, useGLTF } from '@react-three/drei';

const XrModel = ({ url }) => {
    // url = "./models/shop.glb"
    const modelRef = useRef();
    const model = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/desk/model.gltf');

    // Rotate the model or cube
    // useFrame((state, delta) => {
    //     if (modelRef.current) {
    //         modelRef.current.rotation.y += delta;
    //     }
    // });

    return (
        <>
            <OrbitControls />
            <ambientLight />
                <primitive  object={model} scale={1}  position={[0,0,0]}/>
            {/* <mesh ref={modelRef} scale={1}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={"mediumpurple"} />
            </mesh> */}
            {/* {url ? (
                <
            ) : (
                <mesh ref={modelRef} scale={1}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={"mediumpurple"} />
                </mesh>
            )} */}
        </>
    );
};

export default XrModel;
