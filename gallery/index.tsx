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
                <p>
                    This is a <b>work in progress</b>! If you see any issues or have suggestions, <a href="mailto:keldtdev@gmail.com">let me know</a>. Here's some stuff I still need to do:
                    <details>
                        <summary>(to-do)</summary>
                        <p></p>
                        <ul>
                            <li>
                                Add more of my photos.
                                <ul>
                                    <li>I have a ton to process still. They all need titles, descriptions, tags, scores, and some need light edits.</li>
                                    <li>That processing workflow is coming together but still WIP also.</li>
                                </ul>
                            </li>
                            <li>
                                Make tags more functional.
                                <ul>
                                    <li>I want a filter system with multi-select support.</li>
                                    <li>Would like to look into set operations like union/intersection/difference. Input UI for something like that will be an interesting challenge.</li>
                                </ul>
                            </li>
                            <li>
                                Allow filtering by date.
                                <ul>
                                    <li>Start/end date range at the very least.</li>
                                    <li>Also considering cyclical(?) slices like "all photos taken in May regardless of year".</li>
                                    <li><i>(Maybe)</i> add some kind of separator for years, to give a sense of time when you're just scrolling through without having to hover to see dates.</li>
                                </ul>
                            </li>
                            <li>
                                Incorporate scoring system.
                                <ul>
                                    <li>Want a minimum score cutoff for inclusion in the default view, so I can put stuff in here that I care about but don't think most people would care to see.</li>
                                    <li>I want a preset view that sorts by score so you can see my preferred order for this gallery. The idea is that if I could sit down with a user and show them my gallery, the score would roughly determine the order where the images I'd be most excited to show them would come first. This might end up being the default view, not sure yet.</li>
                                    <li>Will want ranged filtering for this as well.</li>
                                </ul>
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>(already done)</summary>
                        <p>
                            (This is roughly in order from most recent to least recent.)
                        </p>
                        <ul>
                            <li>
                                Add score to image metadata, remove "starred" tag.
                                <ul>
                                    <li>Score is an arbitrary int that will let me provide my own custom order separate from chronological.</li>
                                    <li>Current default is 500. Images that had the "starred" tag got a score of 1000, and had that tag removed.</li>
                                    <li>(still need to backfill more specific/granular scores for all existing images)</li>
                                </ul>
                            </li>
                            <li>
                                Add author to image metadata.
                                <ul>
                                    <li>It's all the same author but that's fine. Wanted the metadata tagged with this info.</li>
                                </ul>
                            </li>
                            <li>
                                Improved handling for image loading and layout adjustments.
                                <ul>
                                    <li>Gallery now waits for photos to finish loading and then fades them into view.</li>
                                    <li>Database now keeps width and height metadata for images, so the gallery can use this to calculate layout without having to wait on images to finish loading.</li>
                                </ul>
                            </li>
                            <li>Add photos through May 2023.</li>
                            <li>
                                Pagination.
                                <ul>
                                    <li>Added a bunch of backend wiring for pages, retriving them in order or individually, with different page sizes supported. Stuff like that.</li>
                                    <li>Added basic pagination frontend controls. Where relevant, there's a "load more" above the gallery for loading "previous" photos, and below for "next" photos.</li>
                                    <li>Incorporated this into the functionality for linking to the gallery entry for a specific photo. Gallery will load the page for that specific photo and scroll it into view so it's near the top of the page when you close out of the linked photo's modal.</li>
                                </ul>
                            </li>
                            <li>
                                Support linking to individual photos.
                                <ul>
                                    <li>The overall gallery component has state for which photo is selected, and also modifies the page URL to reflect this.</li>
                                    <li>Navigating to the page using the URL for a particular selected photo will open the modal for that photo.</li>
                                    <li>Modal has a button for copying the direct link to clipboard.</li>
                                </ul>
                            </li>
                            <li>Add photos through December 2022.</li>
                            <li>
                                Basic gallery setup. Show some pictures, show some metadata, make pics clickable and pop up a modal for a better view.
                            </li>
                        </ul>
                    </details>
                </p>
            </div>
            <GalleryComponent />
        </Layout>
    )
}