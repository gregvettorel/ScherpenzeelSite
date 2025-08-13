import React from "react";
import Step from "./Step";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import step4 from "../assets/step4.svg";
import "../styles/process-steps.css";

const steps = [
	{
		number: "01",
		title: "Discover",
		desc: "We start with a conversation to understand your goals, audience, and vision. This helps us create a clear plan for your project.",
		image: step1,
	},
	{
		number: "02",
		title: "Design",
		desc: "We translate your vision into a tailored visual concept in Figma. You'll see exactly how your product will look and function before we start building.",
		image: step2,
	},
	{
		number: "03",
		title: "Develop",
		desc: "Once you approve the design, we turn it into a fully functional product with attention to detail and smooth performance.",
		image: step3,
	},
	{
		number: "04",
		title: "Launch",
		desc: "Your product goes live, ready to make an impact. We stay available for adjustments, optimizations, and ongoing improvements.",
		image: step4,
	},
];

export default function ProcessSteps() {
	return (
		<section id="how-it-works" className="process-steps">
			<div className="process-steps__inner">
				<h2 className="section-title text-center mb-10">How it works</h2>

				{steps.map((step, i) => (
					<Step key={step.number} step={step} alt={i % 2 === 1} />
				))}
			</div>
		</section>
	);
}