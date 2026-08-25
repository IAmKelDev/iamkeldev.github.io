import React from 'react';
import { useState } from 'react';
import './SpoilerComponent.css'

/**
 * Usage: `<InlineSpoiler>Hidden content, shown when previewMessage text is clicked.</InlineSpoiler>`  
 * Optionally, set previewMessage to a custom string or JSX. When unset, defaults to "(spoiler)".  
 * Hidden content can be text or markdown or HTML/JSX or whatever.
 */
export default function InlineSpoiler({previewMessage, children}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const defaultPreviewMessage = "(spoiler)"
    return (
        isExpanded
        ? <span className={"inline-spoiler-expanded"} onClick={() => setIsExpanded(false)}>{children}</span>
        : <span className={"inline-spoiler-collapsed"} onClick={() => setIsExpanded(true)}>{previewMessage ?? defaultPreviewMessage}</span>
    );
}