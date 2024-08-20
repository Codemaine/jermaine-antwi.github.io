// app/components/mdx-wrapper.js
'use client'
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

const components = {
  h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />
  // Add more custom components as needed
};

export default function MDXWrapper({ children }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}