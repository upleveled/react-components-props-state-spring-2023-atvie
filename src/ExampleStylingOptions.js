/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styles from './ExampleStylingOptions.module.scss';

const lionStyles = css`
  border: solid 3px orange;
  border-radius: 10% / 50%;
  padding: 5px;
`;

export default function ExampleStylingOptions() {
  return (
    <div>
      {/* style prop */}
      <div
        style={{
          border: 'solid 3px gray',
          borderRadius: '30px',
          padding: '5px',
        }}
      >
        elephant
      </div>
      {/* CSS-in-JS with emotion  */}
      <div css={lionStyles}>lion</div>

      {/* CSS Modules */}
      <div className={styles.mouse}>mouse</div>
    </div>
  );
}
