import React from "react";
import Image from "next/image";
import {  Button, Modal } from "flowbite-react";
import {useState } from "react";

function Footer() {

  const [openModal, setOpenModal] = useState<string | undefined>();
  const [modalSize, setModalSize] = useState<string>("sm");
  const props = { modalSize, openModal, setModalSize, setOpenModal };

  return (

    
    <footer className="bg-Footer bg-cover bg-local footer-center p-3  text-primary-content">
       
    <div>
    <Image 
              width={150}
              height={150}
              src="/images/TKKSERVICE.png"
              objectFit="cover"
              alt="logo"
              className="fill-current"
            />
          
      <p className="font-bold">
        T-Dragon design TH. <br/>Providing reliable tech since 2020
      </p> 
      <p>Copyright © 2023 - All right reserved</p>
    </div> 
    <div>
    </div>
  </footer>
  
  );
}

export default Footer;
