import React, { useState } from "react";
import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SectionReveal from "./SectionReveal";
import "../index.css";
import designImg from "../assets/design.png";
import Logo3D from "./Logo3D";
import logoW from "../assets/tinker.obj";
import AboutChip from "./AboutChip";

const items = [
	{
		title: "Custom made designs",
		desc: (<>"From the first sketch to a fully interactive prototype, we guide you through every step of the design journey. We craft unique brand identities and intuitive interfaces that not only look sharp and friendly, but also resonate with your audience.<br></br><br></br>Our collaborative approach ensures your vision is translated into a design system that’s both beautiful and effective—setting the stage for your project’s success."</>),
		tags: ["Brand & Identity", "UI/UX", "Design Systems"],
		img: designImg,
		bg: "#F0F6FF",
	},
	{
		title: "Build your brand",
		desc: "Branding often forms the first impression of your company. We help you shape your roadmap, decide what to launch first, and measure the right things to keep momentum after launch. With a strong brand foundation, you’ll stand out and connect with your audience from the very start.\n\nAt Wako, we can help you shape this image to fit your unique needs.",
		tags: ["Roadmapping", "MVP Scope", "Analytics"],
		img: designImg,
	},
	{
		title: "3D Integrations",
		desc: (
			<>
				We are always up to date with the newest trends in web development, which is why we offer 3D implementations in websites.<br /><br />
				This will either provide a helpful tool for your customer, check our customisable sneaker store as an example:&nbsp;
				<a
					href="/work/swear"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "#2563eb",
						background: "#f0f6ff",
						padding: "2px 8px",
						borderRadius: "6px",
						textDecoration: "none",
						fontWeight: 600,
						transition: "background 0.2s, color 0.2s"
					}}
					onMouseOver={e => {
						e.target.style.background = "#2563eb";
						e.target.style.color = "#fff";
					}}
					onMouseOut={e => {
						e.target.style.background = "#f0f6ff";
						e.target.style.color = "#2563eb";
					}}
				>
					Swear Sneaker Store
				</a>
			</>
		),
		tags: ["3D Modelling", "Arts"],
		img: designImg,
	},
	{
		title: "Host your website",
		desc: "We offor you a hands off, stress free, approach to having an online website. We will handle everything for you, from hosting the website, to applying any changes you need, which is never more than a phone call away!\n\nThink of us as your single point of contact for all your digital needs.",
		tags: ["Website Hosting", "Deployment", "People Oriented"],
		img: designImg,
	},
];

export default function Services() {
	const [openIndex, setOpenIndex] = useState(-1);

	const sectionClass = "services-section section section-pad";

	return (
		<SectionReveal className={`${sectionClass}${openIndex !== -1 ? " is-open" : ""}`}>
			<h2 className="section-title services-title">What we do</h2>
			<div className={`wrap${openIndex !== -1 ? " wrap--full" : ""} `}>
				<div className="services-list">
					{items.map((s, i) => {
						const isOpen = i === openIndex;
						const panelId = `service-panel-${i}`;
						const buttonId = `service-button-${i}`;

						return (
							<article
								key={s.title}
								className={`services-accordion${isOpen ? " open" : ""}`}
							>
								<button
									id={buttonId}
									className="services-toggle"
									aria-expanded={isOpen}
									aria-controls={panelId}
									onClick={(e) => {
										setOpenIndex((cur) => (cur === i ? -1 : i));
										e.currentTarget.blur();           // clear focus -> no sticky state
									}}
								>
									<span className="services-row-title">{s.title}</span>
									<FontAwesomeIcon
										icon={faChevronDown}
										className="services-chevron"
									/>
								</button>

								<div
									id={panelId}
									className="services-content"
									role="region"
									aria-labelledby={buttonId}
								>
									<div className="services-inner service-pad">
										<div>
											{(s.title === "Build your brand" || s.title === "Host your website") && typeof s.desc === "string" && s.desc.includes("\n\n") ? (
												s.desc.split("\n\n").map((part, idx) => (
													<p className="services-desc" key={idx}>{part}</p>
												))
											) : (
												<p className="services-desc">{s.desc}</p>
											)}
											<div className="services-tags">
												{s.tags.map((t) => (
													<AboutChip key={t} className="services-tag">{t}</AboutChip>
												))}
											</div>
										</div>

										<div className="services-media">
											{(s.title === "3D Integrations" ? (
												<Logo3D src={logoW} />
											) : (
												<img src={s.img} alt={s.title} />
											))}
										</div>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</SectionReveal>
	);
}