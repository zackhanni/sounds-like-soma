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
    <div ref={ref} className={`py-6 ${inView ? "show" : "hide"}`}>
      <div
        className="py-1 px-12 flex justify-between items-center cursor-pointer text-white"
        onClick={toggle}
      >
        <p className="text-2xl sm:text-4xl font-semibold">{title}</p>
        <div className="text-2xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <hr className="mx-12" />
      <Collapse isOpened={open}>
        <div className="px-12 text-white">
          <div className="my-4">{description}</div>
        </div>
      </Collapse>
    </div>
  );
};
