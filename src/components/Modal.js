import EventForm from "./EventForm";

export default function Modal({
    showModal,
    setShowModal
}) {

    const handleOnClick = e => {
        if(e.target.className === "modal") {
            setShowModal(false);
        }
    }

    return (
        <>
            {
                showModal &&
                <div
                    className="modal"
                    onClick={handleOnClick}
                >
                    <EventForm
                        setShowModal={setShowModal}
                    />
                </div>
            }
        </>
    );
}
