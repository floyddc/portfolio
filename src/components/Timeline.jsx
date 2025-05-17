import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { useTranslation } from 'react-i18next';
import './css/Timeline.css';
import 'react-vertical-timeline-component/style.min.css';
import experiences from './json/Experiences.json';
import { useEffect, useState } from 'react';

function Timeline() {
  
  return (
    <VerticalTimeline>

      {experiences.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element"
          date={item.date}
          iconStyle={{ background: 'rgb(22,21,21)' }}
          icon={
            <img 
              src={item.icon} 
              alt="Timeline icon" 
              style={{ width: '100%', height: '100%', borderRadius: '100%' }} 
            />
          }
        >
          <h3 
            className="vertical-timeline-element-title" 
            style={{ fontSize: "23px", textAlign: "left", color: "white" }}
          >
            {item.title}
          </h3>
          <h4 
            className="vertical-timeline-element-subtitle" 
            style={{ textAlign: "left", color: "white" }}
          >
            {item.subtitle}
          </h4>
          <p style={{ textAlign: "left" }}>
            {item.description}
          </p>
        </VerticalTimelineElement>
      ))}    
      
    </VerticalTimeline>
  )
}

export default Timeline