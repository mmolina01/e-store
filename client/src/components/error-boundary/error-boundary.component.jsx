import React from "react";

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {

	constructor() {
		super();

		this.state = {
			hasErrored: false
		};
	}

	static getDerivedStateFromError(error) {

		// process error
		return {
			hasErrored: true
		};
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return <div>
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
					<ErrorImageText>
						Something went wrong
					</ErrorImageText>
				</ErrorImageOverlay>
			</div>
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;