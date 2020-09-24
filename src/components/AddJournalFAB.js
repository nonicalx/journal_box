import React from "react";
// import AddJournalModal from "./AddJournalModal";

const AddJournalFAB = () => {
  return (
    <>
      <div className="d-flex justify-content-end p-3 fixed-bottom">
        <button
          className="shadow fab_circle material-icons"
          data-toggle="modal"
          data-target="#staticBackdrop"
        >
          add
        </button>
      </div>

      {/* <AddJournalModal /> */}
    </>
  );
};

export { AddJournalFAB };
