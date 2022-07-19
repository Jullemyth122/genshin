import './App.scss';
import React, { useEffect } from 'react'
import gsap from 'gsap'
function App() {

    useEffect(() => {
        const allIntroItems = document.querySelectorAll(".intro")

        const utils = gsap.utils.toArray(allIntroItems)

        utils.forEach((elem,i) => {
            gsap.set(elem.querySelector(".name"),{left:`${ 9.0 * i}%`})
            gsap.set(elem.querySelector("img"),{opacity:0})
            gsap.set(elem,{
                clipPath:`polygon(${9 * (i+1)}% 0%, ${9 * (i + 1)}% 100%, ${9 * i}% 100%, ${9* i}% 0%)`
            })
            gsap.set(elem.querySelector(".character"),{
                opacity:0,
            })

            function GsapTextFunctions(array) {
              array.forEach((elem,i) => {
                  elem.innerHTML = elem.textContent.replace(/\S/g, 
                  `
                  <span class="l-hide">
                      $&
                  </span> 
                  `);
              })
          }
          GsapTextFunctions( gsap.utils.toArray(elem.querySelector(".name").children[0]))

          function firstTextFunctions(array) {
            const firstGsap = gsap.utils.toArray(array)
            firstGsap.forEach((elem,i) => {
                console.log(elem)
                gsap.fromTo(elem,{scale:2,rotate:"-90deg"},{
                    scale:1,
                    delay:1,
                    rotate:"0deg",
                    x:0,
                    // delay:2,
                    duration:(firstGsap.length/(firstGsap.length - i * (0.1 * firstGsap.length))),
                    ease:"power2.inOut"
                })
            })
        }

        const rFirst = elem.querySelector(".name").children[0].children
        // console.log(rFirst)
        firstTextFunctions(rFirst)

            elem.addEventListener("click",() => {
                gsap.set(elem,{
                    zIndex:11,
                })
                gsap.to(utils,{
                    clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)",
                    duration:1,
                    ease:"power2.inOut",
                    stagger:0.1,
                }) 
                gsap.fromTo(elem,{
                    // clipPath:`polygon(${9 * (i+1)}% 0%, ${9 * (i + 1)}% 100%, ${9 * i}% 100%, ${9* i}% 0%)`
                },{
                    clipPath:"polygon(100% 0, 100% 100%, 0 100%, 0 0)",
                    duration:2,
                    delay:2,
                    ease:"power2.inOut",
                })
                gsap.to(elem.querySelector(".character"),{
                    opacity:1,
                    delay:2,
                    duration:2,
                    ease:"power2.inOut"
                })
                gsap.to(elem.querySelector(".name"),{
                    "--name-line-bg":"#fff",
                    left:0,
                    duration:2,
                    delay:2,
                    ease:"power2.inOut",
                    background:"#000",
                })
                gsap.to(elem.querySelector(".name").querySelector('h1'),{
                    duration:2,
                    delay:2,
                    ease:"power2.inOut",
                    color:"#fff",
                })
                gsap.to(elem.querySelector("img"),{
                    opacity:1,
                    duration:0.5,
                    delay:2,
                    ease:"power2.inOut",
                })
            })

        })

    },[])

  return (
    <div className="App">
        <div className='container-fluid'>
            <div className="sandrone intro">
                <div className="name">
                    <h1>
                        木偶桑多涅 
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Marionette 
                    </div>
                    <div className="lower-name">
                        Sandrone
                    </div>
                </div>
                <img src="./genshins/sandrone.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="rooster intro">
                <div className="name">
                    <h1>
                        公普契涅拉
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Rooster
                    </div>
                    <div className="lower-name">
                        Pulcinella 
                    </div>
                </div>
                <img src="./genshins/pulcinella.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="pantalone intro">
                <div className="name">
                    <h1>
                        富人潘塔罗涅
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Regrator
                    </div>
                    <div className="lower-name">
                        Pantalone
                    </div>
                </div>
                <img src="./genshins/pantalone.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="arlecchino intro">
                <div className="name">
                    <h1>
                        仆人阿蕾奇诺
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Knave 
                    </div>
                    <div className="lower-name">
                        Arlecchino
                    </div>
                </div>
                <img src="./genshins/arlecchino.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="childe intro">
                <div className="name">
                    <h1>
                        达达利亚公子
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Tartaglia
                    </div>
                    <div className="lower-name">
                        Childe
                    </div>
                </div>
                <img src="./genshins/childe.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="pierro intro">
                <div className="name">
                    <h1>
                        丑角皮耶罗
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Jester
                    </div>
                    <div className="lower-name">
                        Pierro
                    </div>
                </div>
                <img src="./genshins/pierro.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="damselette intro">
                <div className="name">
                    <h1>
                        哥伦比娅少女
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Columbina
                    </div>
                    <div className="lower-name">
                        Damselette
                    </div>
                </div>
                <img src="./genshins/damselette.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="capitano intro">
                <div className="name">
                    <h1>
                        队长卡皮塔诺
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        The Captain
                    </div>
                    <div className="lower-name">
                        Capitano
                    </div>
                </div>
                <img src="./genshins/capitano.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="dottore intro">
                <div className="name">
                    <h1>
                        博士多托雷
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Doctor
                    </div>
                    <div className="lower-name">
                        Dottore
                    </div>
                </div>
                <img src="./genshins/dottore.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="scaramouche intro">
                <div className="name">
                    <h1>
                        散兵斯卡拉姆齐
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Scaramouche
                    </div>
                    <div className="lower-name">
                        Balladeer
                    </div>
                </div>
                <img src="./genshins/scaramouche.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
            <div className="signora intro">
                <div className="name">
                    <h1>
                        炽烈的炎之魔女
                    </h1>
                </div>  
                <div className="character">
                    <div className="upper-name">
                        Signora
                    </div>
                    <div className="lower-name">
                        The Fair Lady
                    </div>
                </div>
                <img src="./genshins/la signora.png" alt="" />

                <div className="circle c-1"></div>
                <div className="circle c-2"></div>

                <div className="box b-1"></div>
                <div className="box b-2"></div>

            </div>
        </div>
    </div>
  );
}

export default App;
