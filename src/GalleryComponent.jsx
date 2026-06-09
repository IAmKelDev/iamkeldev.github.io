import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function GalleryComponent() {
  const isBrowser = useIsBrowser();
  if(isBrowser)
  {
    const Gallery = require('@site/src/external/gallery/src/Gallery').default;
    return <Gallery
        apiPrefix={'https://api.keldev.net/gallery/'}
        photosPrefix={'https://gallery.keldev.net/'}
    />;
  }
  return (
    <div>Loading...</div>
  );
}

