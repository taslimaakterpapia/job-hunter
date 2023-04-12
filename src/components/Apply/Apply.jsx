import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../public/utilities/fakedb';
import Filter from '../Filter/Filter';
import FilterJobs from '../FilterJobs/FilterJobs';

const Apply = () => {

    const [data, setData] = useState([]);
    const db = getShoppingCart();

    const myData = [];

    useEffect(() => {
        fetch("feature.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    for (const item in db) {
        const yourObject = data.find(single => single.id === Number(item))
        myData.push(yourObject);
        //console.log(myData)
    }
    const [filterData, setFilterData] = useState("All");
    const onFilteredData = (value) => {
        //console.log(value);
        setFilterData(value);
    }
    console.log(filterData);
    let filterjobs = myData.filter(job => {
        if (filterData === "Remote") {
            return job.category === "Remote"
        }
        else if (filterData === "Onsite") {
            return job.category === "Onsite"
        }
        else {
            return job;
        }
    })
    return (
        <div>
            <h1 className='text-center m-5'>Applied Jobs</h1>
            <FilterJobs filterValueSelected={onFilteredData}></FilterJobs>
            <div className='mt-3 data'>
                {filterjobs.map(data => <Filter data={data}></Filter>)}
            </div>
        </div>
    );
};

export default Apply;