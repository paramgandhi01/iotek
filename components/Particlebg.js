import React from 'react';
import Particles from "react-tsparticles";
import Config from "./Config";
// import "./particle.css";

export default function Particlebg() {
  return (
    <div>
        <Particles
        options={
          {
            canvas: {
              w: 0,
              h: 0
            },
            // background:{
            //   color:"#0e387a"
            // },
            // fpsLimit:60,
            interactivity:{
              detectson:"canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: 'repulse'
                },
                onclick: {
                  enable: false,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab:{
                  distance: 400,
                  line_linked:{
                    opacity: 1
                  }
                },
                bubble:{
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity:8,
                  speed:3
                },
                repulse:{
                  distance: 200,
                  duration: 0.4
                },
                push:{
                  particles_nb: 4
                },
                remove:{
                  particles_nb: 2
                }
              },
              mouse:{}
            },
            particles:{
              color:{
                value:"#fff"
              },
              number:{
                value: 10,
                density:{
                  enable:true,
                  value_area:800
                },
                // limit:0,
                // value:400,
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#ff0000'
                },
                polygon: {
                  nb_sides: 5
                },
                // image: {
                //   src: '',
                //   width: 100,
                //   height: 100
                // }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              // line_linked: {
              //   enable: true,
              //   distance: 100,
              //   color: '#fff',
              //   opacity: 1,
              //   width: 1
              // },
              move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                // bounce: false,
                attract: {
                  enable: false,
                  rotateX: 3000,
                  rotateY: 3000
                }
              },
              size: {
                value: 30,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 1,
                  sync: false
                }
              },
            }
          }
        }
          />
    </div>
  )
}
