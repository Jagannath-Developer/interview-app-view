import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
export default function DisplayAnimation(props) {
  return (
    <div className=''>
            <Player
                autoplay
                loop
                src={props.lottieFile}
                className="lottie_player"
            ></Player>

        </div>
  )
}
