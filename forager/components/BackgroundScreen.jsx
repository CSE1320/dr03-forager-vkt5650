import React from 'react';

const BackgroundScreen = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center z-0">
            <img src="/images/camera_mushroom.png" alt="Photosearch background" className="w-full h-full object-cover"/>
        </div>
    );
};

export default BackgroundScreen;
