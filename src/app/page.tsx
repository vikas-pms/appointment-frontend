"use client";
import FooterPage from '@/components/footer/FooterPage';
import NavbarPage from '@/components/header/NavbarPage';
const Dashbord = () => {
  return (
    <>
      <NavbarPage />
      <div className='relative'>
        <img className='' src="home.webp" alt="" />
        <img className="absolute top-36 right-0 animate-bounce animate__slower	10s" src="https://doccure.dreamstechnologies.com/html/template/assets/img/banner/banner-img2.svg" alt="" />
      <img className="absolute top-64 left-16 animate-bounce animate__slower	10s" src="https://doccure.dreamstechnologies.com/html/template/assets/img/banner/banner-img1.svg" alt="" />
      <img className="absolute bottom-0 right-0 animate-bounce animate__slower	10s " src="https://doccure.dreamstechnologies.com/html/template/assets/img/banner/banner-img3.svg" alt="" />
      </div>
      

      <FooterPage />


    </>
  );
};

export default Dashbord;
