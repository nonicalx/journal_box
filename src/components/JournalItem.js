import React from "react";
import { decryptText, encryptText } from "../utils/encryptor";

const JournalItem = (props) => {
  var { title, body, key } = props;
  return (
    <div className="col-lg-2 col-md-4 py-3" key={key}>
      <article className="journal_card p-2">
        <h5>{decryptText(title)}</h5>
        <p className="mb-0">{decryptText(body)}</p>
        <time className="time_stamp pt-1">9/19/2020</time>
      </article>
    </div>
  );
};

export default JournalItem;
