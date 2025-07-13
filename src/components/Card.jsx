const QuestionCard = ({ question, answer }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">❓ {question}</h3>
            <p className="text-gray-700 leading-relaxed">💡 {answer}</p>
        </div>
    );
};

export default QuestionCard;
