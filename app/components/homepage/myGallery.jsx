"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "./../../../img/1.png",
        thumbnail: "./../../../img/1.png",
    },
    {
        original: "./../../../img/2.png",
        thumbnail: "./../../../img/2.png",
    },
    {
        original: "./../../../img/3.png",
        thumbnail: "./../../../img/3.png",
    },
    {
        original: "./../../../img/4.png",
        thumbnail: "./../../../img/4.png",
    },
    {
        original: "./../../../img/5.png",
        thumbnail: "./../../../img/5.png",
    },
    {
        original: "./../../../img/6.png",
        thumbnail: "./../../../img/6.png",
    },
    {
        original: "./../../../img/7.png",
        thumbnail: "./../../../img/7.png",
    },
    {
        original: "./../../../img/8.png",
        thumbnail: "./../../../img/8.png",
    },
    {
        original: "./../../../img/9.png",
        thumbnail: "./../../../img/9.png",
    },
];

export default function MyGallery() {
    return <div className="pb-20">
        <ImageGallery items={images}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={true}
            autoPlay={true}
            slideInterval={3000}
            lazyLoad={true}
            showBullets={true}
            showIndex={true}
            showNav={false}
        />
    </div>;
}