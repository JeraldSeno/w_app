import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";

const Week_Days = [
	"Monday",
	"Tuesday",
	"Wensday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

export default function Forecast({ data }) {
	const dayWeek = new Date().getDay();
	const forecastDays = Week_Days.slice(dayWeek, Week_Days.length).concat(
		Week_Days.slice(0, dayWeek)
	);

	return (
		<>
			<label className="text-2xl font-bold border-b border-black w-full flex mr-6">
				Daily
			</label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className="bg-[#f5f5f5] rounded-2xl h-10 m-1 flex items-center cursor-pointer text-sm py-1 px-5">
									<img
										src={`/${item.weather[0].icon}.png`}
										alt="weather"
										className="w-10"
									/>
									<label className="text-[#212121] flex-1 font-semibold">
										{forecastDays[idx]}
									</label>
									<label className="ml-auto flex-1 text-right">
										{item.weather[0].description} &nbsp;
									</label>
									<label className="text-[#757575]">
										{Math.round(item.main.temp_max)}°C
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
              <div className="details-grid">
                <div className="details-grid-item">
                  <label className="py-1 px-5">Pressure</label>
                  <label className="py-1 px-5">{item.main.pressure}p</label>
                </div>
                <div className="details-grid-item">
                  <label className="py-1 px-5">Humidity</label>
                  <label className="py-1 px-5">{item.main.humidity}</label>
                </div>
                <div className="details-grid-item">
                  <label className="py-1 px-5">Clouds</label>
                  <label className="py-1 px-5">{item.clouds.all}%</label>
                </div>
                <div className="details-grid-item">
                  <label className="py-1 px-5">Wind</label>
                  <label className="py-1 px-5">{item.wind.speed} m/s</label>
                </div>
                <div className="details-grid-item">
                  <label className="py-1 px-5">Sea Level</label>
                  <label className="py-1 px-5">{item.main.sea_level}m</label>
                </div>
                <div className="details-grid-item">
                  <label className="py-1 px-5">Feel like:</label>
                  <label className="py-1 px-5">{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
}
