import { useEffect, useState } from "react";

const useInfinityAndBeyond = ({ elementRef }) => {
    const [isNearScreen, setShow] = useState(false);

    useEffect(() => {
        const onChange = (entries) => {
            console.log("entries", entries)
            const elemento = entries[0]
            console.log(elemento.isIntersecting)
            if (elemento.isIntersecting) {
                setTimeout(() => {
                    setShow(true);

                    observer.disconnect();
                }, 3000);
            }
        }
        const observer = new IntersectionObserver(onChange, { rootMargin: "100px" })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    }, [])

    return isNearScreen;
}

export default useInfinityAndBeyond;

