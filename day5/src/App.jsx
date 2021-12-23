import { useEffect, useState } from "react";
import "./App.css";

const episodes = [
	{
		id: 1,
		checked: false,
		name: "James Q Quick's Origin Story",
	},
	{
		id: 2,
		checked: false,
		name: "Amy Dutton's Origin Story",
	},
	{
		id: 3,
		checked: false,
		name: "The Tech Behind Compressed.fm",
	},
	{
		id: 4,
		checked: false,
		name: "Starting a New Development Project",
	},
	{
		id: 5,
		checked: false,
		name: "How Do you Start a New Design Project?",
	},
	{
		id: 6,
		checked: false,
		name: "Freelancing (Part 1)",
	},
	{
		id: 7,
		checked: false,
		name: "Freelancing (Part 2)",
	},
	{
		id: 8,
		checked: false,
		name: "The Tech Behind jamesqquick.com",
	},
	{
		id: 9,
		checked: false,
		name: "Teh Tech Behind SelfTeach.me",
	},
	{
		id: 10,
		checked: false,
		name: "Design Fundamentals (Part 1)",
	},
	{
		id: 11,
		checked: false,
		name: "Design Fundamentals (Part 2)",
	},
	{
		id: 12,
		checked: false,
		name: "Productivity: Tools, Tips, and Workflows",
	},
	{
		id: 13,
		checked: false,
		name: "The Future of Code with No Code",
	},
	{
		id: 14,
		checked: false,
		name: "Building the Perfect Desk Setup",
	},
	{
		id: 15,
		checked: false,
		name: "Everything You Need to Know to Get Started in SvelteKit",
	},
	{
		id: 16,
		checked: false,
		name: "Live Streaming for Beginners",
	},
	{
		id: 17,
		checked: false,
		name: "All Things Automated",
	},
	{
		id: 18,
		checked: false,
		name: "Amy Gives James a Design Consult",
	},
	{
		id: 19,
		checked: false,
		name: "Figma for Everyone",
	},
	{
		id: 20,
		checked: false,
		name: "Learning and Building in Public",
	},
	{
		id: 21,
		checked: false,
		name: "Getting Your First Dev Job",
	},
	{
		id: 22,
		checked: false,
		name: "Hiring a Designer or Getting Your First UI / UX Job",
	},
	{
		id: 23,
		checked: false,
		name: "IRL Freelance Proposal",
	},
	{
		id: 24,
		checked: false,
		name: "Getting Started on YouTube",
	},
	{
		id: 25,
		checked: false,
		name: "Starting your own Podcast",
	},
	{
		id: 26,
		checked: false,
		name: "How Blogging Can Change Your Career",
	},
	{
		id: 27,
		checked: false,
		name: "Talking to Some of Our Favorite Content Creators",
	},
	{
		id: 28,
		checked: false,
		name: "Our Favorite Things: A Crossover Episode with Web Dev Weekly",
	},
	{
		id: 29,
		checked: false,
		name: "Freelancing IRL: Unveiling a Site Redesign",
	},
	{
		id: 30,
		checked: false,
		name: "Wordpress in 2021",
	},
	{
		id: 31,
		checked: false,
		name: "Struggle Bus",
	},
	{
		id: 32,
		checked: false,
		name: "Getting Started with TypeScript",
	},
	{
		id: 33,
		checked: false,
		name: "Small Design Tweaks that Make All the Difference",
	},
	{
		id: 34,
		checked: false,
		name: "Getting git",
	},
	{
		id: 35,
		checked: false,
		name: "Crossover Episode with Purrfect Dev",
	},
	{
		id: 36,
		checked: false,
		name: "SVGs FTW",
	},
	{
		id: 37,
		checked: false,
		name: "Building a Course",
	},
];

function App() {
	const [prev, setPrev] = useState(null);
	const [shift, setShift] = useState(false);

	const onChange = (e, index) => {
		if (!shift) {
			episodes[index].checked = !episodes[index].checked;
		} else if (shift) {
			const m = [...map];
			const min = Math.min(prev, index);
			const max = Math.max(prev, index);
			for (let i = min; i <= max; i++) m[i] = true;
			console.log(m);
			setMap(m);
		}
	};

	const onKeyDown = (e) => {
		if (e.key.toLowerCase() === "shift") setShift(true);
	};

	const onKeyUp = (e) => {
		if (e.key.toLowerCase() === "shift") setShift(false);
	};

	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);

		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
		};
	}, [onKeyDown, onKeyUp]);

	return (
		<div className="wrapper">
			<div className="cover">
				<img src="/podcast-cover.png" alt="Compressed.fm" />
			</div>
			<div className="content">
				<h1>Listen to all the Compressed.fm Episodes</h1>
				<ul className="episodes">
					{episodes.map((episode, index) => (
						<li key={episode.id}>
							<label htmlFor={`episode-${episode.id}`}>
								<input
									type="checkbox"
									name={`episode-${episode.id}`}
									id={`episode-${episode.id}`}
									checked={episode.checked}
									onChange={(e) => onChange(e, index)}
									onInput={() => setPrev(episode.id)}
								/>
								<span>
									{episode.id} || {episode.name}
								</span>
							</label>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
