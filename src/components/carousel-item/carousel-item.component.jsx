import "./carousel-item.styles.scss"
import { Fragment } from "react";

const CarouselItem = ({ item }) => {

    const { id, image, counter } = item;

    return (
        <Fragment>

            <img 
                className="carouse-item" 
                src={image} alt="certificate" 
                style={{
                        left: `${(id - 1) * 100}%`,
                        transform: `translateX(-${counter * 100}%)`
                    }} />

        </Fragment>
    )
}

export default CarouselItem;