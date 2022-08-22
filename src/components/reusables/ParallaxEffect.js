import { useEffect, useState } from "react";



const maxHeight = () => {
    const body = document.body,
        html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
}

export default function ParallaxEffect(props) {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <img src={props.src} style={{ position: "absolute", bottom: 0, left: 0, height: props.height, width: props.width, transform: `translateY(min(${offsetY * props.speed}px, ${maxHeight}))` }} alt="" />
        </>
    )
}