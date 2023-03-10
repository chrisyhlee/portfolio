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
            {showBackTopButton && <FaAngleUp className="backTopButton backTopStyle grow" onClick={scrollTop} />}
        </div>
    )
}

export default BackToTop