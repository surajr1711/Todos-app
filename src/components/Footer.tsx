const links = [
	{ name: "Github", url: "https://github.com/surajr1711/" },
	{ name: "Portfolio", url: "https://simple-portfolio-xi-rosy.vercel.app/#contact" },
	{ name: "Linkedin", url: "https://www.linkedin.com/in/surajr1711" },
];

const Footer = () => {
	return (
		<footer className="flex-none border-t pt-4">
			<ul className="flex gap-8 justify-center">
				{links.map((link, i) => (
					<li key={i}>
						<a href={link.url} target="_blank" rel="noopener noreferrer" className="underline text-sm">
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
