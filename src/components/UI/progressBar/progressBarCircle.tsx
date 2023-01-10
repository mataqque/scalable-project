export const ProgressBarCircle = (props: any) => {
	const {
		size = 150,
		progress = 0,
		trackWidth = 10,
		trackColor = `#ddd`,
		indicatorWidth = 10,
		indicatorColor = `#07c`,
		indicatorCap = `round`,
		label = `Loading...`,
		labelColor = `#333`,
		spinnerMode = false,
		spinnerSpeed = 1,
	} = props;
	const center = size / 2;
	const radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth);
	const dashArray = 2 * Math.PI * radius;
	const dashOffset = dashArray * ((100 - progress) / 100);

	console.log(dashOffset);
	return (
		<>
			<div className='svg-pi-wrapper' style={{ width: size, height: size }}>
				<svg className='svg-pi' style={{ width: size, height: size }}>
					<circle className='svg-pi-track' cx={center} cy={center} fill='transparent' r={radius} stroke={trackColor} strokeWidth={trackWidth} />
					<circle
						className={`svg-pi-indicator ${spinnerMode ? 'svg-pi-indicator--spinner' : ''}`}
						style={{ animationDuration: spinnerSpeed * 1000 + 'ms' }}
						cx={center}
						cy={center}
						fill='transparent'
						r={radius}
						stroke={indicatorColor}
						strokeWidth={indicatorWidth}
						strokeDasharray={dashArray}
						strokeDashoffset={dashOffset}
						strokeLinecap={indicatorCap}
					/>
				</svg>
			</div>
		</>
	);
};
