import React, { useEffect } from 'react';
import {useDispatch } from "react-redux";
// import * as util from "util";

import {setGroup} from "../../store/actions/filter";
import {filters} from "../../store/configData";

export default function FilterModal() {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = React.useState(false);
    const [gender, setGender] = React.useState([]);
    const [age, setAge] = React.useState([]);
    const [kind, setKind] = React.useState([]);

    useEffect(() => {
    }, [gender, age, kind])

    const renderGenderButtons = () => {
        let onClickGender = (isActive, genderItem) => {
            if(isActive){
                setGender(gender.filter(({title}) => title !== genderItem.title))
            }else{
                setGender([...gender, genderItem])
            }
        }
        return renderBtn(filters.genderList, gender, onClickGender)
    }

    const renderAgeButtons = () => {
        let onClickAge = (isActive, ageItem) => {
            if(isActive){
                setAge(age.filter(({title}) => title !== ageItem.title))
            }else{
                setAge([...age, ageItem])
            }
        }
        return renderBtn(filters.ageList, age, onClickAge)
    }

    const renderKindButtons = () => {
        let onClickAge = (isActive, kindItem) => {
            if(isActive){
                setKind(kind.filter(({title}) => title !== kindItem.title))
            }else{
                setKind([...kind, kindItem])
            }
        }
        return renderBtn(filters.kindList, kind, onClickAge)
    }

    const renderBtn = (array, activeArray, callback) => {
        if(array.length){
            return array.map((item) => {
                if(activeArray){
                    let isActive = activeArray.includes(item);
                    return <button
                        key={`${item.id}-${item.title}`}
                        className={`hover:bg-blue-900 focus:outline-none transform hover:scale-105 transition duration-500 ease-in-out text-white py-2 px-4 rounded ` + (isActive ? `bg-blue-900` : `bg-blue-500`)}
                        onClick={() => callback(isActive, item)}
                    >
                        {item.title}
                    </button>
                }else{
                    return <span
                        key={`${item.id}-${item.title}`}
                        className={`text-xs px-2 my-1 font-medium bg-gray-500 bg-opacity-10 text-gray-800 rounded py-0.5 flex items-center`}
                    >
                        <i className="inline-block w-1 h-1 rounded-full bg-gray-500 mx-1"/>
                        {item.title}
                    </span>
                }
            })
        }else{
            return null
        }
    }

    const filterHandler = () => {

        let data = {
            gender: gender.length ? gender.map(item => item.id) : filters.genderList.map(item => item.id),
            age: age.length ? age.map(item => item.id) : filters.ageList.map(item => item.id),
            kind: kind.length ? kind.map(item => item.id) : filters.kindList.map(item => item.id)
        }
        dispatch(setGroup(data))

        // dispatch(getGroupData(data))

        setShowModal(false)
    }

    return (
        <>
            <button
                className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Фильтровать
            </button>
            {showModal ? (
                <>
                    <div
                        className="animated fadeIn jus justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="animated fadeIn relative my-6 mx-auto min-w-500 w-10/12 ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-4/5">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Фильтр по группам пользователей
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                          ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="grid grid-cols-6 gap-4 my-4 mx-6">
                                        <div className="col-start-2 col-end-3 justify-self-end self-center w-24">Пол</div>
                                        <div className="col-start-3 col-end-5 grid grid-cols-2 gap-1">{renderGenderButtons()}</div>
                                        <div className="col-start-2 col-end-3 justify-self-end self-center w-24">Возраст</div>
                                        <div className="col-start-3 col-end-5 grid grid-cols-4 gap-1 auto-cols-fr">{renderAgeButtons()}</div>
                                        <div className="col-start-2 col-end-3 justify-self-end self-center w-24">Занятость</div>
                                        <div className="col-start-3 col-end-5 grid grid-cols-2 gap-1 ">{renderKindButtons()}</div>
                                    </div>
                                    <div className="h-9 flex space-x-2 flex-wrap">
                                        {renderBtn([...gender, ...age, ...kind])}
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    {/*<button*/}
                                    {/*    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                                    {/*    type="button"*/}
                                    {/*    onClick={() => setShowModal(false)}*/}
                                    {/*>*/}
                                    {/*    Close*/}
                                    {/*</button>*/}
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:opacity-50"
                                        type="button"
                                        onClick={filterHandler}
                                        disabled={(!age.length && !kind.length && !gender.length)}
                                    >
                                        Фильтровать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => console.log('sd') }/>
                </>
            ) : null}
        </>
    );
}