import React from 'react';
import {useSelector} from "react-redux";
// import * as util from "util";
import {filters} from "../../store/configData";

export default function PageHeader({page}) {

    const data = useSelector(state => {
        return state.filter[page]
    });

    const renderTitle = () => {
        if(page === 'group'){
            let age = data.age.map(id => {
                return filters.ageList.find(age => age.id === id).title;
            })

            let gender = data.gender.map(id => {
                return filters.genderList.find(gender => gender.id === id).title
            })

            let kind = data.kind.map(id => {
                return filters.kindList.find(kind => kind.id === id).title
            })
            return [...age, ...gender, ...kind].map((item, index) => {
                return (
                    <span
                        key={index}
                        className={`text-xs px-2 my-1 font-medium bg-gray-500 bg-opacity-10 text-gray-800 rounded py-0.5 flex items-center`}
                    >
                        <i className="inline-block w-1 h-1 rounded-full bg-gray-500 mx-1"/>
                        {item}
                    </span>
                )
            })
        }else if(page === 'person'){
            return (
                <span
                    className={`text-4xl px-2 my-1 font-medium bg-gray-500 bg-opacity-10 text-gray-800 rounded py-0.5 flex items-center`}
                >
                        <i className="inline-block w-2 h-2 rounded-full bg-gray-500 mx-2"/>
                    {data}
                    </span>
            )
        }
    }

    return (
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {data ? renderTitle() : null}
            {/* Filter button */}
            {/*<FilterButton />*/}
            {/* Datepicker built with flatpickr */}
            {/*<Datepicker />*/}
            {/* Add view button */}
            {/*<button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">*/}
            {/*    <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">*/}
            {/*        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />*/}
            {/*    </svg>*/}
            {/*    <span className="hidden xs:block ml-2">Add view</span>*/}
            {/*</button>*/}
        </div>
    );
}