export default function Profile() {
    return (
        <div className="pb-10 pl-[125px] pr-[175px]">
         <h1 className="pt-10 pb-3 text-5xl dark:text-[#AEBCCF] text-[#1F2937] font-semibold">Profile</h1>
            <div className="flex flex-row ">
  <div className="basis-1/3 pb-10">
  <h2 className="text-3xl dark:text-[#B7AAFF] text-[#4338CA] pt-2 pb-5 font-medium">Profile</h2>
  <table>
    <tbody>
  <tr>
  <td className="pr-5 font-semibold text-black dark:text-white ">Doğum Tarihi</td>
    <td className="pr-5 text-black dark:text-white">Maria Anders</td>
  </tr>
  <tr>
    <td className="pr-5 font-semibold text-black dark:text-white">İkamet Şehri</td>
    <td className="pr-5 text-black dark:text-white">Francisco Chang</td>
  </tr>
  <tr>
  <td className="pr-5 font-semibold text-black dark:text-white">Eğitim Durumu</td>
    <td className="pr-5 text-black dark:text-white">Celal Bayar Ünv. Bilgisayar Müh. Lisans, 2018</td>
  </tr>
 
  <tr>
    <td className="pr-5 font-semibold text-black dark:text-white">Tercih Ettiği Rol</td>
    <td className="pr-5 text-black dark:text-white">Team Lead</td>
  </tr></tbody>
</table>
  </div>
  <div className="basis-2/3 px-10">
  <h2 className="text-3xl dark:text-[#B7AAFF] text-[#4338CA] pt-2 pb-5 font-medium">About Me</h2>
  <p className="pb-5 text-[#6B7280] dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
  <p className="text-[#6B7280] dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
    </div>
    
</div>
<hr/>    
        </div>
    )
}