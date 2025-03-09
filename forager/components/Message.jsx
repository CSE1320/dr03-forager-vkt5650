import React from 'react';
import {warningMessage} from '../data/development';

const Message = () => {
    return (
        <div className="message w-[320px] h-[90px] flex-shrink-0 rounded-[20px] bg-[#FF5050] text-sm font-medium text-white px-4 py-4 mx-4">
            <div className="header flex items-center">
                <img width="27px" height="27px" className="" src={warningMessage.icon}></img>
                <h1 className="uppercase">{warningMessage.header}</h1>
            </div>
            <p className="">{warningMessage.message}</p>
        </div>
    );
};

export default Message;