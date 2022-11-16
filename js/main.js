const timeline = gsap.timeline();
timeline.pause();

timeline.to("#home h1, #home h3", {
	opacity: 0,
	duration: 0.25,
});

timeline.to(
	"#about",
	{
		top: "0%",
		duration: 0.25,
	},
	0.15
);

timeline.from("#about h1,#about h2,#about h3", {
	translateX: "-125%",
	duration: 0.25,
	stagger: 0.1,
});

timeline.from("#about img", {
	translateX: "100%",
	opacity: 0,
	duration: 0.25,
});

timeline.to("#about", {
	top: "-100%",
	duration: 0.25,
	ease: "linear",
});

timeline.to(
	"#projects",
	{
		top: "0%",
		duration: 0.25,
		ease: "linear",
	},
	// 1.075
	timeline.duration() - 0.375
);

timeline.from(
	"#projects .card",
	{
		left: "-100%",
		scale: 1,
		duration: 1,
		// stagger: 0.1,
	},
	1.3
);

timeline.to("#projects", {
	top: "-100%",
	duration: 0.25,
});

timeline.to(
	"#contact",
	{
		top: "0%",
		duration: 0.25,
	},
	timeline.duration() - 0.375
);

timeline.from("#contact .form-about h1,h4", {
	translateX: "-125%",
	duration: 0.25,
	stagger: 0.1,
});

timeline.from("#contact .form .form-input", {
	translateX: "125%",
	duration: 0.25,
	stagger: 0.1,
});

timeline.from("#contact .form button", {
	opacity: 0,
	duration: 0.25,
});

window.addEventListener("scroll", () => {
	percent =
		window.scrollY / (document.body.scrollHeight - window.innerHeight);
	timeline.progress(percent);
});
