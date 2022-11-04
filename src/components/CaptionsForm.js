const CaptionsForm = (props) => {
    return (
        <div className="captions-form">
            <div className="form-group">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Top Text"
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="Buttom Text"
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
