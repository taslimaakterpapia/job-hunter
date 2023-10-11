import React from 'react';

const FilterJobs = (props) => {
    function onFilterValueChange(event){
        props.filterValueSelected(event.target.value);
     }
    return (
        <div className=''>
            <div className='d-flex mx-52 me-10 p-5 text-xl font-medium text-orange-600 py-10 '>
            
            <select  onChange={onFilterValueChange} name="" id="">
                <option value="All">All</option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
            </select>


        </div>
        </div>
    );
};

export default FilterJobs;