import React from "react";
import { decryptText } from "../utils/encryptor";

const JournalItem = (props) => {
  var { title, body, i, date } = props;

  const renderSlicedBody = (bodyContent) => {
    let decryptedBody = decryptText(body);

    if (decryptedBody.length > 100) {
      return decryptedBody.substr(0, 100);
    } else {
      return decryptedBody;
    }
  };

  return (
    <div className="col-lg-2 col-md-4 py-3" key={i}>
      <article className="journal_card p-2">
        <h5>{decryptText(title)}</h5>
        <p className="mb-0">{renderSlicedBody(body)}</p>
        <time className="time_stamp pt-1">{date || "none"}</time>
      </article>
    </div>
  );
};

export default JournalItem;
