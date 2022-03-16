import React, { useEffect } from "react";
import AllOutIcon from '@material-ui/icons/AllOut';
import DoneIcon from '@material-ui/icons/Done';
import EcoIcon from '@material-ui/icons/Eco';
import LockIcon from '@material-ui/icons/Lock';
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const Style = "text-white text-xs"

const arrayIcon = [<AllOutIcon fontSize="small" className={Style} />, <DoneIcon fontSize="small" className={Style} />, <EcoIcon fontSize="small" className={Style} />, <LockIcon fontSize="small" className={Style} />]
const Color = ["from-indigo-500 to-blue-500", "from-blue-400 to-blue-300", "from-green-500 to-green-400", "from-yellow-600 to-yellow-500"]


const Card = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);



    return (
        <div data-aos="fade-right" className={`transform hover:scale-110 cursor-pointer transition delay-100 w-3/12  p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r ${Color[props.icon]}`} >
            <div className="flex justify-between">
                <div></div>
                <div className=" w-10  h-10 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30">
                    {arrayIcon[props.icon]}
                </div>
            </div>
            <p  data-aos="fade-right" className="text-gray-200 text-xs  ">
                {props.title}
            </p>
            <p className="text-gray-50 text-lg  font-semibold  ">
                {props.balance} Token
            </p>
            <p className="text-gray-300  text-sm ">
                ${props.token}
            </p>






        </div>
    )
}

export default Card
