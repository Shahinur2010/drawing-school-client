

const Feedback = () => {
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-5">Please Give Your Valuable Feedback</h2>
            {/* Open the modal using ID.showModal() method */}
            <button className="btn" onClick={() => window.my_modal_5.showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                   <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default Feedback;