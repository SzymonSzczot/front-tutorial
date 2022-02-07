import React from 'react';
import "./header.css";
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's build Something Amazing with GOT-3 OpenAI</h1>
                <p>
                    Entrypoint main 3.37 MiB (3.02 MiB) = static/js/bundle.js 3.37 MiB main.e1da40c16d8d255d03e9.hot-update.js 4.44 KiB 3 auxiliary assets
                </p>
            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Youe Email Address"></input>
                <button type="button"> Get started</button>
            </div>
            <div className="gpt3__header-content__people">
                <img src={people} alt="people"/>
                <p>cached modules 2.88 MiB (javascript) 7.66 MiB (asset) [cached] 146 modules</p>
            </div>
            </div>

            <div className="gpt3__header-image">
                <img src={ai} alt="ai"/>
            </div>
        </div>
    );
};

export default Header;