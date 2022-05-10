import React from "react";
import fetch from "cross-fetch";
import { useState } from "react";

export default function App() {
  var getData = async () => {
    try {
      const res = await fetch("http://localhost:4000/");

      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }

      const user = await res.json();

      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>ค้นหาหลักสูตร|ปริญญาโท</h1>
      <button onClick={() => getData()}>Click me</button>
      <label for="selectFac">ค้นหาด้วย คณะ</label>

      

      <h2>ผลการค้นหา</h2>
    </div>
  );
}
