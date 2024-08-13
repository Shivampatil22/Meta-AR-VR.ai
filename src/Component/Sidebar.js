import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const [move, setMove] = useState(false);
    const [showProfile, setShowProfile] = useState(false); // State to control the profile panel visibility
    const [showOrders, setShowOrders] = useState(false); // State to control the orders panel visibility
    const sideRef = useRef();
    const profileRef = useRef(); // Ref for the profile side panel
    const ordersRef = useRef(); // Ref for the orders side panel
    const navigate = useNavigate();

    const Onclick = () => {
        if (move) {
            gsap.to(sideRef.current, { x: 276, duration: 0.5, ease: "easein" });
        } else {
            gsap.to(sideRef.current, { x: 0, duration: 0.3 });
        }
        setMove(!move);
    };

    const handleProfileClick = () => {
        setShowProfile(true);
        gsap.to(profileRef.current, { x: 0, duration: 0.3 }); // Slide in the profile panel
    };

    const handleProfileClose = () => {
        gsap.to(profileRef.current, { x: "100%", duration: 0.3 }).then(() => {
            setShowProfile(false); // Hide the panel after the animation completes
        });
    };

    const handleOrdersClick = () => {
        setShowOrders(true);
        gsap.to(ordersRef.current, { x: 0, duration: 0.3 }); // Slide in the orders panel
    };

    const handleOrdersClose = () => {
        gsap.to(ordersRef.current, { x: "100%", duration: 0.3 }).then(() => {
            setShowOrders(false); // Hide the panel after the animation completes
        });
    };

    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear the token from localStorage
        navigate("/"); // Navigate to the sign-in page
    };

    return (
        <div className='relative'>
            <div ref={sideRef} onClick={Onclick} className='w-[3vw] text-white absolute z-10'>
                <img src="./menu.png" alt="" />

                <div className='w-[9rem] bg-slate-800/10 h-[100vh] mt-[-1.7rem] ml-[-9rem] z-50 absolute flex flex-col justify-start align-middle py-[5vh] gap-[2px]'>

                    <div
                        className="w-full rounded-sm text-[20px] hover:bg-gray-700/10 text-gray-700/70 text-center hover:duration-150 z-10 p-[0.3rem]"
                        onClick={handleProfileClick} // Add onClick handler for profile
                    >
                        Profile
                    </div>

                    <div
                        className="w-full rounded-sm text-[20px] hover:bg-gray-700/10 text-gray-700/70 text-center hover:duration-150 z-10 p-[0.3rem]"
                        onClick={handleOrdersClick} // Add onClick handler for orders
                    >
                        Orders
                    </div>

                    <div className="w-full mt-16 border-b-2 border-gray-600/10 z-10"></div>

                    <div
                        className="w-full rounded-sm text-[20px] mt-3 hover:bg-gray-700/10 p-2 text-gray-700/70 text-center z-10"
                        onClick={handleLogout} // Add onClick handler for logout
                    >
                        Log Out
                    </div>

                </div>
            </div>

            {/* Profile Side Panel */}
             
                <div
                    ref={profileRef}
                    className='fixed top-0 right-0 w-[30vw] h-full bg-gray-800 text-white p-6 z-20 translate-x-[100%]'
                    style={{ transform: "translateX(100%)" }} // Ensure it starts off-screen
                >
                    <button
                        onClick={handleProfileClose}
                        className='text-right mb-4 text-lg'>
                        Close
                    </button>
                    <h2 className='text-2xl mb-4'>Character Profile</h2>
                    <p className='mb-2'>Name: John Doe</p>
                    <p className='mb-2'>Role: Explorer</p>
                    <p className='mb-2'>Level: 42</p>
                    <p className='mb-2'>Experience: 85,000 XP</p>
                    <p className='mb-2'>Equipment: VR Suit, Energy Sword</p>
                </div>
            

            {/* Orders Side Panel */}
             
                <div
                    ref={ordersRef}
                    className='fixed top-0 right-0 w-[30vw] h-full bg-gray-800 text-white p-6 z-20 translate-x-[100%]'
                    style={{ transform: "translateX(100%)" }} // Ensure it starts off-screen
                >
                    <button
                        onClick={handleOrdersClose}
                        className='text-right mb-4 text-lg'>
                        Close
                    </button>
                    <h2 className='text-2xl mb-4'>Your Orders</h2>
                    <ul className='list-disc ml-5'>
                        <li className='mb-2'>Order #12345 - VR Headset</li>
                        <li className='mb-2'>Order #12346 - VR Gloves</li>
                        <li className='mb-2'>Order #12347 - VR Treadmill</li>
                        <li className='mb-2'>Order #12348 - VR Suit</li>
                        <li className='mb-2'>Order #12349 - Energy Sword</li>
                    </ul>
                </div>
            
        </div>
    );
};

export default Sidebar;
