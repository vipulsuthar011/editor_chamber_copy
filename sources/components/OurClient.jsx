import React from 'react'
import Section from '../layout/Section'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import {cosovo,kitchen,padamjyot} from '@/sources/assets/images';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const client=[
    {
        logo:cosovo,
    },
    {
        logo:kitchen,
    },
    {
        logo:padamjyot,
    },
]

const OurClient = () => {
  return (
    <Section heading="Our Clients" className="text-center">
    {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 p-10 mx-auto max-w-[1200px]"> */}
    <div>


    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px text-center flex items-center justify-center"
>
  {client.map((ele,index)=>(
    <Image src={ele.logo}
              className="w-4/5 h-fit xl:-mt-16 lg:mt-0 mt-16"/>
  ))}
</Carousel>

    </div>
  </Section>
  )
}

export default OurClient