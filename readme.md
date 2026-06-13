# 🥔 CNN-Based Potato Leaf Disease Detection

An AI-powered web application that detects potato leaf diseases from uploaded leaf images using a Convolutional Neural Network (CNN). The application combines a FastAPI backend with a modern React + TypeScript frontend to provide fast and accurate disease predictions.

---

## 📖 Overview

Potato crops are highly susceptible to diseases such as Early Blight and Late Blight, which can significantly reduce agricultural productivity. This project leverages Deep Learning and Computer Vision techniques to automatically classify potato leaf images into different disease categories.

The system allows users to upload a potato leaf image and instantly receive a disease prediction along with a confidence score.

---

## 🚀 Features

✅ Upload potato leaf images

✅ CNN-based disease classification

✅ FastAPI REST API backend

✅ React + TypeScript frontend

✅ Real-time prediction results

✅ Confidence score display

✅ Responsive and modern UI


---

## 🎯 Disease Classes

The model can classify potato leaves into the following categories:

| Class | Description |
|---------|-------------|
| Potato Healthy | Healthy potato leaf |
| Potato Early Blight | Fungal disease causing brown lesions |
| Potato Late Blight | Severe disease causing dark patches and rapid crop damage |

---

## 🏗️ Project Structure

```text
CNN-Based-Potato-Leaf-Disease-Detection/
│
├── api/
│   ├── core/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── dist/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── ...
│
├── Potato___Early_blight/
├── Potato___healthy/
├── Potato___Late_blight/
│
├── saved_models/
│   ├── 1.h5
│   └── 1.keras
│
├── potato_disease_classification_model.ipynb
│
└── README.md
```

---

## 🧠 Deep Learning Model

### Model Type

- Convolutional Neural Network (CNN)
- Multi-Class Image Classification

### Framework

- TensorFlow
- Keras

### Input

- Potato leaf image

### Output

- Potato Healthy
- Potato Early Blight
- Potato Late Blight

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Python
- Uvicorn

### Machine Learning

- TensorFlow
- Keras
- NumPy
- OpenCV
- Pillow

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-potato-disease-detection.git

cd ai-potato-disease-detection
```

---

## 2️⃣ Backend Setup

Navigate to the API directory:

```bash
cd api
```

### Create Virtual Environment

#### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

#### Linux / MacOS

```bash
python3 -m venv venv

source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run FastAPI Server

```bash
uvicorn main:app --reload
```

Backend will run at:

```text
http://localhost:8000
```

### API Documentation

Swagger UI:

```text
http://localhost:8000/docs
```

ReDoc:

```text
http://localhost:8000/redoc
```

---

## 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

---

## 🔌 API Endpoint

### Predict Disease

```http
POST /predict
```

### Request

```text
Content-Type: multipart/form-data
```

Parameter:

```text
image: potato_leaf.jpg
```

### Sample Response

```json
{
  "prediction": "Potato___Late_Blight",
  "confidence": 98.72
}
```

---

## 🔄 Application Workflow

```text
User Uploads Leaf Image
            │
            ▼
     React Frontend
            │
            ▼
      FastAPI Backend
            │
            ▼
   Image Preprocessing
            │
            ▼
      CNN Prediction
            │
            ▼
 Prediction + Confidence
            │
            ▼
      Result Display
```

---

## 📊 Dataset

This project uses potato leaf images belonging to:

- Potato Healthy
- Potato Early Blight
- Potato Late Blight

Dataset Source:

PlantVillage Dataset

---

## 📸 Screenshots

### Home Page

Add screenshot here:

```text
screenshots/home.png
```

### Prediction Result

Add screenshot here:

```text
screenshots/result.png
```

---

## 📈 Future Enhancements

- Disease treatment recommendations
- Support for additional crop diseases
- Mobile application
- Multi-language support
- Cloud deployment
- Real-time camera detection
- Disease severity estimation

---

## 💼 Resume Highlights

- Developed an end-to-end AI-powered disease classification system.
- Built REST APIs using FastAPI.
- Designed a responsive frontend using React and TypeScript.
- Integrated a Deep Learning model with a production-ready backend.
- Applied Computer Vision techniques in the agriculture domain.
- Implemented image preprocessing and CNN-based inference pipeline.

---

## 🤝 Contributing

Contributions are welcome.

### Steps

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

### Abhishek Singla

B.Tech Computer Science Engineering

AI/ML Enthusiast | Full Stack Developer

GitHub: https://github.com/your-github-username

LinkedIn: https://linkedin.com/in/your-linkedin-profile

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

Your support helps improve the project and encourages future development.

---
Made with ❤️ using FastAPI, React, TypeScript, and TensorFlow.