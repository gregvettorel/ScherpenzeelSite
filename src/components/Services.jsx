import React, { useState } from "react";
import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SectionReveal from "./SectionReveal";
import "../index.css";
import designImg from "../assets/design.png";
import Logo3D from "./Logo3D";
import logoW from "../assets/tinker.obj";

const items = [
	{
		title: "Custom made designs",
		desc: "From first sketch to a clickable prototype. We craft identities and interfaces that feel sharp, friendly, and on-point.",
		tags: ["Brand & Identity", "UI/UX", "Design Systems"],
		img: designImg,
		bg: "#F0F6FF",
	},
		{
		title: "Build your brand",
		desc: "We shape your roadmap, help you pick what to ship first, and measure the right things to keep momentum post-launch.",
		tags: ["Roadmapping", "MVP Scope", "Analytics"],
		img: designImg,
	},
		{
		title: "3D Integrations",
		desc: "We are always up to date with the newest trends in web development, which is why we offer 3D implementations in websites. This will either provide a helpful tool for your customer or simply blow them away!",
		tags: ["3D Modelling", "Arts"],
		img: designImg,
	},
	{
		title: "Host your website",
		desc: "We offor you a hands off, stress free, approach to having an online website. We will handle everything for you, from hosting the website, to applying any changes you need, which is never more than a phone call away!",
		tags: ["Website Hosting", "Deployment", "People Oriented"],
		img: designImg,
	},
];

export default function Services() {
	const [openIndex, setOpenIndex] = useState(-1);

	const sectionClass = "services-section section section-pad";

	return (
		<SectionReveal className={sectionClass}>
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
									onClick={() =>
										setOpenIndex((cur) => (cur === i ? -1 : i))
									}
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
											<p className="services-desc">{s.desc}</p>
											<div className="services-tags">
												{s.tags.map((t) => (
													<span className="services-tag" key={t}>
														{t}
													</span>
												))}
											</div>
										</div>

										<div className="services-media">
											<div className="services-media">
											{ s.title === "3D Integrations" ? (
											<Logo3D src={logoW} />
											) : (
											<img src={s.img} alt={s.title} />
											)}
											</div>
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

