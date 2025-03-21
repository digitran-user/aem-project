import type React from "react"
import './AnimatedSlider.css';

export interface AnimatedSlide {
    id: string
    imageUrl: string
}
export interface AnimatedSlideProps {
    slides?: AnimatedSlide[],
    centerImage?: string
}
export const AnimatedSlider: React.FC<AnimatedSlideProps> = ({
    slides = [],
    centerImage = ""
}) => {
    return (
        <div className="banner-container">
            <div className="banner">
                <div className="slider" style={{ "--quantity": slides.length } as React.CSSProperties}>
                    {slides.map((slide, index) => (
                        <div className="item" key={index} style={{ "--position": index + 1 } as React.CSSProperties}>
                            <img src={slide.imageUrl} alt={`Dragon ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="content">
                    {/* <h1 data-content="Slider">EICHER</h1>
                    <div className="author">
                        <h2>Eicher Motors</h2>
                        <p><b>Trusted Brand</b></p>
                        <p>World most trusted motor brand</p>
                    </div> */}
                  {centerImage && <div className="model" style={{backgroundImage: `url(${centerImage})`}}></div>}
                </div>
            </div>
        </div>
    )
}
