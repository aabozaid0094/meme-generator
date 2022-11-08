const CaptionsForm = (props) => {
    return (
        <div className="captions-form">
            <div className="form-group">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Top Text"
                    name="top_text"
                    value={props.meme.top_text}
                    onChange={props.handle_change}
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="Buttom Text"
                    name="bottom_text"
                    value={props.meme.bottom_text}
                    onChange={props.handle_change}
                />
            </div>
            <div className="form-group">
                <button
                    className="form-button"
                    onClick={props.handle_click}
                >
                    Get a new meme image...
                </button>
            </div>
        </div>
    );
};

export default CaptionsForm;
