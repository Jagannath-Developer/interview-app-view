import React, { useState } from 'react'
import file from '../src/list_data.json';

export default function ShowHeading() {
    const [list, setList] = useState(["html", "css", "js", "react"]);
    const [data, setData] = useState(file);
    const [filter, setFilter] = useState(file);
    const filterdata = (cart) => {
        const updatedList = data.filter((x) => {
            return x.tag === cart.item;
        });
        setFilter(updatedList);
    }
    return (
        <div>
            {
                list.map((item, i) => (
                    <div key={i} className="bg-light">
                        <div className='bg-light mt-2 ps-2 py-1'>
                            <h4 className='text-uppercase'>{item}</h4>
                        </div>
                        {/* <button className='btn btn-light w-100 text-uppercase' onClick={() => filterdata({ item })} >{item}</button>
                        {
                            filter.filter((items) => item === items.tag).map((pro) => (
                                <div className='card my-1' key={pro.id}>
                                    <p>{pro.tag}</p>
                                </div>
                            ))
                        } */}
                        {
                            data.filter((x) => x.tag === item).map((product, index) => (
                                <div key={item.id} className=" py-1 mx-2">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${product.tag}${index}`} aria-expanded="false" aria-controls="collapseExample">
                                                    Q:{index + 1} {`) ${product.qustion}`}
                                                </button>
                                            </h5>
                                        </div>

                                        <div className="collapse" id={`collapseExample${product.tag}${index}`} aria-labelledby="headingOne" >
                                            <div className="card-body">
                                                {product.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }

            {/* {
                filter.map((item, index) => (
                    <div className='card my-1' key={item.id}>
                        <p>{item.tag}</p>
                    </div>
                ))
            } */}


        </div>
    )
}
