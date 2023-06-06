import { useRef, useEffect } from "react"
import { gsap } from "gsap/gsap-core"
import styles from "./Is.module.css"

const Is = () => {
  const is = useRef(null)
  let tl: any = null

  useEffect(() => {
    gsap.fromTo(
      is.current,
      { y: 1000, opacity: 0 },
      { duration: 2, opacity: 1, y: 0, delay: 0.25 }
    )
  }, [])

  function isFun() {
    if (tl && !tl.reversed()) {
      tl.reverse()
    } else {
      tl = gsap.to(is.current, {
        duration: 1,
        ease: "power3.inOut",
        x: "-25vw",
        width: "100vw",
        zIndex: 10,
      })
    }
  }

  return (
    <>
      <div ref={is} onClick={isFun} id="is" className={styles.is}>
        <h1>is</h1>
      </div>
    </>
  )
}

export default Is
