import PropTypes from "prop-types";

const Section = ({ children, title }) => {
    return (
        <section className="statistics">
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};