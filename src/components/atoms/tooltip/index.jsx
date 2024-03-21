import './index.scss'

const Tooltip = ({ text, children }) => {

  return (
    <section className="tooltip">{children}
      <span className="tooltiptext">{text}</span>
    </section>
  );
};

export default Tooltip;
