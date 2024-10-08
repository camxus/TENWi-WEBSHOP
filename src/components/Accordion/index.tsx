import React, { useState } from "react";
import { ChevronDown } from "react-feather";

interface AccordionItem {
  title: string;
  body: React.ReactElement;
}

const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map(({ title, body }, index) => {
        const isOpen = open === index;

        return (
          <details className="mb-4">
            <summary
              className="cursor-pointer list-none appearance-none flex w-full text-slate-400 hover:text-black transition-all"
              onClick={() => setOpen((open) => (isOpen ? null : index))}
            >
              <div className="text-sm" style={{ flex: 1 }}>{title}</div>
              <ChevronDown
                width={15}
                className={`transform transition-transform duration-150 ${
                  isOpen ? "rotate-0" : "rotate-180"
                }`}
              />
            </summary>
            <div className="py-4">{body}</div>
          </details>
        );
      })}
    </div>
  );
};

export default Accordion;
