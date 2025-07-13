import React from "react";
import QuestionCard from "../components/Card";
import { useNavigate } from "react-router-dom";

const FaqPage = () => {
    const navigate = useNavigate()
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
            <button onClick={() => navigate('/')} className="cursor-pointer">⬅️Go Back</button>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
                    🧠 Frequently Asked Questions (FAQ)
                </h1>


                <QuestionCard
                    question="What is Teachable Machine?"
                    answer="Teachable Machine is a Google tool that lets you train AI models like image, sound, or pose recognition — without writing code!"
                />
                <QuestionCard
                    question="Do I need a webcam to use this app?"
                    answer="Yes, this app uses your webcam to recognize images in real-time. Make sure you allow camera access in your browser."
                />
                <QuestionCard
                    question='Why do we use useRef with the webcam in React?'
                    answer=' Because the webcam returns a regular DOM element (canvas), not a React component. Using useRef lets you safely attach that element to your layout and keep it stable across re-renders.'
                />
                <QuestionCard
                    question=' Can I use image upload instead of webcam for AI prediction?'
                    answer='Yes! You can modify the code to accept uploaded images and run model.predict(image) instead of live webcam input. This is useful if users don’t want to grant camera access.'
                />
                <QuestionCard
                    question="Why do I need to add 'model.json' and 'metadata.json' to the MODEL_URL?"
                    answer="Because the base model URL only points to the folder, not the actual files. You need to explicitly load 'model.json' (which contains the model structure and weights) and 'metadata.json' (which contains class labels) so the AI can work properly."
                />


            </div>
        </section>
    );
};

export default FaqPage;
