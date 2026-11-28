---
title: "THCTT 2025 Write-up | Thailand Cyber Top Talent 2025 Junior [Qualifier]"
description: "บันทึกการแข่ง Thailand Cyber Top Talent 2025 รอบคัดเลือกรุ่น Junior ครอบคลุมการวิเคราะห์ไฟล์ นิติวิทยาศาสตร์ดิจิทัล และบทเรียนด้านการเข้ารหัส"
date: 2025-09-01
category: CTF
archiveCategory: Write-Up
tags: ["ctf", "Write-Up", "NCSA"]
cover: /images/blog/thctt-2025/cover.jpg
language: th
draft: false
---

![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*Lo_FLkyUdwdEDrMHpATQdw.png)
*Note: อันไหนทำได้เอามาหมด อันที่ไม่ได้เฉลยเพื่อนทำ*
![img](https://miro.medium.com/v2/resize:fit:330/format:webp/1*aH9jfGjNkQi6cNvSkQFm0Q.gif)
---
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*QreXzGtj7dLN-EwMbCo_Kg.png)
## 1. 6278
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*JO6t1vRIFH46E6dNYXmw3g.png)
โจทย์ไฟล์ `6278.zip` มา ในไฟล์นี้มีไฟล์ zip ซ้อนเข้าไปเรื่อยๆ เป้าหมายของผมคือการแตกไฟล์ zip จนถึงไฟล์สุดท้ายสุดท้าย
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*lIm_Cp4vPeJ8ipbf61_6vA.png)
![img](https://miro.medium.com/v2/resize:fit:576/format:webp/1*WN7Y8XP55D_93Zg6habLcw.png)
![img](https://miro.medium.com/v2/resize:fit:466/format:webp/1*zWOoCcDMAEEXrepObcmR_w.png)
![img](https://miro.medium.com/v2/resize:fit:404/format:webp/1*nwQ68KcwbTO6Kp5DInP54g.png)
ตอนแรกว่าจะสแปมเปิดไปเรื่อยๆ แต่ไม่น่าทันเวลา\
ผมเลยเขียนโค้ด Python ในการแตกไฟล์ zip แบบอัตโนมัติ ทีละชั้นไปเรื่อยๆ จนกว่าเจอไฟล์สุดท้าย

```python
import zipfile
import os

# ระบุพาธไฟล์ ZIP ที่เริ่มต้น
zip_path = '/path/to/your/6278.zip'
extracted_folder = '/path/to/extracted_files/'  # โฟลเดอร์ที่จะแตกไฟล์

# สร้างโฟลเดอร์เพื่อเก็บไฟล์ที่แตกออก
os.makedirs(extracted_folder, exist_ok=True)

# ฟังก์ชันในการแตกไฟล์ ZIP
def extract_zip(file_path, destination):
    with zipfile.ZipFile(file_path, 'r') as zip_ref:
        zip_ref.extractall(destination)
        return zip_ref.namelist()

# เริ่มแตกไฟล์ ZIP
extracted_files = extract_zip(zip_path, extracted_folder)
# ตรวจสอบว่ามีไฟล์ ZIP อยู่ในผลลัพธ์หรือไม่
while any(f.endswith('.zip') for f in extracted_files):
    # หาไฟล์ ZIP ที่ถัดไป
    next_zip_file = next(f for f in extracted_files if f.endswith('.zip'))
    next_zip_path = os.path.join(extracted_folder, next_zip_file)

    # แตกไฟล์ ZIP ถัดไป
    extracted_files = extract_zip(next_zip_path, extracted_folder)

# เมื่อหมดการแตกไฟล์แล้ว ให้แสดงผลลัพธ์
extracted_files
```

แต่โน้ตบุ๊คผมช้าผมเลยให้ ChatGPT แตกไฟล์ให้
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*fE0peQ9zE1zqM-EhU8pWCg.png)
GPT แตกไฟล์จนได้ `flag.txt` ผมเลยให้ GPT เปิดไฟล์ดูเลย…\
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*JITDPCZc5rEa2uFTZnYa4g.png)

🚩หลังจากนั้นก็ได้ flag:

```
flag{n07h!in9_b347_j37_7w0_h01!d4y_627846261}
```

---

## 2. Recycle Secrets
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*tJwKJUqjW1O2rwlnpbwbXA.png)
โจทย์ให้ไฟล์ `recycle_secrets.zip` มา\
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*FYuiOS4hQWIFhGqVA8uQbw.png)
หลังจากแตกไฟล์จะได้เป็น `recycle_secrets.img` ซึ่งน่าจะเป็น disk image/forensic challenge โดย hint บอกว่าข้อมูลบางอย่างถูกซ่อนไว้ใน Recycle Bin ของ Windows
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*mF_nRt51nzAOLwedMhCY9w.png)
อย่างแรกตรวจดูว่าเป็นไฟล์อะไร ใช้ `file` ตรวจสอบ:

```bash
file recycle_secrets.img
```
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*45hLj-ZYB7sdqW9w7Kwnag.png)
ผลลัพธ์บอกว่าเป็น DOS/MBR boot sector, นั่นหมายถึงไฟล์นี้น่าจะเป็น FAT/NTFS image

hint บอกว่าข้อมูลบางอย่างถูกซ่อนไว้ใน Recycle Bin ของ Windows\
และใน Windows, Recycle Bin จะมีไฟล์ `$Ixxxx` และ `$Rxxxx`\
เราลองสแกน `strings`:

```bash
strings recycle_secrets.img | grep '\$R'
```

พบ `$R` และ `$I` หลายไฟล์ → บ่งบอกว่ามีไฟล์ถูกลบและ flag น่าจะซ่อนในนั้น

![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*Y-2_b49OMj76hJ-zFNkzgQ.png)

เลยลองให้ ChatGPT เขียน Python หา sequences:

```python
import re
data = open("recycle_secrets.img","rb").read()
for m in re.finditer(rb"[A-Za-z0-9]{20,60}", data):
    print(m.start(), m.group(0).decode('ascii', errors='replace'))
```
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*Y-2_b49OMj76hJ-zFNkzgQ.png)
เจอ string ที่ต่างจากอันอื่นแบบชัดเจน:

```
83312 246ovpbPtH1VEa1wFrVY9mqfuwJMZiku419ZZjz
```

เลยลองเอาเข้า CyberChef ให้ถอดรหัสให้
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*M74CzxmlFqKJiBYm2tqT1w.png)

🚩ได้ flag:

```
flag{recycle_bin_caught_you}
```

---

## 3. hideden_palyoad

โจทย์ใช้ไฟล์อิมเมจที่มีข้อมูลเข้ารหัสซ่อนอยู่ บทเรียนคือคีย์ที่มีตัวเลือกน้อยและการใช้โหมด ECB ทำให้ข้อมูลได้รับการป้องกันไม่เพียงพอ

---

## 4. sPhone Pro Max
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*FAzvJWB0472P_Z5gIuRXbA.png)
โจทย์ให้ไฟล์ `.ipa` มา: `thctt2025_junior_mobile1_sPhoneProMax.ipa`\
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*JAD1W1W8xivvH2mjDnQ9tw.png)
ไฟล์ `.ipa` คือ iOS Application Archive จริง ๆ แล้วก็คือ ZIP ที่มีโครงสร้าง `Payload/…`\


ผมเลยแตกไฟล์ออกมา:

```bash
unzip thctt2025_junior_mobile1_sPhoneProMax.ipa
```
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*0cm1xNZhco8A_ZGQapiphw.png)

ได้เป็นโฟลเดอร์ Payload ทีด้านในมี โฟลเดอร์ sPhoneProMax.app แล้วหลังจากเข้าไปก็ได้ไฟล์:

![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*iHWmCjd14oQAFWnn5oEotA.png)
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*iHWmCjd14oQAFWnn5oEotA.png)
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZUCYAM3bGhvRiSEbOCjJtw.png)

หลังได้ไฟล์แล้วผมเลยลองหา flag โดยใช้ strings แล้ว grep หา:
ซึ่ง flag pattern ที่โจทย์ให้มาคือ flag{}

อย่างแรกผม change directory เข้ามาในโฟลเดอร์ sPhoneProMax.app


```bash
cd Payload/sPhoneProMax.app/
```
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*kKSKNbfUkrugIx5hv4CohQ.png)

หลังจากนั้นผมก็ strings grep ไฟล์ทั้งหมดในโฟลเดอร์
```bash
cd strings * | grep "flag{"
```
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*uumJJCW092_lZmpo_NgeSQ.png)

🚩เจอ flag:

```
flag{b99182477f02207f6e26cf839a20ebfe}
```

---

## 5. Black Rock Shooter
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*4lyxw-m7T04enjE5va9o5w.png)
ข้อนี้ให้ไฟล์ zip มา: `thctt2025_junior_mobile2_BlackRockShooter.zip`\

![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*MQLUdMJLbpiN6IFqXzOVIA.png)

หลังจากแตกไฟล์ก็ได้เป็นไฟล์ : thctt2025_junior_mobile2_BlackRockShooter.apk

![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*JCZTrDmocP2w0EoCeRNBFA.png)

ไฟล์ .apk ก็คือ ZIP เช่นกัน สามารถแตกไฟล์ได้:

![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*q9paFB2gnKqo-5Mkpn1GXg.png)

ข้อนี้ไฟล์เยอะผมเลยใช้find ก่อนใช้ strings แล้ว grep หา:

```bash
find . -type f -exec strings -a {} \; | grep "flag{
```

![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*1chVaDe9RPXyZF97cTl4wg.png)

ผลคือ เจอ flag หลายอันมาก แต่ทุกอันเหมือนกันหมดคือ:

```
flag{b8b4efee48be709cd5b88ad9664e763f}
```

(แต่ตอนพิมพ์บรรทัดบอกได้ flag อันเดิมของข้อก่อน ซึ่งน่าจะผิดเล็กน้อย) เจ้าของระบุว่า:



🚩ได้ flag เป็น

```
flag{b99182477f02207f6e26cf839a20ebfe}
```

---
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*OmPqE8AX8ySMO-B2MyIGuQ.png)
## 6. medium_rare
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*2IWPziSSXi4tTeJ0GrmSJA.png)
![img](https://miro.medium.com/v2/resize:fit:570/format:webp/1*iiBLaWOm8_3mWW2NsP7HMg.png)
โจทย์ให้ไฟล์ `mediu_rare_challenge.zip` มา\
แตกไฟล์แล้วได้:

- `test_hardess.exe`
- `medium_rare.dll`
- `medium_rare.exp`

![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*Qftn4wc9yDSZg2X1vf8sNA.png)

คาดว่า flag ถูกซ่อนอยู่ในหนึ่งในไฟล์นี้\
เลยลองดึง string จาก `.dll` ด้วยคำสั่ง:

```bash
strings medium_rare.dll | grep -i flag
```

![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*7mdsBLu_t7sSmp8JaCIrcg.png)

ผลลัพธ์พบ flag 2 อัน คือ:

```
flag{fake_flag_try_harder_n00b}
flag{0b58400010f01d7e0fb096a565b553ab}
```

ผมเลยลองใส่ flag อันที่สองดู


🚩ได้ flag เป็น

```
flag{0b58400010f01d7e0fb096a565b553ab}
```

---
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*TuV_WypzKTgON-cI3zCLIw.png)
## 7. Die With a Smile *(ข้อนี้ข้อแจก)*
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*y6HUMjveM-tfcFofY0vRJg.png)
ข้อนี้ให้ไฟล์ zip มา เมื่อแตกไฟล์แล้วจะได้ PNG มา 2 รูป\
![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*5yLbu_byNb7VeoqNKULc2A.png)![img](https://miro.medium.com/v2/resize:fit:640/format:webp/1*iwdFeLsy1HjrP5K0IOIAfg.png)
เลยลองเอา QR code ไปสแกนดู…
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*BHCiFk_DuTh-yQ7AWVrFoA.png)

🚩ได้ flag:

```
flag{1d_w4nn4_b3_n3x7_70_y0u}
```

---
![img](https://miro.medium.com/v2/resize:fit:720/format:webp/1*uSZ-6nVdehY61PuNwk1YjQ.png)
## 8. Factor Wars

โจทย์นี้แสดงให้เห็นความเสี่ยงของการสร้างคีย์ RSA ด้วยการสุ่มที่คาดเดาได้ การสร้างคีย์จริงควรใช้ตัวสร้างเลขสุ่มที่ปลอดภัยและไลบรารีเข้ารหัสที่ผ่านการตรวจสอบ

---

## Thank for coming everyone
