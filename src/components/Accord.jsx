import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { PlusIcon } from "@heroicons/react/24/outline";

const Accord = ({ items }) => {
  return (
    <Accordion
      className="flex flex-col divide-y-2 divide-black bg-black"
      allowZeroExpanded
    >
      {items.map((item, i) => (
        <AccordionItem key={i}>
          <AccordionItemHeading>
            <AccordionItemButton className="flex items-center justify-between bg-white p-4 font-extrabold">
              {item.heading}
              <PlusIcon className="block h-6 w-6" />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="bg-white p-4 pl-6 leading-6">
            {Array.isArray(item.content) ? (
              <ul className="flex list-disc flex-col gap-6 pl-6">
                {item.content.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            ) : (
              item.content
            )}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Accord;
