import React from "react";
import { encryptText, decryptText } from "../utils/encryptor";

const AddJournalModal = (props) => {
  var { journal, setJournal, handleSave } = props;
  const getDate = () => {
    let date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return `${
      days[date.getDay()]
    },  ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const handleEntry = (e) => {
    setJournal({ ...journal, [e.target.id]: encryptText(e.target.value) });
  };

  console.log(journal);
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  id="title"
                  onChange={handleEntry}
                />
              </span>
              <button
                type="button"
                className="close close_modal"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <section>
                <textarea
                  className="w-100 p-1"
                  rows="15"
                  autoFocus
                  placeholder="Express yourself"
                  id="journalBody"
                  onChange={handleEntry}
                ></textarea>
                <p className="mb-0 journal_date">{getDate()}</p>
              </section>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddJournalModal };
