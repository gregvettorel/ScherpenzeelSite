import React, { useState, useEffect, Suspense } from "react";
import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SectionReveal from "./SectionReveal";
import "../index.css";
import designImg from "../assets/design.png";
import { useLang } from "../context/LangContext";

// fallback images per row
const rowImg = [designImg, designImg, designImg, designImg];

const Logo3D = React.lazy(() => import("./Logo3D")); // load Three.js only if needed
// remove eager OBJ import to avoid pulling it on first load

export default function Services() {
	const [openIndex, setOpenIndex] = useState(-1);
	const [objSrc, setObjSrc] = useState(null); // lazy-load OBJ when a 3D row opens
	const { t } = useLang();
	const sectionClass = "services-section section section-pad";

	// Get localized items; fallback to EN structure if missing
	const items = t("services.items") || [];

	useEffect(() => {
		// if a panel opens and it's the 3D row, lazy-import the OBJ
		if (openIndex === -1) return;
		const title = (t("services.items")?.[openIndex]?.title || "").toString().toLowerCase();
		if (!title.includes("3d")) return;
		let canceled = false;
		import("../assets/tinker.obj").then(m => { if (!canceled) setObjSrc(m.default); });
		return () => { canceled = true; };
	}, [openIndex, t]);

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
											{s.title?.toLowerCase().includes("3d") ? (
												isOpen ? (
													<Suspense fallback={<img src={rowImg[i] || designImg} alt={s.title} loading="lazy" decoding="async" />}>
														<Logo3D src={objSrc || ""} />
													</Suspense>
												) : (
													<img src={rowImg[i] || designImg} alt={s.title} loading="lazy" decoding="async" />
												)
											) : (
												<img src={rowImg[i] || designImg} alt={s.title} loading="lazy" decoding="async" />
											)}
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