import React from 'react';

export function Icon({glyph, viewBox = '0 0 16 16', className = 'svg'}){
    return (
        <svg className={className} viewBox={viewBox} >
            <use xlinkHref={`#${glyph}`} />
        </svg>
    );
}