import React from "react";
import fetch from "cross-fetch";
import { useState, useEffect } from "react";
import styles from "./App.css";
import { Button, Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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
      <h2 style={{textAlign: "start"}}>ระบบรับสมัครนักศึกษาระดับปริญญาโท</h2>
      <h2 style={{ color: "red", background: "white" }}>
        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
      </h2>
      <br></br>
      <h3>ค้นหาหลักสูตรที่เปิด</h3>
      <br></br>
      <label for="selectFac">ค้นหาด้วย คณะ</label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      <label for="selectFac">ค้นหา 'รอบรับสมัคร'</label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      <label for="selectFac">ค้นหา 'โครงการ'</label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      <label for="selectFac">ค้นหาหลักสูตร ไทย / นานาชาติ</label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>

      <br></br>
      <label for="selectFac">
        คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ) [ระบบจะค้นจากชื่อคณะ,หลักสูตร]
      </label>
      <input></input>
      <br></br>
      <h2>ผลการค้นหา</h2>
    </div>
  );
}
