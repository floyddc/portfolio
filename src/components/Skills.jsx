import React, { useEffect, useState } from 'react';
import './css/Skills.css';
import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import skills from './json/Skills.json';
import { SKILLS_PATH } from './js/utils.js'

function Skills() {
  
  return (
    <div className="skills">
      <div className="cmd-container.show"> {/* div sarà di classe cmd-container.show se showWindow è vera */}
        <div className="cmd-toolbar">  {/* altrimenti rimarrà cmd-container */}
          <div className="cmd-buttons">
            <span className="cmd-button red"></span>
            <span className="cmd-button yellow"></span>
            <span className="cmd-button green"></span>
          </div>
          <div className="cmd-title">SKILLS</div>
        </div>
        <div className="cmd-window">
          <div className='skills-grid'>
            <ReactTooltip textColor='white' backgroundColor='#161a25' border />
              {skills.map(skill => (
                <img
                  key={skill.alt}
                  data-tip={skill.tooltip}
                  src={SKILLS_PATH+skill.src}
                  alt={skill.alt}
                  className="skillImg"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills