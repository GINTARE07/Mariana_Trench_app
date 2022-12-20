import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Zone3.css'
import TrenchServices from '../../services/TrenchServices';
import InfoDisplayPopUp from "../InfoDisplayPopup";
import StaticInfoDisplayPopUp from "../StaticInfoDisplayPopup";
import sub from "../../media/submarine.png"
import titanic from "../../media/icons/titanic_icon.png"
import worm from "../../media/icons/zombie_worm_icon.png"
import shark from "../../media/icons/white_shark_icon.png"
import cable from "../../media/icons/undersea_cable_icon.png"
import anglerFish from "../../media/icons/angler_fish_icon.png"
import benthocodon from "../../media/icons/benthocodon_jellyfish_icon.png"

export default function Zone3() {

  const [isOpen0, setIsOpen0] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
      TrenchServices.getTrench().then(info => setData(info[2].zone3))
  }, []);

  const togglePopup0 = () => {
    setIsOpen0(!isOpen0);
  };

  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  };

  const togglePopup4 = () => {
    setIsOpen4(!isOpen4);
  };

  const togglePopup5 = () => {
    setIsOpen5(!isOpen5);
  };

  const togglePopup6 = () => {
    setIsOpen6(!isOpen6);
  };

  return (
    <div className='background3'>
      <h4>Bathypelagic Zone - The Midnight Zone</h4>
      <div id='up-down'>
        <Link to ="/zone2" ><button>Up</button></Link>
        <Link to ="/zone4" ><button>Down</button></Link>
      </div>
      <div>
          <input
            type="button"
            value="Zone Information"
            onClick={togglePopup0}
          />
          {isOpen0 && (
            <StaticInfoDisplayPopUp
              content={
                <>
                  <img src="../media/barry.png"></img>
                  <br></br>
                  <h3>
                    This is where the title of the static level information will
                    go!
                  </h3>
                  <br></br>
                  <p>
                    This is where the details of the static level information
                    will go!
                  </p>
                  <br></br>
                  <p>Say hello to Barry!</p>
                </>
              }
              handleClose={togglePopup0}
            />
          )}
        </div>
        <div className="element_container3">
        <div>
          <button className="element3" onClick={togglePopup1}>
            <img className="element_img" src={cable}></img>
          </button>
          {isOpen1 && (
            <InfoDisplayPopUp content={data[0]} handleClose={togglePopup1} />
          )}
        </div>
        <div>
          <button className="element3" onClick={togglePopup2}>
            <img className="element_img" src={anglerFish}></img>
          </button>
            {isOpen2 && (
              <InfoDisplayPopUp content={data[1]} handleClose={togglePopup2} />
            )}
        </div>
        <div>
            <button className="element3" onClick={togglePopup3}>
              <img className="element_img" src={benthocodon}></img>
            </button>
            {isOpen3 && (
              <InfoDisplayPopUp content={data[2]} handleClose={togglePopup3} />
            )}
          </div>
         
        <div>
          <button className="element3" onClick={togglePopup4}>
            <img className="element_img" src={shark}></img>
          </button>
          {isOpen4 && (
            <InfoDisplayPopUp content={data[3]} handleClose={togglePopup4} />
          )}
        </div>
        <div>
          <button className="element3" onClick={togglePopup5}>
            <img className="element_img" src={worm}></img>
          </button>
          {isOpen5 && (
            <InfoDisplayPopUp content={data[4]} handleClose={togglePopup5} />
          )}
        </div>
        <div>
          <button className="element3" onClick={togglePopup6}>
            <img className="element_img" src={titanic}></img>
          </button>
          {isOpen6 && (
            <InfoDisplayPopUp content={data[5]} handleClose={togglePopup6} />
          )}
        </div>
        </div>
      <img className='sub' src={sub} ></img>
        {/* <img id='ripple1' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple2' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple3' className='ripple' src='./media/underwater_ripple.png'></img>
        <img id='ripple4' className='ripple' src='./media/underwater_ripple.png'></img> */}

    </div>
  )
}
