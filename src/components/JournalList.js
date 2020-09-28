import React, { useEffect } from "react";
import JournalItem from "./JournalItem";

const JournalList = (props) => {
  var { entries, setEntries } = props;

  useEffect(() => {
    if (
      localStorage.getItem("journal-box-secrets") &&
      JSON.parse(localStorage.getItem("journal-box-secrets")).length > 0 &&
      entries.length !== localStorage.getItem("journal-box-secrets").length
    ) {
      setEntries(JSON.parse(localStorage.getItem("journal-box-secrets")));
    } else {
    }
  }, []);

  const renderEntries = () => {
    return (
      entries.length > 0 &&
      entries.map((entry, i) => (
        <JournalItem
          title={entry.title}
          body={entry.journalBody}
          i={i}
          date={entry.date}
        />
      ))
    );
  };
  return (
    <div className="container-fluid py-4">
      <section className="row">{renderEntries()}</section>
    </div>
  );
};

export { JournalList };
