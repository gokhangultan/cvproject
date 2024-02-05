export default function Profile() {
    return (
        <div className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px]">
         <h1 className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 pb-3 xl:text-5xl lg:text-4xl text-3xl dark:text-[#AEBCCF] text-[#1F2937] font-semibold">Profile</h1>
            <div className="flex flex-row ">
  <div className="basis-1/3 pb-3 xl:pb-10 lg:pb-8 md:pb-6">
  <h2 className="xl:text-3xl lg:text-2xl text-xl dark:text-[#B7AAFF] text-[#4338CA] pt-2 pb-5 font-medium">Profile</h2>
  <table>
    <tbody>
  <tr>
  <td className="pr-1 xl:pr-5 lg:pr-3 font-semibold text-black dark:text-white ">Doğum Tarihi</td>
    <td className="pr-1 xl:pr-5 lg:pr-3  text-black dark:text-white">Maria Anders</td>
  </tr>
  <tr>
    <td className="pr-1 xl:pr-5 lg:pr-3 font-semibold text-black dark:text-white">İkamet Şehri</td>
    <td className="pr-1 xl:pr-5 lg:pr-3  text-black dark:text-white">Francisco Chang</td>
  </tr>
  <tr>
  <td className="pr-1 xl:pr-5 lg:pr-3  font-semibold text-black dark:text-white">Eğitim Durumu</td>
    <td className="pr-1 xl:pr-5 lg:pr-3  text-black dark:text-white">Celal Bayar Ünv. Bilgisayar Müh. Lisans, 2018</td>
  </tr>
 
  <tr>
    <td className="pr-1 xl:pr-5 lg:pr-3  font-semibold text-black dark:text-white">Tercih Ettiği Rol</td>
    <td className="pr-1 xl:pr-5 lg:pr-3  text-black dark:text-white">Team Lead</td>
  </tr></tbody>
</table>
  </div>
  <div className="basis-2/3 xl:px-10 lg:px-6 px-2">
  <h2 className="xl:text-3xl lg:text-2xl text-xl dark:text-[#B7AAFF] text-[#4338CA] pt-2 pb-5 font-medium">About Me</h2>
  <p className="pb-1 xl:pb-5 lg:pb-3  text-[#6B7280] dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
  <p className="text-[#6B7280] dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
    </div>
    
</div>
<hr/>    
        </div>
    )
}