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

function App() {
  const [journal, setJournal] = useState({});
  const [entries, setEntries] = useState([]);
  const [openSetting, setOpenSetting] = useState(false);

  useEffect(() => {
    console.log("render app");
  }, [entries]);

  decryptText(encryptText("anybody Wey no want to "));

  const handleSave = async () => {
    let tempEntries = entries;
    tempEntries.push(journal);

    await setEntries(tempEntries);

    saveToLocal(tempEntries);
  };

  const saveToLocal = (data) => {
    localStorage.setItem("journal-box-secrets", JSON.stringify(data));
  };

  console.log();

  console.log("Entries", entries);

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
