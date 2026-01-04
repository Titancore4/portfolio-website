import "./carousel.styles.scss"
import { useState } from "react"
import CarouselItem from "../carousel-item/carousel-item.component"

const Carousel = ({ClassName,CarouselItems}) => {

    const [counter, setCounter] = useState(0);

    const prevSlide = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

        
    const nextSlide = () => {
        if (counter !== CarouselItems.length - 1) {
            setCounter(counter + 1)
        }
    }

    // document.getElementsByClassName("carousel-item")

    return (
        <div className={ClassName} data-aos="fade-up" data-aos-anchor-placement="center-bottom">

            <div className="main-container">
                <button onClick={prevSlide} style={{visibility: counter === 0 ? "hidden" : "visible"}}>&#10094;</button>
            <div className="carousel">
                {CarouselItems.map((item) => (<CarouselItem key={item.id} item={{...item, counter}} counter={counter} />))}
            </div>
                <button onClick={nextSlide} style={{visibility: counter === CarouselItems.length - 1 ? "hidden" : "visible"}}>&#10095;</button>
            </div>
        </div>
    )
}

export default Carousel;