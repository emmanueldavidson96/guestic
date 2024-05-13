// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import image1 from '@/public/images/blogImage1.png'
// import image2 from '@/public/images/blogImage2.png'
// import image3 from '@/public/images/blogImage2.png'
// import image4 from '@/public/images/blogImage4.png'
// import maimiHouse from '@/public/images/maimiProperty.png'


// export default function About() {
//   return (
//     <section class="bg-[#F2ECD9]">
//       <section className='flex flex-row m-16'>
//         <div className='py-28'>
//           <h2 className='font-bold text-lg'>About Us</h2>
//           <p className='pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil nobis quas sit praesentium sint ex fuga repellat tenetur nostrum magni, fugiat, unde pariatur placeat eum minima veritatis dolorum modi! unde pariatur placeat eum minima veritatis dolorum modi! unde pariatur placeat eum minima veritatis dolorum modi!</p><br></br>
//           <p className='pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam quasi commodi facilis voluptas ipsum nobis corrupti unde perspiciatis ipsam! unde pariatur placeat eum minima veritatis dolorum modi!</p>
//         </div>
//         <Image className='mb-10' width={624} height={525} src={maimiHouse} alt='aboutus'/>
//       </section>
//       <section className='m-16'>
//         <h2 className='font-bold text-lg'>History</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam sed itaque architecto vel. Deserunt, rerum exercitationem? Voluptatibus, sapiente accusamus. Non nam sed itaque architecto vel. Deserunt, rerum exercitationem? Voluptatibus, sapiente accusamus.</p><br></br>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam sed itaque architecto vel. Deserunt, rerum exercitationem? Voluptatibus, sapiente accusamus. Non nam sed itaque architecto vel. Deserunt, rerum exercitationem? Voluptatibus, sapiente accusamus.</p>
//       </section>
//       <section className='flex flex-row m-16 space-x-2'>
//         <div className='bg-[#fff] rounded-md shadow-md '>
//           <h3 className='font-bold text-lg text-center'>Mission</h3>
//           <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
//           <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
//         </div>
//         <div className='bg-[#fff] rounded-md shadow-md'>
//           <h3 className='font-bold text-lg text-center'>Vision</h3>
//           <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
//           <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
//         </div>
//       </section>
//         <div className='m-16'>
//           <h3 className='font-bold text-lg'>Why Choose Us</h3>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p><br></br>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
//         </div>
//         <div className='m-16'>
//           <h4 className='font-bold text-lg'>Awards</h4>
//           <ul className='list-disc pl-10'>
//             <li>Best in hospitality 2023</li>
//             <li>Best room service 2022</li>
//             <li>Runner up overall best in 2023</li>
//           </ul>
//         </div>
//         <section className='m-16'>
//           <h3 className='font-bold text-lg pb-3'>Photos and Videos</h3>
//           <div className='flex flex-row justify-around flex-wrap'>
//             <Image src={image1} alt='' />
//             <Image src={image2} alt='' />
//             <Image src={image3} alt='' />
//             <Image src={image4} alt='' />
//           </div>
//         </section>
//     </section>
//   )
// }


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '@/public/images/blogImage1.png';
import image2 from '@/public/images/blogImage2.png';
import image3 from '@/public/images/blogImage2.png';
import image4 from '@/public/images/blogImage4.png';
import maimiHouse from '@/public/images/maimiProperty.png';

export default function About() {
  return (
    <section className="bg-[#F2ECD9] p-4 md:p-8 lg:p-12 xl:p-16">
      <section className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="py-24 w-full md:w-1/2 lg:w-2/3">
          <h2 className="font-bold text-lg md:text-2xl">About Us</h2>
          <p className="mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil nobis quas sit
            praesentium sint ex fuga repellat tenetur nostrum magni, fugiat, unde pariatur placeat
            eum minima veritatis dolorum modi! unde pariatur placeat eum minima veritatis
            dolorum modi! unde pariatur placeat eum minima veritatis dolorum modi!
          </p>
          <p className="mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam quasi
            commodi facilis voluptas ipsum nobis corrupti unde perspiciatis ipsam! unde pariatur
            placeat eum minima veritatis dolorum modi!
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Image className="w-full" width={624} height={525} src={maimiHouse} alt="aboutus" />
        </div>
      </section>
      <section className="mt-8 md:mt-12">
        <h2 className="font-bold text-lg md:text-2xl">History</h2>
        <p className="mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam sed itaque architecto
          vel. Deserunt, rerum exercitationem? Voluptatibus, sapiente accusamus. Non nam sed
          itaque architecto vel. Deserunt, rerum exercitationem? Voluptatibus, sapiente accusamus.
        </p>
        <p className="mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam sed itaque architecto
          vel. Deserunt, rerum exercitationem? Voluptatibus, sapiente accusamus. Non nam sed
          itaque architecto vel. Deserunt, rerum exercitationem? Voluptatibus, sapiente accusamus.
        </p>
      </section>
      <section className="flex flex-col md:flex-row mt-8 md:mt-12 space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-[#fff] rounded-md shadow-md w-full md:w-1/2">
          <h3 className="font-bold text-lg text-center">Mission</h3>
          <p className='p-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
          <p className="p-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
        </div>
        <div className="bg-[#fff] rounded-md shadow-md w-full md:w-1/2">
          <h3 className="font-bold text-lg text-center">Vision</h3>
          <p className='p-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
          <p className="p-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci sint asperiores deleniti tenetur eaque blanditiis explicabo.</p>
        </div>
      </section>
      <div className="mt-8 md:mt-12">
        <h3 className="font-bold text-lg md:text-xl">Why Choose Us</h3>
        <p className="mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit ut provident ab
          pariatur, libero reprehenderit perferendis laborum quisquam incidunt ullam maiores adipisci
          sint asperiores deleniti tenetur eaque blanditiis explicabo.
        </p>
      </div>
      <div className="mt-8 md:mt-12">
        <h4 className="font-bold text-lg md:text-xl">Awards</h4>
        <ul className="list-disc pl-4 text-sm md:text-base">
          <li>Best in hospitality 2023</li>
          <li>Best room service 2022</li>
          <li>Runner up overall best in 2023</li>
        </ul>
      </div>
      <section className="mt-8 md:mt-12">
        <h3 className="font-bold text-lg md:text-xl pb-3">Photos and Videos</h3>
        <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0 md:space-x-4">
          <Image className="w-full md:w-1/2" src={image1} alt="" />
          <Image className="w-full md:w-1/2" src={image2} alt="" />
          <Image className="w-full md:w-1/2" src={image3} alt="" />
          <Image className="w-full md:w-1/2" src={image4} alt="" />
        </div>
      </section>
    </section>
  );
}
