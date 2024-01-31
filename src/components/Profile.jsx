export default function Profile() {
    return (
        <div className="pb-10">
         <h1 className="pt-10 pb-3 text-5xl text-[#AEBCCF]">Profile</h1>
            <div className="flex flex-row ">
  <div className="basis-1/3 pb-10">
  <h2 className="text-3xl text-[#B7AAFF] pt-2 pb-5">Profile</h2>
  <table>
    <tbody>
  <tr>
  <td className="pr-5 font-bold">Doğum Tarihi</td>
    <td className="pr-5">Maria Anders</td>
  </tr>
  <tr>
    <td className="pr-5 font-bold">İkamet Şehri</td>
    <td className="pr-5">Francisco Chang</td>
  </tr>
  <tr>
  <td className="pr-5 font-bold">Eğitim Durumu</td>
    <td className="pr-5">Celal Bayar Ünv. Bilgisayar Müh. Lisans, 2018</td>
  </tr>
 
  <tr>
    <td className="pr-5 font-bold">Tercih Ettiği Rol</td>
    <td className="pr-5">Team Lead</td>
  </tr></tbody>
</table>
  </div>
  <div className="basis-2/3 px-10">
  <h2 className="text-3xl text-[#B7AAFF] pt-2 pb-5">About Me</h2>
  <p className="pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
    </div>
    
</div>
<hr/>    
        </div>
    )
}