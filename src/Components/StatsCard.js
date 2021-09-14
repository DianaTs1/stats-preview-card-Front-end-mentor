import React from 'react';
import classes from './StatsCard.module.css';
import Stats from './Stats';
import mobileImage from '../images/image-header-mobile.jpg';

const StatsCard = () => {
	return (
		<React.Fragment>
			<section className={classes.layout}>
				<aside className={classes.image} />
				<Stats />
			</section>
		</React.Fragment>
	);
};

export default StatsCard;
