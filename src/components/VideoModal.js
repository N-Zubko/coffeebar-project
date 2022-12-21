const VideoModal = ({ changeVideoModalVisibility }) => {
    console.log(changeVideoModalVisibility)
    return (
        <div className="modal-container">
            <div className="modal-content">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rLaVDQy0q8Y"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <button
                    onClick={changeVideoModalVisibility}
                    type="button"
                    className="button mt-3"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default VideoModal
