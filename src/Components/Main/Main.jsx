import React, { Component } from 'react';
import './main.scss';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.

export default class Main extends Component {
  removeBtnHandler = (system, array) => {
    let index = array.json.tabs[2].data.systems.indexOf(system);
    array.json.tabs[2].data.systems.splice(index, 1);
    this.setState({
      json: array,
    });
  };

  render() {
    let array = this.props.json.tabs[2].data;
    let arr = this.props;
    return (
      <div className="main">
        <h2>Systems</h2>
        <div className="system-title">
          <span>System Name</span>
          <span>ID</span>
          <span>Created date</span>
          <span>Active Licenses</span>
          <span>&nbsp;</span>
        </div>
        <Accordion allowMultipleExpanded allowZeroExpanded>
          {array.systems.map((system) => {
            return (
              <AccordionItem key={system.id}>
                <div className="system-container" key={system.id}>
                  <div className="system-block">
                    <AccordionItemButton>
                      <span
                        className="accordion-btn"
                        onClick={() => {
                          this.btnToggleHandler();
                        }}
                      >
                        <div>
                          <i className="fas fa-sort-down"></i>
                        </div>
                        {system.system_name}
                      </span>
                    </AccordionItemButton>
                    <span>{system.id}</span>
                    <span>{system.created_date}</span>
                    <span>{system.active_licenses}</span>
                    <button
                      onClick={() => {
                        this.removeBtnHandler(system, arr);
                      }}
                    >
                      Remove
                    </button>
                  </div>

                  <AccordionItemPanel>
                    <div className="system-licenses">
                      <div className="license-title">
                        <span>Licenses</span>
                        <span>Expires</span>
                      </div>
                      {array.subsystems
                        .filter((sys) => {
                          return sys.system_id === system.id;
                        })
                        .map((sub, index) => {
                          return (
                            <div className="license" key={index}>
                              <span>{sub.licenses}</span>
                              <span>{sub.expires}</span>
                            </div>
                          );
                        })}
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    );
  }
}
