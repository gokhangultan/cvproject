import { useSelector } from "react-redux";

export default function Profile() {
  const lang = useSelector((store) => store.lang);
  const data = useSelector((store) => store.data);
  const profileData = lang === 'EN' ? data.en.profile : data.tr.profile;

  return (
    <div className="px-[20px] md:px-[190px] my-10">
      <h1 className=" xl:text-5xl lg:text-4xl text-3xl dark:text-[#AEBCCF] text-[#1F2937] font-semibold mb-5">{profileData.profileTitle}</h1>
      <div className="flex flex-col gap-2 md:flex-row ">
        <div className="basis-2/3 flex flex-col gap-3 ">
          <h2 className="xl:text-3xl lg:text-2xl text-xl dark:text-[#B7AAFF] text-[#4338CA] font-medium">{profileData.profileTitle}</h2>
          <table>
            <tbody className="flex flex-col gap-2">
              <tr className="flex flex-row gap-2">
                <td className=" font-semibold text-black dark:text-white  text-lg">{profileData.profileBirth}</td>
                <td className="  text-black dark:text-white text-lg" >{profileData.profileBirthDate}</td>
              </tr>
              <tr className="flex flex-row gap-2">
                <td className=" font-semibold text-black dark:text-white text-lg">{profileData.location}</td>
                <td className="  text-black dark:text-white text-lg">{profileData.profileLocation}</td>
              </tr>
              <tr className="flex flex-row gap-2">
                <td className=" font-semibold text-black dark:text-white text-lg">{profileData.education}</td>
                <td className="  text-black dark:text-white text-lg">{profileData.profileEducation}</td>
              </tr>

              <tr className="flex flex-row gap-2">
                <td className="  font-semibold text-black dark:text-white text-lg">{profileData.prefferRole}</td>
                <td className="  text-black dark:text-white text-lg">{profileData.profilePrefferred}</td>
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