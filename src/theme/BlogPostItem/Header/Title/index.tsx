import React, {type ReactNode} from 'react';
import Title from '@theme-original/BlogPostItem/Header/Title';
import type TitleType from '@theme/BlogPostItem/Header/Title';
import type {WrapperProps} from '@docusaurus/types';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import styles from './styles.module.css';
import clsx from 'clsx'

type Props = WrapperProps<typeof TitleType>;

export default function TitleWrapper(props: Props): ReactNode {
  const {metadata} = useBlogPost();
  const isThought = metadata.permalink.startsWith('/thoughts');
  return (
    <>
      <Title
        {...props}
        className={clsx(props.className, isThought && styles.thoughtTitle)}
      />
    </>
  );
}
