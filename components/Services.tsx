import { servicesData } from "@/data/servicesData"
import Image from "next/image"

const Services = ()=>{
  return(
    <div className="container p-2 " id="services">
      <h2  className="main-heading">My Services</h2>
           <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 w-full2">

        {servicesData.map((service, index)=>(
          <div key={index} className="box bg-black  relative transition duration-75  cursor-pointer">
            <Image src={service.image} alt={service.title} width={200} height={200}  className=" object-cover w-full h-50 "/>
            <h3 className="text-(--main-color) m-5 text-center">{service.title}</h3>
            <p className="text-xs mb-5 leading-5 text-white">{service.desc}</p>
            <div className="info relative p-5 bg-black text-right"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Services