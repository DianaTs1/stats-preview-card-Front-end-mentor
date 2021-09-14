import React from 'react';
import classes from './Stats.module.css';

const Stats = () => {
	return (
		<main className={classes['main-stats']}>
			<section className={classes['stats-wrapper']}>
				<h1 className={classes.headline}>
					Get <span>insights</span> that help your business grow
				</h1>
				<p className={classes.paragraph}>
					Discover the benefits of data analytics and make better decisions
					regarding revenue, customer exprience and overal efficiency.
				</p>
				<ul>
					<li>
						<h2>10K+</h2>
						<p>COMPANIES</p>
					</li>
					<li>
						<h2>314</h2>
						<p>TEMPLATES</p>
					</li>
					<li>
						<h2>12M+</h2>
						<p>QUERIES</p>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default Stats;
