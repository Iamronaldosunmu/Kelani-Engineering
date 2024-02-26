import { motion, AnimatePresence } from "framer-motion";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";



interface Contents {
    img: string,
    point1: string,
    point2: string,
    point3: string,
    point4: string,
    point5?: string,
    point6?: string,
    classname: string
}

interface color {
    c700: string;
    c500: string;
    c400: string;
    c300: string;
}

interface SlideshowProps {
    dash: string;
    btnColour: string;
    content: Contents[];
    header: Header[];
    text: {
        head: string;
        sub: string;
    }
}

interface Header {
    text: string;
    className: string;
}



function useHover(styleOnHover: CSSProperties, styleOnNotHover: CSSProperties = {}) {
    const [style, setStyle] = useState(styleOnNotHover);

    const onMouseEnter = () => setStyle(styleOnHover)
    const onMouseLeave = () => setStyle(styleOnNotHover)

    return { style, onMouseEnter, onMouseLeave }
}


const SlideshowSection2: React.FC<{ data: SlideshowProps, colours: color }> = ({ data, colours }) => {

    const containerRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: containerRef,
    //     offset: ["start end", "end start"],
    //   });

    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

    const gradientStyle = {
        background: `linear-gradient(45deg, black, ${colours.c400})`,
    };

    const hoverrs = useHover({ ...gradientStyle });
    const hoverr = useHover({ ...gradientStyle });

    const [display, setDisplay] = useState(0);

    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);



    const handleHeaderClick = (index: number) => {
        setDisplay(index);
    };

    const handleNext = () => {
        setDisplay((prevDisplay) => (prevDisplay + 1) % data.content.length);
    };

    const handlePrevious = () => {
        setDisplay((prevDisplay) => (prevDisplay - 1 + data.content.length) % data.content.length);
    };


    const containerVariants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    // const prevRef = useRef(null);
    const prevRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (prevRef.current) {
            const prevElement = prevRef.current;
            const afterStyle = document.createElement('style');
            afterStyle.textContent = `
        .prev:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${data.btnColour}
        }
      `;
            prevElement.appendChild(afterStyle);
        }
    }, []);

    return (

        <div className="lg:h-[1000px] h-[1150px] w-full z-30 text-white " >
            <div className='w-full mb-6 flex flex-col lg:px-4 justify-center pt-10 items-center '>

                <div className=' w-[65%] flex justify-center items-center ' >
                    <div className='flex  w-full lg:flex-row flex-col items-center mb-10 justify-center lg:justify-between '>

                        <div className='uppercase text-center lg:text-left '>
                            <p className='font-semibold lg:text-base text-xs opacity-60 tracking-wide museo-sans'>
                                {data.text.head}
                            </p>
                            <h1 className='text-3xl lg:text-5xl my-5 opacity-90 font-semibold space-grotesk-medium'>{data.text.sub}</h1>
                        </div>

                        <div className='flex mt-3 lg:mt-0 relative items-center justify-center lg:justify-between lg:w-[15%] md:w-[20%] w-full '>

                            <div className="lg:col-start-1 col-start-9 lg:col-span-full col-span-2  flex  items-center lg:items-end lg:justify-center justify-end " style={{ opacity: 1, visibility: "inherit" }}>
                                <button ref={prevRef} onClick={handlePrevious} className="prev btn-sliderr btn-sliderr-left mr-0 lg:mr-[30px] h-[70px] w-[70px] overflow-hidden" type="button" >

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full " fill="none" viewBox="0 0 55 55">
                                        <circle cx="27.058" cy="27.059" r="26.809" stroke="url(#paint0_linear_1621_3648)" stroke-width="0.5" transform="rotate(90 27.058 27.059)"></circle>
                                        <g className="btn-sliderr-left__arrow-1 relative"><path stroke="#F4F4F4" stroke-miterlimit="10" stroke-width="0.5" d="M37.117 27h-20M21.117 23l-4 4 4 4"></path></g>
                                        <g className="btn-sliderr-left__arrow-2 absolute top-0 left-0"><path stroke="#F4F4F4" stroke-miterlimit="10" stroke-width="0.5" d="M37.117 27h-20M21.117 23l-4 4 4 4"></path></g>
                                        <defs><linearGradient id="paint0_linear_1621_3648" x1="27.248" x2="27.248" y1="53.912" y2="0.15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs>
                                    </svg>
                                </button>

                                <div className="lg:hidden px-3 flex" >
                                    <h1>{display + 1}/{data.content.length}</h1>
                                </div>

                                <button ref={prevRef} type="button" onClick={handleNext} className="prev  h-[70px] w-[70px] btn-sliderr btn-sliderr-right overflow-hidden">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-55 h-auto" fill="none" viewBox="0 0 55 55">
                                        <circle cx="27.177" cy="27.059" r="26.809" stroke="url(#paint0_linear_1621_3653)" stroke-width="0.5" transform="rotate(90 27.177 27.059)"></circle>
                                        <g className="btn-sliderr-right__arrow-1 relative"><path stroke="#F4F4F4" stroke-miterlimit="10" stroke-width="0.5" d="M17.118 27h20M33.118 23l4 4-4 4"></path></g>
                                        <g className="btn-sliderr-right__arrow-2 absolute top-0 left-0"><path stroke="#F4F4F4" stroke-miterlimit="10" stroke-width="0.5" d="M17.118 27h20M33.118 23l4 4-4 4"></path></g><defs><linearGradient id="paint0_linear_1621_3653" x1="27.367" x2="27.367" y1="53.912" y2="0.15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop>
                                            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs>
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='w-full lg:mb-6 flex justify-center items-center ' >
                    <div className='w-[65%] flex justify-center lg:justify-between items-center'>
                        {data.header.map((item, index) => (
                            <div
                                className={`${display === index
                                    ? "h-[90px] font-semibold lg:text-left text-center cursor-pointer opacity-60 tracking-wide w-full ml-3"
                                    : "h-[90px] cursor-pointer hidden lg:flex font-semibold opacity-60 tracking-wide w-full ml-3"
                                    }`}
                                key={index}
                                onClick={() => handleHeaderClick(index)}
                            >
                                <div className=" h-[90%]  w-full ">
                                    <h1 className='p-2 h-full flex justify-center items-center uppercase w-full '>{item.text}</h1>
                                </div>
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: display === index ? '0%' : '-100%' }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className={`${display === index ? 'w-full relative flex items-center justify-center h-[10%] ' : 'w-full h-[10%] hidden'}`}
                                >
                                    <img
                                        className=' lg:block hidden  w-full -left-8 absolute '
                                        src={data.dash}
                                        alt=''
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            <div ref={containerRef} className=' flex pt-[1rem] px-3 lg:px-0 items-center justify-center w-full ' >

                <AnimatePresence mode="wait">

                    <motion.div
                        key={display}
                        className="w-full lg:w-[70%] items-center lg:items-start z-30 h-full flex lg:flex-row flex-col"
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                    >
                        <div>
                            <img src={data.content[display].img} className="rounded-3xl xl:h-[400px] lg:h-[300px]  object-cover xl:w-[650px] lg:w-[550px] border" alt={`Slide ${display + 1}`} />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="xl:w-[42%] h-full lg:w-[60%] lg:ml-6 ml-0 ">
                            <ul className="grid h-full text-sm lg:text-sm w-full xl:gap-y-5 lg:gap-y-0 gap-y-5 gap-6 px-1 xl:pt-10 lg:pt-[10px] pt-10 xl:p-4 lg:grid-rows-3 md:grid-cols-2 grid-cols-1 lg:grid-cols-2">
                                {[data.content[display].point1, data.content[display].point2, data.content[display].point3, data.content[display].point4, data.content[display].point5, data.content[display].point6]
                                    .filter(point => point)
                                    .map((point, index) => (
                                        <motion.li
                                            key={index}
                                            className="w-full flex"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <FaRegCircle className="mr-2 lg:text-[20px] mt-2" /> {point}
                                        </motion.li>
                                    ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

            </div>

        </div>
    );
}


export default SlideshowSection2;