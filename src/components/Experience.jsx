import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/experience.css';

function Experience(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.experiences, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        const { workTypes, experiences } = res;
        const processedData = experiences.map((item) => ({
          ...item,
          workType: workTypes[item.workTypeId],
        }));
        setData(processedData);
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />

      {data ? (
        <div className="section-content-container">
          <Timeline lineColor={theme.timelineLineColor}>
            {data.map((item) => (
              <Fade key={item.title}>
                <TimelineItem
                  key={item.title + item.dateText}
                  dateText={item.dateText}
                  dateInnerStyle={{ background: theme.accentColor, color: 'white' }}
                  bodyContainerStyle={{ padding: '0', background: 'transparent', boxShadow: 'none' }}
                >
                  {/* Custom Card Content */}
                  <div className="experience-card-content">
                    {/* Title */}
                    <h3 className="card-title">{item.title}</h3>

                    {/* Subtitle and Work Type */}
                    <div className="card-subtitle-container">
                      <h4 className="card-subtitle">{item.subtitle}</h4>
                      {item.workType && (
                        <span className="card-work-type">· {item.workType}</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="card-description">
                      <ReactMarkdown
                        children={item.workDescription}
                        components={{
                          p: 'span',
                        }}
                      />
                    </p>

                    {/* Key Skills */}
                    <div className="card-skills-container">
                      {item.keySkills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TimelineItem>
              </Fade>
            ))}
          </Timeline>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;