"use client"
import Image from "next/image";

import banner from '../../public/cover.jpeg'
import logo from '../../public/logowbg.png'
import { Header } from "@/components/header";
import { GrDocumentUpload } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaList } from "react-icons/fa";
import { VscGraph, VscSettings } from "react-icons/vsc";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import graph from '../../public/graph.png'


 
export default function Home() {
  return (
   <>
   <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
   <main className="w-full m-0 bg-slate-200 overflow-hidden">
   <Header/>
   <section className=" flex w-full items-center justify-center relative">
   <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent/40 to-transparent"></div>
        <div className="absolute  inset-0 ">
        <Image
                alt="imagem de capa"
                src={banner}
                priority={true}
                quality={100}
                fill={true}
                className="object-cover "
                 sizes='(max-width:480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                
                />
        </div>
        <div className="w-full max-w-7xl flex mx-auto flex-col relative md:flex-row h-3/4 items-center justify-around  ">
            <div className="flex flex-col items-center md:flex-row md:space-x-8">
            <Image
                alt="logo"
                src={logo}
                priority={true}
                quality={100}
                //fill={true}
                className="max-w-xs md:max-w-sm lg:max-w-lg object-contain z-20"
                 sizes='(max-width:480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                  data-aos="flip-right" data-aos-delay="300" data-aos-duration="2000"
                />

            </div>
          
               <h1 className="w-96 text-white font-bold text-center  text-xl md:text-3xl -mt-28 md:mt-0 z-20"
               data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
                Crie gratuitamente gráficos para trabalhos acadêmicos e científicos com uma estética surpreendente.</h1>
            
        </div>
      </section>
    
    <section className="flex flex-col sm:flex-row max-w-7xl w-full items-center justify-center relative mx-auto my-12 gap-6 p-3">
    <div className="flex-1"
    data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500"
    >
        <h1 className="text-3xl mb-12 font-bold">Sobre</h1>
        <p className="text-xl font-light">
        Plot.R é a sua nova plataforma para criar gráficos acadêmicos e científicos com uma estética surpreendente. 
        O usuário deve carregar seus dados para usar a plataforma, a qual compreende uma vasta gama de funcionalidades 
        gráficas. Diversos modelos gráficos pré-definidos também são disponibilizados com um simples clique de mouse.
        </p>
      </div>
    
      <div className="flex-1">
      <Image
                alt="graficos"
                src={graph}
                priority={true}
                quality={100}
                //fill={true}
                className="max-w-xs md:max-w-sm lg:max-w-lg object-contain z-20"
                sizes='(max-width:480px) 100vw, (max-width: 1024px) 75vw, 60vw'
                data-aos="zoom-in" data-aos-delay="300" data-aos-duration="2000"
                />
      </div>
      </section>



    <section className="flex w-full max-w-7xl flex-col items-center justify-center mt-12  mx-auto">
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="text-3xl">Testanto o Plot.R</h2>
        <p className="text-xl font-light"> Para a criação de novos gráficos é muito simples:</p>
      </div>

      <div className="flex my-10 w-full flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-34">
        <div className="flex flex-col items-center justify-center w-40 gap-8 text-center"
              data-aos="fade-up" data-aos-delay="250"
        >
          <strong>1º - Carregue uma planilha de dados</strong>
          <GrDocumentUpload size={35}/>
        </div>
        <div className="flex flex-col items-center justify-center w-40 gap-8 text-center"
           data-aos="fade-up" data-aos-delay="350"
        >
          <strong>2º - Escolha o modelo de gráfico</strong>
          <FaList size={35}/>
        </div>
        <div className="flex flex-col items-center justify-center w-40 gap-8 text-center"
           data-aos="fade-up" data-aos-delay="450"
        >
          <strong>3º - Dimensione e configure</strong>
          <VscSettings size={35}/>
        </div>
        <div className="flex flex-col items-center justify-center w-40 gap-8 text-center"
         data-aos="fade-up" data-aos-delay="450"
        >
          <strong>4º - Gere e teste o seu gráfico</strong>
          <VscGraph size={35}/>
        </div>

      </div>

    </section>

    
    <section>
     <iframe src="https://hassandavid.shinyapps.io/PlotApp/?token=C6106B9FC69C67C3E277BE8F3B1D765E" 
           className="w-full h-screen border-none overflow-hidden"/>
 </section>

 <footer className="h-96">
    <div className=" flex justify-center items-center flex-col bg-black h-96">
    <div className="flex gap-12 mt-32">
        <Link href="http://facebook.com">
           <FaFacebook size={28} color="#fff"/>
         </Link>
         <Link href="http://instagram.com">
            <FaInstagram size={28} color="#fff"/>
         </Link>
         <Link href="http://x.com">
            <BsTwitterX size={28} color="#fff"/>
         </Link>
    </div>

      <div className="flex flex-col justify-center items-center">
      <Image
                alt="logo"
                src={logo}
                priority={true}
                quality={100}
                //fill={true}
                className="max-w-64"
                 sizes='(max-width:480px) 50vw, (max-width: 1024px) 50vw, 50vw'
                />
           <p className="font-light text-center text-slate-100 mb-32">Copyright© 2024 | Plot.R - Todos os direitos reservados.</p>
       </div>
     </div>
  </footer>
  
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
  
   </main> 
 


   </>
  );
}
