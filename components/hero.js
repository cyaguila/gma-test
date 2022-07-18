/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import ReactPlayer from 'react-player';
import s from '../styles/components/hero.module.css'

export default function Hero({url}) {

    return(
    <div className={s.heroContainer}>
        <ReactPlayer
        url={url}
        playing
        loop
        muted
        width="100%"
        height="100%"
        />
    </div>
    ) 
}