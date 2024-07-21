import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="pt-20 pl-14 pr-14 pb-20 bg-white" id="faq">
    <div className="items-center flex flex-row justify-center lg:justify-start lg:items-start">
      <h1 className="text-4xl font-bold">FAQ'S</h1>
    </div>
      <div className="flex lg:flex-row flex-col justify-between pt-8 lg:pr-0">
        <div className="flex flex-col">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the cost of a mobile application?
              </AccordionTrigger>
              <AccordionContent>
                Development terms directly depend on the requirements for the
                mobile <br /> application, the characteristics of the company, as well
                as the wishes of the <br /> customer. <br /> <br /> Average development time from
                start to finished application: <br /> Medium projects up to 3 months. <br />
                Large projects about 4-6 months. <br /> To get a more accurate estimate
                of the project completion time, it is <br /> necessary to determine the
                main task of the application, think over its logic and <br />
                functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do you provide a guarantee for the mobile application?
              </AccordionTrigger>
              <AccordionContent>
              Development terms directly depend on the requirements for the
                mobile <br /> application, the characteristics of the company, as well
                as the wishes of the <br /> customer. <br /> <br /> Average development time from
                start to finished application: <br /> Medium projects up to 3 months. <br />
                Large projects about 4-6 months. <br /> To get a more accurate estimate
                of the project completion time, it is <br /> necessary to determine the
                main task of the application, think over its logic and <br />
                functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex flex-col">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How long will development take?
              </AccordionTrigger>
              <AccordionContent>
              Development terms directly depend on the requirements for the
                mobile <br /> application, the characteristics of the company, as well
                as the wishes of the <br /> customer. <br /> <br /> Average development time from
                start to finished application: <br /> Medium projects up to 3 months. <br />
                Large projects about 4-6 months. <br /> To get a more accurate estimate
                of the project completion time, it is <br /> necessary to determine the
                main task of the application, think over its logic and <br />
                functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                I will not tell my idea, do you guarantee confidentiality?
              </AccordionTrigger>
              <AccordionContent>
              Development terms directly depend on the requirements for the
                mobile <br /> application, the characteristics of the company, as well
                as the wishes of the <br /> customer. <br /> <br /> Average development time from
                start to finished application: <br /> Medium projects up to 3 months. <br />
                Large projects about 4-6 months. <br /> To get a more accurate estimate
                of the project completion time, it is <br /> necessary to determine the
                main task of the application, think over its logic and <br />
                functionality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
