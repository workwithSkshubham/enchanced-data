import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Download, CheckCircle, ChevronDown } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState('day1');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const schedule = EVENT_DATA.timeline[activeDay] || [];

  // Generate .ics calendar download
  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//GeeksForGeeks Bennett University//Vibranium Vault//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:VIBRANIUM VAULT — GFG Bennett University
DESCRIPTION:Premier Marvel-Inspired Tech Symposium & 36-Hour Hackathon.
LOCATION:Auditorium 1 & Core Tech Labs, Bennett University, Greater Noida
DTSTART:20261024T033000Z
DTEND:20261025T153000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'vibranium-vault-schedule.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="timeline" className="section-spacing timeline-section" aria-label="Event Timeline">
      <div className="vault-container">
        {/* Section Header */}
        <div className="section-meta-header">
          <div>
            <div className="section-numeral">04 // PROTOCOL SCHEDULE</div>
            <h2 className="section-title">MISSION TIMELINE</h2>
          </div>
          <div className="timeline-header-actions">
            {/* Day Selector Tabs */}
            <div className="day-tabs-pill">
              <button
                onClick={() => {
                  setActiveDay('day1');
                  setExpandedIndex(null);
                }}
                className={`day-tab-btn ${activeDay === 'day1' ? 'is-active' : ''}`}
              >
                <span>DAY 01 // INCEPTION & FORGE</span>
              </button>
              <button
                onClick={() => {
                  setActiveDay('day2');
                  setExpandedIndex(null);
                }}
                className={`day-tab-btn ${activeDay === 'day2' ? 'is-active' : ''}`}
              >
                <span>DAY 02 // CLIMAX & PODIUM</span>
              </button>
            </div>

            {/* Calendar Export */}
            <button
              onClick={handleDownloadCalendar}
              className="btn-vault btn-vault-secondary calendar-export-btn"
              title="Download iCal (.ics) Calendar Invite"
            >
              <Download size={15} />
              <span>EXPORT .ICS</span>
            </button>
          </div>
        </div>

        {/* Timeline Swiss Dossier Layout */}
        <div className="timeline-dossier-wrapper">
          <div className="timeline-axis-line" aria-hidden="true" />

          <div className="timeline-events-list">
            {schedule.map((item, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={idx}
                  className={`timeline-item ${isExpanded ? 'is-expanded' : ''}`}
                  onClick={() => toggleExpand(idx)}
                >
                  {/* Left Column: Phase & Time */}
                  <div className="timeline-phase-col">
                    <div className="timeline-node-dot">
                      <span className="dot-inner" />
                    </div>
                    <span className="phase-id font-mono">PHASE {item.phase}</span>
                    <span className="phase-time font-mono">
                      <Clock size={12} />
                      {item.time}
                    </span>
                  </div>

                  {/* Main Event Content Card */}
                  <div className="timeline-card-content">
                    <div className="timeline-card-top">
                      <span className="hud-tag active">{item.tag}</span>
                      <span className="timeline-location font-mono">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-desc">{item.description}</p>

                    <div className="timeline-expand-toggle">
                      <span className="font-mono text-xs">
                        {isExpanded ? 'COLLAPSE BRIEFING' : 'VIEW BRIEFING NOTES'}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`expand-chevron ${isExpanded ? 'is-rotated' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
