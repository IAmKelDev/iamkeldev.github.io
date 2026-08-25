import React from 'react';
import { useState } from 'react';
import './SpoilerComponent.css'


export default function InlineSpoiler({previewMessage, children}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const defaultPreviewMessage = "(spoiler)"
    return (
        isExpanded
        ? <span className={"inline-spoiler-expanded"} onClick={() => setIsExpanded(false)}>{children}</span>
        : <span className={"inline-spoiler-collapsed"} onClick={() => setIsExpanded(true)}>{previewMessage ?? defaultPreviewMessage}</span>
    );
}