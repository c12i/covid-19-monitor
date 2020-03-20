import React from 'react';

import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const ArticlePanel = ({ source, title, description, url, publishedAt }) => {
  const date = new Date(publishedAt);
  return (
  <Panel style={{ marginBottom: '10px' }} key={source} bordered>
    <h3>{title}</h3>
    <p>{description}... <a href={url}>Continue reading</a></p>
    <br />
    <small>{date.toDateString()}</small>
  </Panel>
)};

export default ArticlePanel;