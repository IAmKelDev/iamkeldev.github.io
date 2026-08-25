//NOTE: See the explanation for registering components to global scope here
// https://docusaurus.io/docs/markdown-features/react#mdx-component-scope

import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
// Import my global components
import InlineSpoiler from '@site/src/spoiler/SpoilerComponent';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  InlineSpoiler,
};