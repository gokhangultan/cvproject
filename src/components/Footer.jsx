import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';


export default function Footer() {
   
  const lang = useSelector((store) => store.lang);
  const data = useSelector((store) => store.data);
  const footerData = lang === 'EN' ? data.en.footer : data.tr.footer;
  const heroData = lang === 'EN' ? data.en.hero : data.tr.hero;
  const constData = lang === 'EN' ? data.en.const : data.tr.const;

return (
        <div className="bg-[#F9F9F9] dark:bg-[#141414] py-3 xl:py-10 lg:py-8 md:py-6 xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px]">
            <div>
            <h1 className=" dark:text-#[AEBCCF] text-[#1F2937] font-semibold xl:text-[42px] md:text-[32px] text-[22px] "> {footerData.footerTitle}</h1>
                <h1 className="mb-5 xl:mb-20 lg:mb-10 dark:text-#[AEBCCF] text-[#1F2937] font-semibold xl:text-[42px] md:text-[32px] text-[22px] "> {footerData.footerTitle2}</h1>
            <div className="flex justify-between">
                <div className='flex-1'>
                <a href="mailto:gultangokhan@gmail.com"><p className='font-medium underline text-[#AF0C48] dark:text-[#BAB2E7] xl:text-[20px] lg:text-[16px] md:text-[12px] text-[10px] '><FontAwesomeIcon icon={faHandPointRight} /> {footerData.footerEmail}</p></a>
                     </div>
                <div className='flex gap-1'>
                <a href={`${footerData.personalBlog}`} target='_blank'><button className='font-medium dark:text-[#E1E1FF] text-[#0A0A14] xl:text-lg text-xs md:text-sm lg:text-base'>{constData.constBlog}</button></a>
                    <a href={`${heroData.gitLink}`} target='_blank'><button className='font-medium dark:text-[#17D18B] text-[#00AB6B] xl:text-lg text-xs md:text-sm lg:text-base	'>{constData.constGithub}</button></a>
                    <a href={`${heroData.webLink}`} target='_blank'><button className='font-medium dark:text-[#0BA6F6] text-[#0077B5] xl:text-lg text-xs md:text-sm lg:text-base'>{constData.constLinkedin}</button></a>
                </div>
                </div>
            </div>
        </div>
    )
}