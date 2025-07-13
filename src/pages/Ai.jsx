import React, { useEffect, useRef, useState } from 'react'
import * as tmImage from '@teachablemachine/image';

const MODEL_URL = 'https://teachablemachine.withgoogle.com/models/x29dA7LE7/'

function Ai() {
    const webcamRef = useRef(null)
    const [label, setLabel] = useState("")

    let model, webcam, maxPredictions;

    //Fungsi load model & webcam
    const loadModel = async () => {
        const modelUrl = MODEL_URL + 'model.json' //file model AI
        const metadataUrl = MODEL_URL + 'metadata.json'

        model = await tmImage.load(modelUrl, metadataUrl) // load model
        maxPredictions = model.getTotalClasses() //berapa banyak label / class

        webcam = new tmImage.Webcam(200, 200, true) // ukuran webcam
        await webcam.setup() //aktifkan webcam
        await webcam.play()// play webcamnya
        window.requestAnimationFrame(loop) //jalankan loop prediksi
        webcamRef.current.appendChild(webcam.canvas) //tampilkan webcam di halaman
    }

    //function loop agar webcam terus berjalan
    const loop = async () => {
        webcam.update() //ambil frame terbaru dari webcam
        await predict() //jalankan prediksi ai
        window.requestAnimationFrame(loop) //ulang terus
    }

    //prediksi dari AI model
    const predict = async () => {
        const prediction = await model.predict(webcam.canvas) //prediksi frame webcam
        const result = prediction.reduce((a, b) => (a.probability > b.probability ? a : b))
        setLabel(result.className) //ambil label/class prediksi tertinggi
    }

    useEffect(() => {
        loadModel()
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl font-bold text-purple-700 mb-4">
                ✨ AI Animal Classifier 🐶🐱✨
            </h1>

            <p className="text-lg text-gray-700 italic mb-6 max-w-xl">
                This camera will try to predict what animal is this in real time
            </p>

            <div className="mb-6 border-4 border-purple-300 rounded-xl overflow-hidden shadow-lg">
                <div ref={webcamRef} className="w-[200px] h-[200px]" />
            </div>

            <h2 className="text-2xl font-semibold text-purple-600 mt-2">
                🧠 Result: <span className="text-blue-800">{label}</span>
            </h2>

            <p className="mt-4 text-sm text-gray-600">
                {"(Try to move the picture to the camera 👀)"}
            </p>
        </div>

    )
}

export default Ai
