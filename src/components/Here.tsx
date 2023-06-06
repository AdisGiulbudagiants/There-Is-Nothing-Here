import { useRef, useEffect } from "react"
import { gsap } from "gsap/gsap-core"
import styles from "./Here.module.css"

const Here = () => {
  const here = useRef(null)
  const wdt = window.innerWidth
  let tl: any = null

  useEffect(() => {
    gsap.fromTo(
      here.current,
      { y: 1000, opacity: 0 },
      { duration: 2, opacity: 1, y: 0, delay: 0.75 }
    )
  }, [])

  function hereFun() {
    if (tl && !tl.reversed()) {
      tl.reverse()
    } else if (wdt <= 768) {
      tl = gsap.to(here.current, {
        duration: 1,
        ease: "power3.inOut",
        x: "-50vw",
        y: "-50vh",
        width: "100vw",
        height: "100vh",
        zIndex: 40,
      })
    } else {
      tl = gsap.to(here.current, {
        duration: 1,
        ease: "power3.inOut",
        x: "-75vw",
        width: "100vw",
        height: "100vh",
        zIndex: 40,
      })
    }
  }

  return (
    <>
      <div ref={here} onClick={hereFun} className={styles.here}>
        <h1>here</h1>
      </div>
    </>
  )
}

export default Here
