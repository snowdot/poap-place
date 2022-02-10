import React from "react";

export default function CreateEventBtn({
    setShowModal,
    imgSize
}) {

    const handleOnClick = () => {
        setShowModal(true);
    }

  return (
        <button
            className="create-event-btn action-btn"
            onClick={handleOnClick}
            disabled={Boolean(imgSize > 200)}
        >Create Event</button>
    );
}
