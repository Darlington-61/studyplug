# Study Plug - cPanel Database & Image Hosting Guide

This guide explains how to deploy the Study Plug backend to your cPanel hosting to store **thousands of past questions from 1980 to 2025** along with diagram images.

---

## 1. What's Included in `backend/`

1. **`studyplug_db.sql`**: Complete MySQL database structure with indexes on `(subject, exam_year)` and pre-loaded with authentic JAMB Physics & Mathematics questions.
2. **`api/db.php`**: Database connection file configured with PDO, UTF-8 character encoding, and CORS headers (allows your frontend to connect smoothly).
3. **`api/get_questions.php`**: REST API to fetch questions filtered by subject, year, topic, or randomized for mock exams.
4. **`api/get_years.php`**: Returns all available years and question counts.
5. **`api/import_questions.php`**: Bulk importer script to upload hundreds/thousands of questions in JSON format.
6. **`api/upload_image.php`**: File upload handler for circuit, optics, and mechanics diagrams.
7. **`uploads/diagrams/`**: Directory for storing question diagram images.

---

## 2. Step-by-Step cPanel Deployment (3-5 Minutes)

### Step A: Create MySQL Database & User
1. Log in to your **cPanel**.
2. Under **Databases**, click **MySQL® Database Wizard**.
3. **Step 1 - Create A Database**: Enter a name, e.g. `studyplug` (Full name will be `yourcpaneluser_studyplug`). Click **Next Step**.
4. **Step 2 - Create Database Users**: Enter a username (e.g. `pluguser`) and a secure password. Click **Create User**.
5. **Step 3 - Add User to Database**: Check **ALL PRIVILEGES** and click **Make Changes**.
6. Note down:
   - Database Name
   - Database Username
   - Database Password

### Step B: Import `studyplug_db.sql`
1. Go back to cPanel home, click **phpMyAdmin** under Databases.
2. In the left sidebar, click on your newly created database (`yourcpaneluser_studyplug`).
3. Click the **Import** tab at the top.
4. Click **Choose File** and select `backend/studyplug_db.sql`.
5. Click **Import** (or **Go**).
6. You will see green success messages: the `questions` and `subjects` tables are created and seeded with authentic questions!

### Step C: Upload API Files via cPanel File Manager
1. In cPanel, click **File Manager**.
2. Open `public_html`.
3. Create a folder named `api` (or `studyplug/api`).
4. Upload the files inside `backend/api/` into this folder:
   - `db.php`
   - `get_questions.php`
   - `get_years.php`
   - `import_questions.php`
   - `upload_image.php`
5. In `public_html` (or `studyplug/`), create a folder named `uploads` and inside it `diagrams` with write permissions (755).

### Step D: Update Database Credentials in `db.php`
1. In File Manager, right-click `db.php` and click **Edit**.
2. Update lines 18–21:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'yourcpaneluser_studyplug'); // your actual db name
   define('DB_USER', 'yourcpaneluser_pluguser');  // your actual db user
   define('DB_PASS', 'your_actual_password');    // your actual password
   ```
3. Click **Save Changes**.

---

## 3. Test Your Live API in the Browser

Open your browser and visit:
`https://yourdomain.com/api/get_questions.php?subject=Physics&year=2024`

You should immediately see formatted JSON containing all Physics 2024 questions!

---

## 4. Connect Study Plug App to Your cPanel

1. In the Study Plug web app, click the **cPanel Cloud Sync** button (in the top navigation bar or settings).
2. Paste your cPanel API URL:
   `https://yourdomain.com/api`
3. Click **Test Connection**. You will see:
   `✓ Connected successfully! Server returned questions.`
4. Click **Save & Connect**.
5. Study Plug will now query your cPanel database directly for all subjects and years!

---

## 5. How to Store 100+ Questions per Year with Images

### A. Bulk Importing JSON Questions
You can POST JSON batches directly to `https://yourdomain.com/api/import_questions.php?api_key=studyplug_secret_2026`.

Each question object can have:
```json
[
  {
    "subject": "Physics",
    "exam_year": 2024,
    "question_num": 1,
    "text": "In the circuit diagram shown above, calculate the total resistance...",
    "image_url": "https://yourdomain.com/uploads/diagrams/circuit_2024_01.png",
    "option_a": "2 Ω",
    "option_b": "4 Ω",
    "option_c": "6 Ω",
    "option_d": "8 Ω",
    "correct_answer": "B",
    "explanation": "Resistors R1 and R2 are in parallel: (4 * 4)/(4 + 4) = 2 Ω. Adding in series with R3 gives 4 Ω.",
    "topic": "Current Electricity",
    "difficulty": "Medium"
  }
]
```

### B. Uploading Diagram Images
- Upload diagram images directly to `public_html/uploads/diagrams/` via cPanel File Manager or FTP.
- Or use the upload endpoint `api/upload_image.php` with multipart form data `image`.
- The `image_url` field in the database can be a relative path (`uploads/diagrams/diagram_name.png`) or full URL (`https://yourdomain.com/uploads/diagrams/...`). The frontend renders it automatically above the question options!
