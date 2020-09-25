import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Header,
  JournalList,
  AddJournalFAB,
  AddJournalModal,
  SettingBar,
} from "./components/index";
import { encryptText, decryptText } from "./utils/encryptor";

function App(props) {
  const [journal, setJournal] = useState({});
  const [entries, setEntries] = useState([]);
  const [openSetting, setOpenSetting] = useState(false);

  useEffect(() => {}, [entries]);

  decryptText(encryptText("anybody Wey no want to "));

  const handleSave = () => {
    let tempEntries = entries;
    tempEntries.push(journal);

    setEntries(tempEntries);

    saveToLocal(tempEntries);
    props.history.push("/");
  };

  const saveToLocal = (data) => {
    localStorage.setItem("journal-box-secrets", JSON.stringify(data));
  };

  return (
    <div>
      <SettingBar openSetting={openSetting} />
      <Header setOpenSetting={setOpenSetting} openSetting={openSetting} />
      <JournalList entries={entries} setEntries={setEntries} />
      <AddJournalModal
        journal={journal}
        setJournal={setJournal}
        handleSave={handleSave}
      />
      <AddJournalFAB />
    </div>
  );
}

export default App;
