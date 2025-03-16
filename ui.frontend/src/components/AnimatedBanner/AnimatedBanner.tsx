import React, { useRef, useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "./AnimatedBanner.css";

export interface AnimatedBannerItem {
    id: string
    title: string
    description?: string
    backgroundImage: string
    // category: string;
    backgroundColor?: string;
}

export interface AnimatedBannerProps {
    itemList: AnimatedBannerItem[];
}

export const AnimatedBanner: React.FC<AnimatedBannerProps> = ({ itemList = [] }) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const prevBtnRef = useRef<HTMLButtonElement | null>(null);
    const nextBtnRef = useRef<HTMLButtonElement | null>(null);
    const indicatorRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState<number>(0);
    let autoPlay: NodeJS.Timeout;

    useEffect(() => {
        const carousel = carouselRef.current;
        const items = carousel?.querySelectorAll<HTMLDivElement>(".list .item");
        const indicator = indicatorRef.current;
        const dots = indicator?.querySelectorAll<HTMLLIElement>(".indicators ul li");
        const lastPosition = items?.length ? items.length - 1 : 0;

        const setSlider = () => {
            carousel?.querySelector(".list .item.active")?.classList.remove("active");
            items?.[active]?.classList.add("active");
            indicator?.querySelector(".indicators ul li.active")?.classList.remove("active");
            dots?.[active]?.classList.add("active");
            if (indicator?.querySelector(".number")) {
                indicator.querySelector(".number")!.textContent = `0${active + 1}`;
            }
        };

        const startAutoPlay = () => {
            clearInterval(autoPlay);
            autoPlay = setInterval(() => {
                nextBtnRef.current?.click();
            }, 2000);
        };

        setSlider();
        startAutoPlay();

        nextBtnRef.current!.onclick = () => {
            setActive((prev) => (prev + 1 > lastPosition ? 0 : prev + 1));
        };

        prevBtnRef.current!.onclick = () => {
            setActive((prev) => (prev - 1 < 0 ? lastPosition : prev - 1));
        };

        dots?.forEach((dot, index) => {
            dot.onclick = () => setActive(index);
        });

        return () => clearInterval(autoPlay);
    }, [active]);

    return (
        <div className="animated-banner">
            <section className="carousel" ref={carouselRef}>
                <div className="list">
                    {itemList.map((item, index) => (
                        <div className="item" key={index}>
                            <figure>
                                <img src={item.backgroundImage} alt={item.title} />
                            </figure>
                            <div className="content">
                                {/* <p className="category">{item.category}</p> */}
                                {item.title && <h2>{item.title}</h2>}
                                {item.description && <p className="description">{item.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button ref={prevBtnRef} id="prev" className="flex justify-center items-center">
                        <MdArrowBackIos />
                    </button>
                    <button ref={nextBtnRef} id="next" className="flex justify-center items-center">
                        <MdArrowForwardIos />
                    </button>
                </div>
                <div className="indicators" ref={indicatorRef}>
                    {/* <div className="number">02</div> */}
                    <ul>
                        {itemList.map((_, index) => (
                            <li key={index} className={index === active ? "active" : ""} />
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};
