"use client";

import Link from "next/link";

export default function Navbar() {
	return (
		<header data-cy="navbar" className="bg-blue-950 text-2xl p-4">
			<nav className="flex justify-between">
				<div className="flex gap-12">
					<Link data-cy="book tickets" href="/">Home</Link>
					<Link href="/about">About</Link>
				</div>
				<Link href="/login">Log in</Link>
			</nav>
		</header>
	);
}
