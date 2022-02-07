import React from 'react';
import "./whatGPT3.css"
import {Feature} from "../../components";

const WhatGpt3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="INFO 2022-02-07 13:53:27,626 autoreload 50888 4529415680 /Users/szymon/src/milo-server/allegro/connectors.py changed, reloading."/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="INFO 2022-02-07 13:53:27,626 autoreload 50888 4529415680 /Users/szymon/src/milo-server/allegro/connectors.py changed, reloading."/>
                <Feature title="Knowledgebase" text="INFO 2022-02-07 13:53:27,626 autoreload 50888 4529415680 /Users/szymon/src/milo-server/allegro/connectors.py changed, reloading."/>
                <Feature title="Education" text="INFO 2022-02-07 13:53:27,626 autoreload 50888 4529415680 /Users/szymon/src/milo-server/allegro/connectors.py changed, reloading."/>
            </div>
        </div>
    );
};

export default WhatGpt3;
