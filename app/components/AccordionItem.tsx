import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";
import { useInView } from "react-intersection-observer";

interface AccordionProps {
  open: boolean;
  toggle: () => void;
  title: string;
  description: string;
}

export const AccordionItem: React.FC<AccordionProps> = ({
  open,
  toggle,
  title,
  description,
}) => {
  // track if an element is on screen
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`py-4 ${inView ? "show" : "hide"}`}>
      <div
        className="py-1 px-12 flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-2xl sm:text-4xl font-semibold">{title}</p>
        <div className="text-2xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <hr className="mx-12 mb-4" />
      <Collapse isOpened={open}>
        <div className="px-12">
          <div className="">{description}</div>
        </div>
      </Collapse>
    </div>
  );
};
