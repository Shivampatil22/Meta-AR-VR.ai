import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html } from '@react-three/drei';
import { Suspense } from 'react';
import Products from "../Products/Products";
import Sidebar from '../Component/Sidebar.js';
import VoiceChat from './VoiceChat.js';
import Experience from "../Experience.js";
import { KeyboardControls, Sky } from '@react-three/drei';
import { Controllers, Hands, XR, VRButton } from '@react-three/xr';
import MenuOffice from '../Component/MenuOffice.js';
import MenuClass from '../Component/MenuClass.js';
import SelectiveRender from '../Component/SelectiveRender.js';
import SelectiveRenderClass from '../Component/SelectiveRenderClass.js';
import ConnectMetamask from './ConnectMetamask.js';
import AskaiInput from '../Component/AskaiInput.js';
import UpMenu from '../Component/UpMenu.js';
import Authorize from '../Component/Authorize.js'; // Assuming this is the correct import

const Loader = () => {
    const { progress, item, loaded, total } = useProgress();

    return (
        <Html center>
            <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] z-[10000] text-white font-sans">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin mb-4"></div>
                <p className="text-xl font-semibold mb-2 text-black">Loading {Math.round(progress)}%</p>

                <div className="w-64 bg-gray-300 rounded-full h-3 mb-2">
                    <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="text-sm mb-2">{loaded}/{total} files loaded</p>

                {item ? (
                    <p className=" mt-1 text-black " style={{
                        fontSize: "14px"
                    }}>Loading: {item}</p>
                ) : (
                    <p className="text-sm mt-1 text-black">Loading: Initializing assets...</p>
                )}
            </div>
        </Html>
    );
};





const Enviroment = () => {
    const response = Authorize(); // Authorization check
    if (response != null) {
        console.log("navigate to signup");
        
        // Logic to navigate to signup could be added here, if required
        // it is being handled correctly
    }

    return (
        <>
            <VoiceChat />
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
                <ConnectMetamask />
                <MenuOffice />
                <MenuClass />
                <SelectiveRender />
                <SelectiveRenderClass />
                <UpMenu />
                <AskaiInput />
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
                    <Suspense fallback={<Loader />}>
                        <XR>
                            <Controllers />
                            <Hands />
                            <Sky sunPosition={[0,100,1000]} />
                            <Experience />
                        </XR>
                    </Suspense>
                </Canvas>
            </KeyboardControls>
        </>
    );
};

export default Enviroment;
