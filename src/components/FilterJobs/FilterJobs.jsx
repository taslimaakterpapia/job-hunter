import React from 'react';

const FilterJobs = (props) => {
    function onFilterValueChange(event){
        props.filterValueSelected(event.target.value);
     }
    return (
        <div className='d-flex justify-content-end me-5 p-5'>
            <select  onChange={onFilterValueChange} name="" id="">
                <option value="All">All</option>
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
            </select>
        </div>
    );
};

export default FilterJobs;