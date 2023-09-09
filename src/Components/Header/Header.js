import React, { useState } from 'react'
import css from './Header.module.scss'
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi"
import {motion} from "framer-motion"
import {getMenuStyles, headerVariants} from "../../utils/motion"
import useHeaderShadow from '../../hooks/useHeaderShadow'

const Header = () => {

  const [menuOpen, setOpenMenu] = useState(false);
  const headerShadow = useHeaderShadow()
  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}} 
    className={`bg-primary paddings ${css.wrapper}`}
    style={{boxShadow: headerShadow}}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={`${css.name}`}>
          Kamran
        </div>
        <ul className={`flexCenter ${css.menu}`} style={getMenuStyles(menuOpen)}>
          <li><a href=''>Service</a></li>
          <li><a href=''>Experience</a></li>
          <li><a href=''>Portfolio</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>(+91) &nbsp; 9730632772</p>
            <BiPhoneCall size={40}/>
          </li>
        </ul>
        <div className={`${css.menuIcon}`} onClick={() => setOpenMenu(!menuOpen)}>
          <BiMenuAltRight size={40} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header