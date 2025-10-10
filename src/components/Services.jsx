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
import { useLang } from "../context/LangContext";

// fallback images per row
const rowImg = [designImg, designImg, designImg, designImg];

export default function Services() {
	const [openIndex, setOpenIndex] = useState(-1);
	const { t } = useLang();
	const sectionClass = "services-section section section-pad";

	// Get localized items; fallback to EN structure if missing
	const items = t("services.items") || [];

	return (
		<SectionReveal className={`${sectionClass}${openIndex !== -1 ? " is-open" : ""}`}>
			<h2 className="section-title services-title">{t("services.title")}</h2>
			<div className={`wrap${openIndex !== -1 ? " wrap--full" : ""} `}>
				<div className="services-list">
					{items.map((s, i) => {
						const isOpen = i === openIndex;
						const panelId = `service-panel-${i}`;
						const buttonId = `service-button-${i}`;

						return (
							<article key={s.title} className={`services-accordion${isOpen ? " open" : ""}`}>
								<button
									id={buttonId}
									className="services-toggle"
									aria-expanded={isOpen}
									aria-controls={panelId}
									onClick={(e) => {
										setOpenIndex((cur) => (cur === i ? -1 : i));
										e.currentTarget.blur();
									}}
								>
									<span className="services-row-title">{s.title}</span>
									<FontAwesomeIcon icon={faChevronDown} className="services-chevron" />
								</button>

								<div id={panelId} className="services-content" role="region" aria-labelledby={buttonId}>
									<div className="services-inner service-pad">
										<div>
											{/* desc can be array of paragraphs or string */}
											{Array.isArray(s.desc)
												? s.desc.map((p, idx) => (
														<p className="services-desc" key={idx}>
															{p}
															{idx === s.desc.length - 1 && s.link ? (
																<>
																	{" "}
																	<a
																		href={s.link.href}
																		target="_blank"
																		rel="noopener noreferrer"
																		style={{
																			color: "#2563eb",
																			background: "#f0f6ff",
																			padding: "2px 8px",
																			borderRadius: "6px",
																			textDecoration: "none",
																			fontWeight: 600,
																			transition: "background 0.2s, color 0.2s",
																		}}
																		onMouseOver={(e) => {
																			e.currentTarget.style.background = "#2563eb";
																			e.currentTarget.style.color = "#fff";
																		}}
																		onMouseOut={(e) => {
																			e.currentTarget.style.background = "#f0f6ff";
																			e.currentTarget.style.color = "#2563eb";
																		}}
																	>
																		{s.link.label}
																	</a>
																</>
															) : null}
														</p>
												 ))
												: <p className="services-desc">{s.desc}</p>
											}

											<div className="services-tags">
												{(s.tags || []).map((tag) => (
													<AboutChip key={tag} className="services-tag">{tag}</AboutChip>
												))}
											</div>
										</div>

										<div className="services-media">
											{s.title?.toLowerCase().includes("3d")
												? <Logo3D src={logoW} />
												: <img src={rowImg[i] || designImg} alt={s.title} />
											}
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