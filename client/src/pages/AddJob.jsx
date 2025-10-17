import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';
const AddJob = () => {

    const[title, setTitle]= useState('');
    const[location, setLocation] = useState('Banglore');
    const[category, setCategory] = useState('Programming');
    const[level, setLevel] = useState('Beginner');
    const[salary, setSalary] = useState(0);

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(() => {
        if(!quillRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current,{
                theme: 'snow',
            } )
        }
    },[])

  return (
    <form className='flex flex-col gap-5 p-10 text-slate-500' >
        <div className='flex flex-col gap-2'>
            <p>Job Title</p>
            <input className='border border-slate-300 p-2 rounded' type="text" placeholder='Type here' onChange={e=>setTitle(e.target.value)} value={title} required />
        </div>
        <div className='flex flex-col gap-2'>
            <p>Job Description</p>
            <div ref={editorRef} >

            </div>
        </div>
        <div className='flex flex-col gap-2 sm:flex-row w-full'>
            <p>Job Category</p>
            <select onChange={e=> setCategory(e.target.value)}>
                {JobCategories.map((category,index)=>(
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>


         <div className='flex flex-col gap-2 sm:flex-row w-full'>
            <p className='mb-2'>Job Location</p>
            <select onChange={e=> setLocation(e.target.value)}>
                {JobLocations.map((location,index)=>(
                    <option key={index} value={location}>{location}</option>
                ))}
            </select>
        </div>


         <div className='flex flex-col gap-2 sm:flex-row w-full'>
            <p className='mb-2'>Job Level</p>
            <select onChange={e=> setLevel(e.target.value)}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
            </select>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='mb-2'> Job Salary</p>
            <input className='border border-slate-300 p-2 rounded' onChange={e=> setSalary(e.target.value)} type="Number" placeholder='2500' />
        </div>

        <button className='bg-blue-500 text-white p-2 rounded'>ADD</button>
    </form>
  )
}

export default AddJob