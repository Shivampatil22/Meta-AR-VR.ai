import React from 'react'
import { Canvas } from '@react-three/fiber';
import Products from "../Products/Products"
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Experience from "../Experience.js";
import { FlyControls, KeyboardControls, Sky } from '@react-three/drei';
import { PointerLockControls } from '@react-three/drei';

import { Controllers, Hands, XRButton, XR, VRButton, ARButton } from '@react-three/xr';
import Authorize from '../Component/Authorize.js';
import Sidebar from '../Component/Sidebar.js';
const Enviroment = () => {
    const response = Authorize();
    if (response != null) {
        console.log("naviagate to signup")
    }


    return (

        <KeyboardControls
            map={[
                { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
                { name: 'back', keys: ['ArrowDown', 'KeyS'] },
                { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
                { name: 'right', keys: ['ArrowRight', 'KeyD'] },
                { name: 'jump', keys: ['Space'] },
                { name: 'shift', keys: ['Shift'] },

            ]}
        >
            <Sidebar />
            <Products />
            <VRButton />
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 6],
                }}
            >
                <XR>
                    <Controllers />
                    <Hands />
                    <Sky sunPosition={[100, 20, 100]} />
                    <Experience />
                </XR>
            </Canvas>
        </KeyboardControls>

    )
}

export default Enviroment