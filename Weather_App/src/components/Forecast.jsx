import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const Week_Days = ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function Forecast({data}) {
  const dayWeek = new Date().getDay();
  const forecastDays = Week_Days.slice(dayWeek, Week_Days.length).concat(Week_Days.slice(0, dayWeek));

  return (
    <>
      <label className='text-2xl font-bold border-b border-black w-full'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0,7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='bg-[#f5f5] rounded-2xl h-10 m-1 flex items-center cursor-pointer text-sm py-1 px-5'>
                  <img 
                    src={`/${item.weather[0].icon}.png`} 
                    alt="weather" 
                    className='w-10' 
                  />
                  <label className='text-[#212121] flex-[1, 1] font-semibold'>{forecastDays[idx]}</label>
                  <label className='ml-auto'>{item.weather[0].description}</label>
                  <label className=''>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
