# Dev-tool-final

## การรัน

`docker compose up -d`

เข้าไป `http://localhost:3001/`

## prometheus
`http://localhost:9090/targets`

## การออกแบบ Database
   faculty_name : {
       type : String
   },
   faculty_course : {
       type : String
   },
   start_date : {
       type : String
   },
   due_date : {
       type : String
   },
   person_info : {
       type : String
   }

## Feature/Flow
https://github.com/WSBoos/Dev-tool-final/wiki/Feature-Flow

## รูปแบบของ commit message
|commit message|ความหมาย|
|:------------:|--------|
|``build``     |การเปลี่ยนแปลงที่ส่งผลต่อระบบ build (ตัวอย่างเช่น gulp, broccoli, npm)|
|``ci``        |การเปลี่ยนแปลงไฟล์ การกำหนดค่า configuration files และ scripts  (ตัวอย่างเช่น Travis, Circle, BrowserStack, SauceLabs)|
|``docs``      |การเปลี่ยนแปลงเอกสารต่าง ๆ เท่านั้น|
|``feat``      |ฟีเจอร์ใหม่|
|``fix``       |แก้ไข Bug|
|``perf``      |ปรับเปลี่ยน Code เพื่อเพิ่มประสิทธิภาพ|
|``refactor``  |การ Refactoring Code|
|``style``     |แก้ไขการเขียน Code เช่น white-space, formatting, missing semi-colons, etc.|
|``test``      |การทดสอบ หรือการแก้ไขการทดสอบที่มีอยู่|
|``add``       |เป็นการเพิ่มหรือสร้างไฟล์ในโปรเจค

## Branch strategy
#### Git Flow Branch Strategy
|Branch name |   วิธีใช้        |
|:----------:|-------------|
|``Main``        |เป็น Branch หลักของโปรเจคใช้สำหรับเมื่อโปรเจคเสร็จแล้วเรียบร้อยแล้ว|
|``Dev``        |เป็น Branch ที่ใช้สำหรับการพัฒนาของโปรเจค เมื่อมี Feature  ใดที่ทำเสร็จแล้ว จะทำการ Merge Branch ``Feature`` นั้นด้วยวิธีการ PR เข้า Branch ``Dev`` นี้|
|``Feature``        |เป็น Branch ที่แยกออกมาพัฒนาจาก ``Dev`` เพื่อแบ่ง Feature ในการพัฒนาส่วนต่างๆ |
|``Release``        |เป็น Branch ที่ใช้สำหรับการปล่อยให้โปรเจคออกมาให้พร้อมใช้งานเป็นระยะๆ|
| ``Test``          | เป็น Branch ที่ใช้สำหรับการทำ Testing ต่างๆ
|``Hotfix``        |เป็น Branch ไว้สำหรับการแก้ไขปัญหาที่เร่งด่วน จำเป็นต้องแก้ไขทันที|
