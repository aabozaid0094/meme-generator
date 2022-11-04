const MemeResult = (props) => {
    return (
        <div className="meme-result">
            <img
                className="meme-result-image"
                id="meme_result_image"
                src={props.image.url}
                alt="meme-result"
            />
        </div>
    );
};

export default MemeResult;
