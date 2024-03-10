import React from 'react';
import styles from './CentralQuote.module.css';

const CentralQuote: React.FC = () => {
  // Since images in the static folder are available in the root, you can reference them directly.
  const imageUrl = '/img/survey_report.webp'; // Path to the image in the static folder.
  return (
    <div className={styles.centralQuoteContainer}>
      {/* Use the variable for the image source */}
      <img src={imageUrl} alt="Central theme illustration" className={styles.centralImage} />
      <h2>MHIRA offers evidence based assessments and documentation for mental health</h2>
      <p>MHIRA is designed to fill the gap where electronic health records are not yet available or limited in their ability to support the specific needs of mental health care workers. It combines patient management functionality with the possibility to collect data for evidence based assessment in private clinics, hospitals, and at schools. It's central features are automatically generated health reports. </p>
    </div>
  );
};

export default CentralQuote;
