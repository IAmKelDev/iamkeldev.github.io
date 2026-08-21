import React, {type ReactNode} from 'react';
import Container from '@theme-original/BlogPostItem/Container';
import type ContainerType from '@theme/BlogPostItem/Container';
import type {WrapperProps} from '@docusaurus/types';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import styles from './styles.module.css';
import clsx from 'clsx';

type Props = WrapperProps<typeof ContainerType>;

export default function ContainerWrapper(props: Props): ReactNode {
  const {metadata} = useBlogPost();
  const isThought = metadata.permalink.startsWith('/thoughts');
  return (
    <>
      <Container
        {...props}
        className={clsx(props.className, isThought && styles.thoughtContainer)}
      />
    </>
  );
}
