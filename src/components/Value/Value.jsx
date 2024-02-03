import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper" style={{ backgroundColor: "white" }}>
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="blueText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you.
            <br />
            We belive a good place to live can make your life better
          </span>
          <Accordion
            style={{ paddingRight: "25px" }}
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassname] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accordionButton ">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassname("expanded")
                            : setClassname("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
