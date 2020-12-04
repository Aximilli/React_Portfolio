import React from 'react';
import react, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png"
							alt="User"
							className="avatar  "
						/>
						<div className="banner-text">
							<h1>Database Developer</h1>
							<hr />
							<p>SQL Development | Data Analysis | Machine Learning | Web Development</p>

							<div className="social-links">
								{/*Instagram*/}
								<a
									href="https://www.instagram.com/aximillidaz/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />
								</a>
								{/*Github*/}
								<a href="https://github.com/Aximilli" rel="noopener noreferrer" target="_blank">
									<FontAwesomeIcon icon={[ 'fab', 'github' ]} />
								</a>
								{/*Linkedin*/}
								<a
									href="https://www.linkedin.com/in/matthieu-thomas-984ba8110/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FontAwesomeIcon icon={[ 'fab', 'linkedin' ]} />
								</a>
								{/*Facebook*/}
								<a
								   href="https://www.facebook.com/matthieu.thomas2"
								   rel="noopener noreferrer"
									target="_blank"
								>
									<FontAwesomeIcon icon={[ 'fab', 'facebook' ]} />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Home;
