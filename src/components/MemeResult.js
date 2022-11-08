const MemeResult = (props) => {
    return (
        <div className="meme-result">
            <img
                className="meme-result-image"
                id="meme_result_image"
                src={props.meme.url}
                alt="meme-result"
            />
            <h2 className="top-text" id="top_text">{props.meme.top_text}</h2>
            <h2 className="bottom-text" id="bottom_text">{props.meme.bottom_text}</h2>
        </div>
    );
};

export default MemeResult;
