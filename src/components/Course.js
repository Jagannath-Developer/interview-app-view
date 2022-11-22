import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import file from '../src/list_data.json';

export default function Course() {
    const { id } = useParams();
    const [data, setData] = useState(file);
    const [list, setList] = useState([]);

    return (
        <div>
            <div className='bg-light mt-2 p-2'>
                <h4 className='text-uppercase'>{id}</h4>
            </div>
            <div className='mt-2'>
                {
                    data.filter((x) => x.tag === id).map((item, index) => (
                        <div key={item.id} className=" py-1 mx-2">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${index}`} aria-expanded="false" aria-controls="collapseExample">
                                            Q:{index + 1} {`) ${item.qustion}`}
                                        </button>
                                    </h5>
                                </div>

                                <div className="collapse" id={`collapseExample${index}`} aria-labelledby="headingOne" >
                                    <div className="card-body">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
