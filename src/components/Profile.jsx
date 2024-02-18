import { useSelector } from "react-redux";

export default function Profile() {
  const lang = useSelector((store) => store.lang);
  const data = useSelector((store) => store.data);
  const profileData = lang === 'EN' ? data.en.profile : data.tr.profile;

  return (
    <div className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px]">
      <h1 className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 pb-3 xl:text-5xl lg:text-4xl text-3xl dark:text-[#AEBCCF] text-[#1F2937] font-semibold">{profileData.profileTitle}</h1>
      <div className="flex flex-col gap-3 md:flex-row ">
        <div className="basis-1/3 pb-3 xl:pb-10 lg:pb-8 md:pb-6">
          <h2 className="xl:text-3xl lg:text-2xl text-xl dark:text-[#B7AAFF] text-[#4338CA] pt-2 pb-5 font-medium">{profileData.profileTitle}</h2>
          <table>
            <tbody className="flex flex-col gap-2">
              <tr className="flex flex-row gap-2">
                <td className=" font-semibold text-black dark:text-white  xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">{profileData.profileBirth}</td>
                <td className="  text-black dark:text-white xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]" >{profileData.profileBirthDate}</td>
              </tr>
              <tr className="flex flex-row gap-2">
                <td className=" font-semibold text-black dark:text-white xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">{profileData.location}</td>
                <td className="  text-black dark:text-white xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">{profileData.profileLocation}</td>
              </tr>
              <tr className="flex flex-row gap-2">
                <td className=" font-semibold text-black dark:text-white xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">{profileData.education}</td>
                <td className="  text-black dark:text-white xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">{profileData.profileEducation}</td>
              </tr>

              <tr className="flex flex-row gap-2">
                <td className="  font-semibold text-black dark:text-white xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">{profileData.prefferRole}</td>
                <td className="  text-black dark:text-white xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">{profileData.profilePrefferred}</td>
              </tr></tbody>
          </table>
        </div>
        <div className="basis-2/3 flex-col flex gap-3 ">
          <h2 className="xl:text-3xl lg:text-2xl text-xl dark:text-[#B7AAFF] text-[#4338CA]  font-medium">{profileData.aboutMe}</h2>
          <p className="  text-[#6B7280] dark:text-white xl:text-[18px] lg:text-[16px] text-[14px]">{profileData.about1}</p>
          <p className="text-[#6B7280] dark:text-white xl:text-[18px] lg:text-[16px] selection:text-[14px]">{profileData.about2}</p>
        </div>

      </div>
      <hr />
    </div>
  )
}