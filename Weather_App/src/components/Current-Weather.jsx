import React from "react";

export default function CurrentWeather() {
	return (
		<div className="w-80 border rounded-md shadow-dark text-white bg-[#333] mt-5 mb-0 mx-auto pt-0 px-5 pb-5">
			<div className="flex justify-between items-center">
				<div>
					<p className="font-semibold text-base m-0 tracking-widest">City</p>
					<p className="font-normal text-sm m-0">Weather</p>
				</div>
				<img src="/01d.png" alt="" className="w-[100px]" />
			</div>
			<div className="flex justify-between items-center">
				<p className="font-semibold text-7xl w-auto tracking-tighter mt-2 mb-0">80°C</p>
				<div className="w-full pl-5">
					<div className="parameter">
						<span className="border-b border-white w-full">Details</span>
					</div>
					<div className="parameter">
						<span className="label">Feel</span>
						<span className="value">190°C</span>
					</div>
					<div className="parameter">
						<span className="label">Wind</span>
						<span className="value">2 m/s</span>
					</div>
					<div className="parameter">
						<span className="label">Humidity</span>
						<span className="value">15%</span>
					</div>
					<div className="parameter">
						<span className="label">Pressure</span>
						<span className="value">15</span>
					</div>
				</div>
			</div>
		</div>
	);
}
