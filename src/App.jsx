import "./App.css";
import { useState,Suspense } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Toggles_Btns from "./components/Toggles_Btns";
import IssuesManagement from "./components/IssuesManagement";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={"Loading..."}>
        <IssuesManagement  fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
