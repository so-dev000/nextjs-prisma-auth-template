import { css } from '@emotion/css';

const container = css`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const title = css`
  color: #333;
  margin-bottom: 1rem;
`;

const description = css`
  color: #666;
  line-height: 1.6;
`;

export default function AboutPage() {
  return (
    <div className={container}>
      <h1 className={title}>About</h1>
      <p className={description}>このページについての情報</p>
    </div>
  );
}
