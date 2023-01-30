import React, { FC } from 'react';
import classes from './MyImage.module.scss'
interface MyImageProps {
    webp?: string
    jpg: string
    className?: string
    height?: number
    alt?: string
}
const MyImage: FC<MyImageProps> = ({ jpg, webp, className, height = 350, alt }) => {
    return (
        <div
            className={className ? [classes.img, className].join(' ') : classes.img}
            style={{ height: height }}
        >
            <picture>
                {webp && <source srcSet={webp} type="image/webp" />}
                <img src={jpg} alt={alt} />
            </picture>
        </div>
    );
};

export default MyImage;