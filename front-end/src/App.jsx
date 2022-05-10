import React from "react";
import fetch from "cross-fetch";
import { useState, useEffect } from "react";
import styles from './App.css';



export default function App() {
  const [info, setInfo] = useState("");
  const [faculity, setFaculity] = useState("none");

  useEffect(() => {
    getData()
  }, [faculity]);

  var getData = async () => {
    try {
      // const res = await fetch("http://localhost:4000/database%22);
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      const user = await res.json();
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeCategory = (event) => {
    setFaculity(event.target.value);
  };

  return (
    <div>
      <h2>ระบบรับสมัครนักศึกษาระดับปริญญาโท</h2>
      <h2 style={{color:"red", background:"white"}}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h2>
      <br></br>
      <h3>ค้นหาหลักสูตรที่เปิด</h3>
      <label for="selectFac">ค้นหาด้วย คณะ</label>
      <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
   </select>

      <label for="selectFac">ค้นหา 'รอบรับสมัคร'</label>
      <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
    </select>

      <label for="selectFac">ค้นหา 'โครงการ'</label>
      <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
    </select>

      <label for="selectFac">ค้นหาหลักสูตร ไทย / นานาชาติ</label>
      <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
    </select>

    <br></br>
    <label for="selectFac">คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ) [ระบบจะค้นจากชื่อคณะ,หลักสูตร]</label>
    <input></input>


      <h2>ผลการค้นหา</h2>
    </div>
  );
}
