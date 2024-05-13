import Image from 'next/image'
import React from 'react'
import blog_image from "../../public/travel_blog_images/man-preparing-travel_53876-14615.webp";
import blog_image_2 from "../../public/travel_blog_images/0b4446e2-e9f1-11eb-9a2b-f40b6f7ff9cb_1627279895460.jpg";
import blog_image_3 from "../../public/travel_blog_images/1678741025165.png";
import blog_image_4 from "../../public/travel_blog_images/best-free-travel-images-main-image-hd-op.webp";
import Link from 'next/link';
import SingleBlogCardComponent from '@/components/singleblogpage_components/BlogCardComponent';
import { SingleBlogPageData } from '@/Utils/SingleBlogPageData';

export default function SingleBlog() {
  return (
    <main className="relative">
        <section className='w-full h-fit bg-orange-100 flex items-center pt-2 pb-2'>
            <div className='w-[90%] m-auto flex pt-2 pb-2 justify-between'>
                <div className='w-[65%] h-fit gap-10 flex flex-col'>
                    <h2 className='text-2xl font-bold'>Blog News</h2>
                    <div className='w-full max-h-[500px] overflow-hidden'>
                        <Image src={blog_image} className='w-full h-full' alt=''/>
                    </div>
                    <div className='w-full h-fit flex overflow-hidden justify-between'>
                        <div className='w-[24%] overflow-hidden '>
                            <Image src={blog_image_2} className='w-full h-full' alt=''/>
                        </div>

                        <div className='w-[24%] overflow-hidden '>
                            <Image src={blog_image_3} className='w-full h-full' alt=''/>
                        </div>

                        <div className='w-[24%] overflow-hidden'>
                            <Image src={blog_image_4} className='w-full h-full' alt=''/>
                        </div>

                        <div className='w-[24%] overflow-hidden '>
                            <Image src={blog_image} className='w-full h-full' alt=''/>
                        </div>
                    </div>
                    <h2 className='text-2xl font-bold'>Best time of the year for different Vacations</h2>
                    <p className='text-sm font-medium text-justify'>
                        Embarking on a family vacation is a thrilling endeavor that promises cherished moments and lifelong memories. 
                        Proper planning ensures that every family member, from the youngest to the oldest, 
                        enjoys a stress-free and delightful experience. 
                        Here is a comprehensive guide to help you plan the perfect family getaway.
                    </p>
                    <ol className='list-decimal list-inside w-full flex flex-col gap-8 mb-6'>
                        <li className='text-sm font-medium text-justify'>
                            Set Clear Objectives: Define the purpose of your vacation. 
                            Whether its relaxation, adventure, or cultural exploration, 
                            having a clear objective will guide your destination and activity choices.
                        </li>

                        <li className='text-sm font-medium text-justify'>
                            Involve Everyone: Encourage family members to share their preferences. From toddlers to teenagers, 
                            involving everyone in the decision-making process ensures that 
                            each family member feels excited about the upcoming adventure.
                        </li>

                        <li className='text-sm font-medium text-justify'>
                            Choose the Right Destination: Consider the interests and preferences of your family. 
                            If you have nature enthusiasts, a national park might be ideal. 
                            For history buffs, a city with rich cultural heritage could be perfect.
                        </li>

                        <li className='text-sm font-medium text-justify'>
                            Plan Well in Advance: Booking flights, accommodations, and activities well in advance not only 
                            secures the best deals but also guarantees availability, 
                            especially during peak travel seasons.
                        </li>

                        <li className='text-sm font-medium text-justify'>
                            Create a Flexible Itinerary: While having a basic itinerary is essential, leave room for spontaneity. 
                            Flexibility allows you to adapt to unexpected 
                            opportunities or changes in weather without causing stress.
                        </li>

                        <li className='text-sm font-medium text-justify'>
                            Pack Wisely: Prepare a checklist to ensure you pack all essentials, from clothing to travel documents. 
                            If traveling with children, include entertainment items like games or books to keep them engaged during the journey.
                        </li>

                        <li className='text-sm font-medium flex flex-col gap-4 text-justify'>
                            Consider Accommodation Options: Choose accommodations that cater to the needs of your family. Family-friendly hotels or vacation 
                            rentals often provide additional amenities and a comfortable atmosphere.
                            <div className='flex w-full gap-4 justify-between'>
                                <div className='w-[48%] h-[350px] overflow-hidden'>
                                    <Image src={blog_image} className='w-full h-full' alt=''/>
                                </div>

                                <div className='w-[45%] h-[350px] overflow-hidden'>
                                    <Image src={blog_image_3} className='w-full h-full' alt=''/>
                                </div>                               
                            </div>
                            <p>We provide a valuable service at Guestic to add to your travel experience. <Link href="/" className='text-md font-semibold underline text-yellow-500'>Book Us Today</Link></p>

                        </li>

                        <li className='text-sm font-medium text-justify' >
                            Research Family-Friendly Activities: Explore activities suitable for all ages 
                            at your chosen destination. Look for family-friendly tours, theme parks, 
                            and cultural experiences that will create lasting memories.
                        </li>

                        <li className='text-sm font-medium text-justify'>
                            Stay Connected: Ensure you have reliable communication methods, especially if you re exploring a new destination. 
                            Share your itinerary with a close friend or family member and consider using travel apps to stay organized.
                        </li>

                        <li className='text-sm font-medium text-justify'>
                            Embrace the Journey:  Remember that the journey itself is part of the adventure. 
                            Whether you re road-tripping or flying, find joy in the moments spent together as a family.
                        </li>

                        <p className='text-justify text-sm font-medium'>
                            By considering the unique preferences of each family member and planning thoughtfully, 
                            you can create a vacation that caters to everyones desires, 
                            fostering a sense of togetherness and joy. Happy travels!
                        </p>
                    </ol>
                </div>
                <div className='w-[25%] h-fit'>
                    <p className='font-semibold text-2xl'>Our Latest News</p>
                    <div className='w-full h-fit flex flex-col gap-5'>
                        {
                            SingleBlogPageData.map((blog) => (
                                <SingleBlogCardComponent key={blog.id} blog_image={blog.image} />
                            ))
                        }
                    </div>
                </div>
            </div>
           

        </section>
    </main>
  )
}
