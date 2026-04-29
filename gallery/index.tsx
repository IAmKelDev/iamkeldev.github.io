import React from 'react';
import Layout from '@theme/Layout';
import GalleryComponent from '@site/src/GalleryComponent';
import './index.css';

export default function Gallery() {
    return (
        <Layout title="Gallery" description="A personal gallery of photos I've taken.">
            <div className="gallery-header">
                <h1>Gallery</h1>
                <p>A personal gallery of photos I've taken.</p>
                <p>This is a <b>work in progress</b>! Here's some stuff I still need to do:</p>
                <ul>
                    <li>Make sure responsive styling looks fine on mobile.</li>
                    <li>
                        Add more of my photos.
                        <ul>
                            <li>I have a ton to process still. They all need titles, descriptions, tags, and some need light edits.</li>
                            <li>That processing workflow is also still WIP.</li>
                        </ul>
                    </li>
                    <li>
                        Improve pagination.
                        <ul>
                            <li>I want this to respect user agency, so this will likely just be a simple button down at the bottom that loads the next page.</li>
                        </ul>
                    </li>
                    <li>
                        Make tags more functional.
                        <ul>
                            <li>I want a filter system with multi-select support.</li>
                        </ul>
                    </li>
                    <li>Also make the view filterable by date.</li>
                    <li><i>(Maybe)</i> add some kind of separator for years, to give a sense of time when you're just scrolling through without having to hover to see dates.</li>
                </ul>
                <p>If you see any issues or have suggestions, <a href="mailto:keldtdev@gmail.com">let me know</a>!</p>
            </div>
            <GalleryComponent />
        </Layout>
    )
}