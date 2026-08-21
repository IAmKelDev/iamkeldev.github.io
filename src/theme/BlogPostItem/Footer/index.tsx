import React, {type ReactNode} from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import type FooterType from '@theme/BlogPostItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import styles from './styles.module.css';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const {metadata} = useBlogPost();
  const isThought = metadata.permalink.startsWith('/thoughts');
  return (
    <>
      {isThought && <BlogPostItemHeaderInfo className={styles.infoInFooter}/>}
      <Footer {...props} />
    </>
  );
}
