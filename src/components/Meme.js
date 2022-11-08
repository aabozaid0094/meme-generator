import React from "react";
import MemeData from "../Data/MemeData";
import Logo from "../troll-face.png";
import CaptionsForm from "./CaptionsForm";
import MemeResult from "./MemeResult";

const Meme = (props) => {
    const [meme, set_meme] = React.useState({
        top_text: "",
        bottom_text: "",
        url: Logo,
    });
    const [all_memes, set_all_meme] = React.useState(MemeData);
    const handle_input_change = (event)=> {
        const {name, value} = event.target;
        set_meme((previous_meme) => ({...previous_meme, [name]: value}))
    };
    const meme_button_on_click_handle = () => {
        if (!all_memes.success) return;
        const memes_array = all_memes.data.memes;
        const random_meme =
            memes_array[Math.floor(Math.random() * memes_array.length)];
        set_meme((previous_meme) => ({ ...previous_meme, ...random_meme }));
    };
    return (
        <main className="app-main">
            <CaptionsForm meme={meme} handle_change={handle_input_change} handle_click={meme_button_on_click_handle} />
            <MemeResult meme={meme} />
        </main>
    );
};

export default Meme;
