import { useEffect, useState, useRef } from "react";

const useInfinityAndBeyond = () => {

    const [show, setShow] = useState(false);
    const fromRef = useRef();

    useEffect(() => {

        const onChange = (entries) => {
            console.log("entries", entries);
            const elemento = entries[0];
            console.log(elemento.isIntersecting);
            if (elemento.isIntersecting) {
                setTimeout(() => {
                    setShow(true);
                    observer.disconnect();
                }, 1000);
            }
        }
        
        const observer = new IntersectionObserver(onChange, { rootMargin: "10px" });
        observer.observe(fromRef.current);
        return () => observer.disconnect();
    }, []);

    return { show, fromRef };
}

export default useInfinityAndBeyond;

