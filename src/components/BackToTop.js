import React, {useState, useEffect} from "react";
import {FaAngleUp} from 'react-icons/fa'

const BackToTop = () => {

    const [showBackTopButton, setShowBackTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBackTopButton(true)
            } else {
                setShowBackTopButton(false)
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

    return (
        <div>
            {showBackTopButton && <FaAngleUp className="fixed bottom-4 right-5 h-10 w-10 rounded-full bg-myteal text-backtop cursor-pointer bg-contain animate-bounce transition duration-200 ease-in-out transform hover:opacity-60 hover:text-namewhite hover:bg-navgrey" onClick={scrollTop} />}
        </div>
    )
}

export default BackToTop