import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import useAxios from '../hooks/useAxios';


export default function Footer() {
   
  const apiUrl = 'https://65be832adcfcce42a6f29918.mockapi.io/api/v1/cvData';
  const { data: cvDataArray, loading, error } = useAxios(apiUrl);



  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }


  // BECAUSE DUMMY MOCKAPI REQUIRE DATA FORMAT AS JSON MUST BE AN ARRAY.... SPENT 4hours cuz of that
  const cvData = cvDataArray[0];


return (
        <div className="bg-[#F9F9F9] dark:bg-[#141414] py-3 xl:py-10 lg:py-8 md:py-6 xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px]">
            <div>
                <h1 className="mb-5 xl:mb-20 lg:mb-10 dark:text-#[AEBCCF] text-[#1F2937] font-semibold xl:text-[42px] md:text-[32px] text-[22px] "> {cvData.en.projects[0].projectTitle}<br/>your next product.</h1>
            <div className="flex justify-between">
                <div className='flex-1'>
                     <p className='font-medium underline text-[#AF0C48] dark:text-[#BAB2E7] '><FontAwesomeIcon icon={faHandPointRight} /> gultangokhan@gmail.com</p>
                     </div>
                <div className='flex gap-1'>
                    <button className='font-medium dark:text-[#E1E1FF] text-[#0A0A14] xl:text-lg text-xs md:text-sm lg:text-base'>Personal Blog</button>
                <button className='font-medium dark:text-[#17D18B] text-[#00AB6B] xl:text-lg text-xs md:text-sm lg:text-base	'>Github</button>
                <button className='font-medium dark:text-[#0BA6F6] text-[#0077B5] xl:text-lg text-xs md:text-sm lg:text-base'>Linkedin</button>
                </div>
                </div>
            </div>
        </div>
    )
}