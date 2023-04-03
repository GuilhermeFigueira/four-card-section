function App() {
	return (
		<div className="h-screen w-screen bg-gray">
			<header className="flex flex-col gap-4 py-24 md:py-16 px-8 text-center items-center">
				<div className="font-extralight text-blue-dark text-2xl md:text-4xl">
					<h1 className="">Reliable, efficient delivery</h1>
					<h2 className=" font-bold">Powered by Technology</h2>
				</div>
				<p className="text-sm text-blue-gray md:w-1/3 text-center">
					Our Artificial Intelligence powered tools use millions of
					project data points to ensure that your project is
					successful
				</p>
			</header>
			<main className="flex flex-col gap-8 px-8 md:grid md:grid-cols-3 md:grid-rows-2 md:items-center md:max-w-screen-xl md:mx-auto">
				<article className="border-cyan md:[grid-row:1/3] md:[grid-column:1/2]">
					<h3>Supervisor</h3>
					<p>Monitors activity to identify project roadblocks</p>
					<img
						src="/icon-supervisor.svg"
						alt="A Magnifying glass with an eye looking through it"
					/>
				</article>
				<article className="border-red md:[grid-row:1/2] md:[grid-column:2/3]">
					<h3>Team Builder</h3>
					<p>
						Scans our talent network to create the optimal team for
						your project
					</p>
					<img
						src="/icon-team-builder.svg"
						alt="A web page icon with an little house in front"
					/>
				</article>
				<article className="border-orange md:[grid-row:2/3] md:[grid-column:2/3]">
					<h3>Karma</h3>
					<p>Regularly evaluates our talent to ensure quality</p>
					<img
						src="/icon-karma.svg"
						alt="A shining yellow lamp with a gear inside it"
					/>
				</article>
				<article className="border-blue-regular md:[grid-row:1/3] md:[grid-column:3/4]">
					<h3>Calculator</h3>
					<p>
						Uses data from past projects to provide better delivery
						estimates
					</p>
					<img
						src="/icon-calculator.svg"
						alt="A monitor with some graphs"
					/>
				</article>
			</main>
			<div className="text-center pt-4 justify-self-end">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/guilhermefigueira"
					target="_blank"
					className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
				>
					Guilherme Figueira
				</a>
				.
			</div>
		</div>
	);
}

export default App;
