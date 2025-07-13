import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <section className="min-h-screen bg-cover bg-center bg-no-repeat p-8 text-white"
            style={{
                backgroundImage: `url('https://i.pinimg.com/1200x/82/79/c8/8279c8dcd0d36a133a7d37464f00799e.jpg')`
            }}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">
                    🤖 About This AI Project
                </h1>

                <p className="text-lg mb-4 leading-relaxed text-black">
                    This project uses <span className="font-semibold">Teachable Machine</span>, a tool by Google
                    that allows you to train AI models for image, sound, or pose recognition — <span className="italic">without needing to code!</span>
                </p>

                <p className="text-lg mb-4 leading-relaxed text-black font-bold">
                    In this app, I trained a model to recognize animal images from the webcam (for example:
                    <span className="font-mono">dog</span>, <span className="font-mono">cat</span>, <span className="font-mono">bird</span>, etc.) and display the result on the screen in real time.
                </p>

                <div className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-purple-400">
                    <h2 className="text-2xl font-semibold mb-2 text-purple-600">🔍 How It Works</h2>
                    <ul className="list-disc list-inside space-y-2 text-base">
                        <li className="text-black">📷 The webcam captures live images</li>
                        <li className="text-black">🧠 The images are processed by an AI model trained with Teachable Machine</li>
                        <li className="text-black">🎯 The prediction result is displayed on the screen with high accuracy</li>
                    </ul>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-md italic text-gray-600 font-bold">
                        "AI is awesome — especially when it runs right in your browser!"
                    </p>
                </div>

                <div className="mt-6 flex justify-center gap-5">
                    <button
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 cursor-pointer"
                        onClick={() => navigate('/ai')}
                    >
                        🚀 Let's Go Testing!
                    </button>
                    <button
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 cursor-pointer"
                        onClick={() => navigate('/qa')}
                    >
                        🧐 Q & A!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
