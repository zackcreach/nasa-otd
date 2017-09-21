import React from 'react';

const AstronomyCard = props => {
    const { copyright, date, explanation, hdurl, media_type, service_version, title, url } = props.data;
    return (
        <div className='astronomy__card'>
            <h6 className='astronomy__title'>{title}</h6>

            <a href={hdurl} className='astronomy__image-wrapper'>
                <img src={url} alt={title} />
            </a>

            <p>{explanation}</p>

            <span>{date}, {copyright}</span>

        </div>
    )
}

export default AstronomyCard;
