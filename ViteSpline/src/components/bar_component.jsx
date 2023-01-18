import React from "react";

function Bar_component({ link, nameLink }) {
    return (
        <>
            <a href={ link } className="group py-3 px-6 block relative">
                <div
                    className="w-7 border-color_dark_blue h-0.5 
                            border-2 rounded-full transition-all 
                            duration-500 group-hover:w-16 
                            group-hover:border-color_orange"
                >
                    <div
                        className="bg-themeDarkBlue bg-opacity-50 
                                rounded-full backdrop-blur p-2 absolute 
                                top-1/2 -translate-y-1/2 -translate-x-full 
                                opacity-0 group-hover:-translate-x-[115%] 
                                transition-all duration-700 group-hover:opacity-100"
                    >
                        <span
                            className="tracking-[.25em] text-xs text-themePurple 
                                    whitespace-nowrap transition-all duration-500"
                        >
                        { nameLink }
                        </span>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Bar_component;
