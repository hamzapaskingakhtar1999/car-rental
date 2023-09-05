import React from "react";

/* CSS */
import "./Faq.css";

/* Images */
import faq from "../../assets/faq.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <div className="faq-container">
      <img src={faq} className="faq-image" />
      <div className="faq">
        <h3 className="faq-subheading">FAQ</h3>
        <h1 className="faq-heading">Frequently Asked Questions</h1>
        <p className="faq-description">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                style={{
                  color: "white",
                  backgroundColor: "#FF4D30",
                  fontSize: "20px",
                }}
              >
                What harsh truths do you prefer to ignore?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ fontSize: "18px" }}>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                style={{
                  color: "white",
                  backgroundColor: "#FF4D30",
                  fontSize: "20px",
                }}
              >
                Is free will real or just an illusion?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ fontSize: "18px" }}>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
