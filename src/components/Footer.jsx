import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

    const lang = useSelector((store) => store.lang);
    const data = useSelector((store) => store.data);
    const footerData = lang === 'EN' ? data.en.footer : data.tr.footer;
    const heroData = lang === 'EN' ? data.en.hero : data.tr.hero;
    const constData = lang === 'EN' ? data.en.const : data.tr.const;

    return (
        <div className="bg-[#F9F9F9] dark:bg-[#141414] px-[50px]">
            <div>
                <h1 className=" dark:text-#[AEBCCF] text-[#1F2937] font-semibold text-[42px]  "> {footerData.footerTitle}</h1>
                <h1 className="py-5 dark:text-#[AEBCCF] text-[#1F2937] font-semibold text-[42px]  "> {footerData.footerTitle2}</h1>
                <div className="flex justify-between flex-col md:flex-row gap-3">
                    <div className='flex-1'>
                        <a href="mailto:gultangokhan@gmail.com" target='_blank'><p className='font-medium underline text-[#AF0C48] dark:text-[#BAB2E7] text-[20px]  '><FontAwesomeIcon icon={faHandPointRight} /> {footerData.footerEmail}</p></a>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 '>
                        <a href={footerData.personalBlog} target='_blank'>
                            <button className='font-medium dark:text-[#E1E1FF] text-[#0A0A14] text-lg'>
                                <FontAwesomeIcon icon={faInstagram} size='lg' style={{
                                    background: `radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), 
                  radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), 
                  radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), 
                  radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), 
                  radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), 
                  radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), 
                  radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), 
                  linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)`
                                }} /> {constData.constBlog}
                            </button>
                        </a>
                        <a href={`${heroData.gitLink}`} target='_blank'><button className='font-medium dark:text-[#17D18B] text-[#00AB6B] text-lg	'><FontAwesomeIcon icon={faGithub} size='lg' />  {constData.constGithub} </button></a>
                        <a href={`${heroData.webLink}`} target='_blank'><button className='font-medium dark:text-[#0BA6F6] text-[#0077B5] text-lg'><FontAwesomeIcon icon={faLinkedin} size='lg' /> {constData.constLinkedin}</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}