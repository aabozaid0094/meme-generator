import React from "react";
import Logo from "../troll-face.png";
import CaptionsForm from "./CaptionsForm";
import MemeResult from "./MemeResult";

const base_url = "https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes/";

const Meme = (props) => {
    // States
    const [meme, set_meme] = React.useState({
        top_text: "",
        bottom_text: "",
        url: Logo,
    });
    const [all_memes, set_all_meme] = React.useState([]);

    //Effects
    React.useEffect(() => {
        fetch(base_url)
        .then((res) => res.json())
        .then((data) => {
            set_all_meme(data.data.memes);
        });
    }, []);

    //Handles
    const handle_input_change = (event) => {
        const { name, value } = event.target;
        set_meme((previous_meme) => ({ ...previous_meme, [name]: value }));
    };
    const meme_button_on_click_handle = () => {
        const random_meme =
            all_memes[Math.floor(Math.random() * all_memes.length)];
        set_meme((previous_meme) => ({ ...previous_meme, ...random_meme }));
    };
    return (
        <main className="app-main">
            <CaptionsForm
                meme={meme}
                handle_change={handle_input_change}
                handle_click={meme_button_on_click_handle}
            />
            <MemeResult meme={meme} />
        </main>
    );
};

export default Meme;
