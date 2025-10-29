# ⚙️ ECM - Equipment Checkout Management System

A full-stack web project built using **Java (Spring Boot)** for the backend and **HTML, CSS, and JavaScript** for the frontend.  
It allows users to browse equipment, place orders, and manage them efficiently.

---

## 🧠 Tech Stack

### Backend
- **Language:** Java 17  
- **Framework:** Spring Boot 3  
- **Build Tool:** Maven  
- **Database:** H2 (in-memory for local use)  
- **ORM:** Spring Data JPA  
- **Architecture:** RESTful API  

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

---

## 📁 Project Structure

ecm/
├── backend/
│ ├── src/main/java/com/srm/eyantra/
│ │ ├── controller/ # REST Controllers
│ │ ├── model/ # Entity Classes
│ │ ├── repository/ # JPA Repositories
│ │ ├── service/ # Service Layer
│ │ └── SrmEyantraApplication.java
│ ├── src/main/resources/
│ │ └── application.properties
│ └── pom.xml
│
├── css/
│ └── style.css
├── js/
│ ├── cart.js
│ ├── detail.js
│ ├── products.js
│ └── script.js
├── images/
├── videos/
├── index.html
├── login.html
└── cart.html


---

## 🧩 API Overview

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/orders/create` | Create one or more orders |
| `GET`  | `/api/orders` | Get all orders |
| `PUT`  | `/api/orders/{id}/status` | Update order status |

---

## 💻 Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ujjwalk2523/ecm.git
cd ecm/backend

2️⃣ Check Java & Maven

Ensure you have Java and Maven installed:

java -version
mvn -version

3️⃣ Start the Spring Boot Server
mvn spring-boot:run


Once started, the backend will be running at:
👉 http://localhost:8080

4️⃣ Access H2 Database Console

Open your browser and go to:
👉 http://localhost:8080/h2-console

Use the following credentials:

JDBC URL: jdbc:h2:mem:testdb
User Name: sa
Password: (leave blank)

🌐 Frontend

You can simply open the index.html file from the root folder in your browser,
or serve it locally using VS Code Live Server.

👨‍💻 Author
📧 ujjwalbhumi0@gmail.com
https://github.com/ujjwalk2523

🪪 License

This project is licensed under the MIT License.
