import { useState, useEffect } from 'react'

const usePointbreak = () => {

    //le paso el tamaño por prop 
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleWindowSize = () => setWidth(window.innerWidth); //se ejecute cuando sea superior al breakpoint
        window.addEventListener("resize", handleWindowSize);
        return () => window.removeEventListener("resize", handleWindowSize);
    }, []);

    // Return the width so we can use it in our components
    return { width };
}

export default usePointbreak;