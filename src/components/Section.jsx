import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  };
  render() {
    return (
      <section className={styles.section_cap}>
        <h2 className={styles.section_title}>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </section>
    );
  }
}
export default Section;
