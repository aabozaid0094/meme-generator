import React from "react";
import MemeData from "../Data/MemeData";
import Logo from "../troll-face.png";
import CaptionsForm from "./CaptionsForm";
import MemeResult from "./MemeResult";

const Meme = (props) => {
    const [image, set_image] = React.useState({
        top_text: "",
        buttom_text: "",
        url: Logo,
    });
    const [all_image, set_all_image] = React.useState(MemeData);
    const meme_button_on_click_handle = () => {
        if (!all_image.success) return;
        const images_array = all_image.data.memes;
        const random_image =
            images_array[Math.floor(Math.random() * images_array.length)];
        set_image((previous_image) => ({ ...previous_image, ...random_image }));
    };
    return (
        <main className="app-main">
            <CaptionsForm handle_click={meme_button_on_click_handle} />
            <MemeResult image={image} />
        </main>
    );
};

export default Meme;
