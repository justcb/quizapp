import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'I prefer clear rules to follow.',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'The world is better when people can do what they want.',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'Flase', isCorrect: true },
			],
		},
		{
			questionText: 'I would rather be an independent contractor than work in a big corporation.',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'I prefer to select my own goals than have them told to me.',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'I am a ...',
			answerOptions: [
				{ answerText: 'Shark, I hunt alone.', isCorrect: false },
				{ answerText: 'Wolf, I hunt in packs.', isCorrect: true },
			],
		},

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>

					You scored {score}.  That suggests that you should be in Order.  But the choice is yours.  Choose below.
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
