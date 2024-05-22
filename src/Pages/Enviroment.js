import React from 'react'
import { Canvas } from '@react-three/fiber';
import Products from "../Products/Products"
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Experience from "../Experience.js";
import { FlyControls, KeyboardControls, Sky } from '@react-three/drei';
import { PointerLockControls } from '@react-three/drei';
import { Html } from '@react-three/drei';
import { Controllers, Hands, XRButton, XR, VRButton, ARButton } from '@react-three/xr';
import DoubtPanel from '../Component/DoubtPanel.js';
import Doubt from '../Component/Doubt.js';
import Authorize from '../Component/Authorize.js';
import Sidebar from '../Component/Sidebar.js';
import VoiceChat from './VoiceChat.js';
import MenuOffice from '../Component/MenuOffice.js';
import SelectiveRender from '../Component/SelectiveRender.js';
import ShowModel from '../Component/ShowModel.js';
import MenuClass from '../Component/MenuClass.js';
import SelectiveRenderClass from '../Component/SelectiveRenderClass.js';
import ConnectMetamask from './ConnectMetamask.js';
import AskaiInput from '../Component/AskaiInput.js';
import UpMenu from '../Component/UpMenu.js';
const Enviroment = () => {
    const response = Authorize();
    if (response != null) {
        console.log("naviagate to signup")
    }


    return (
        <> <VoiceChat />
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
                <ConnectMetamask/>
                <MenuOffice />
                <MenuClass />
                <DoubtPanel />
                <Doubt />
                <SelectiveRender />
                <SelectiveRenderClass />
                <UpMenu/>
                <AskaiInput/>
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
        </>
    )
}

export default Enviroment