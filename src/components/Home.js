import React, { useState } from 'react'
import ShowHeading from './ShowHeading';
import loading_animation from '../src/loading_animation.json';
import DisplayAnimation from './DisplayAnimation';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const Loading=()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000)
       return(
        <div className='mt-5'>
            <DisplayAnimation lottieFile={loading_animation} className="mt-5" />
        </div>
       )
       
       
    }
    return (
        <div>
            <div className="container">
                <div className='row p-2 mt-3'>
                    <h3 className='col-12'>All Question</h3>
                </div>
                {loading ? <Loading /> : <ShowHeading />}
                
            </div>
        </div>
    )
}
