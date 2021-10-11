import PropTypes from 'prop-types';
import s from './SectionTitle.module.css';

function SectionTitle({ title, children }) {
  SectionTitle.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  return (
    <section className={s.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export default SectionTitle;
