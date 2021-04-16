import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
             <div class="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YmQ1NDM5ZDgt-w1500._CB412095397_.jpg" alt="" />
                <div className="home__row">
                    <Product id="14452345" title="USPA shirt" price='29.99' image='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/Y2E4YjY3ZjIt/Y2E4YjY3ZjIt-NGVhZmMxZWQt-w379._SY304_CB656173548_.jpg' rating={5} /> 
                    <Product id="97451545" title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set Paperback – 1 August 2019
                    " price="20.99" rating={4} image="https://images-na.ssl-images-amazon.com/images/I/51Do0NLYmDL._SX445_BO1,204,203,200_.jpg"/>
                </div>
                <div className="home__row">
                    <Product id="9561212" title="Upgrade to latest smart phones" rating={5} price="600"image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vivo/march/UD/MSO/D21938933_WL_MSO_UpgradeDays_DESKTOP_CC._SY304_CB657385560_.jpg"/>
                    <Product id="84515415" title="For efficient home working" rating={3} price="300" image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"/>
                    <Product id="54624152" title="Ethinic wear" rating={3} price="50" image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Regionalnewyear/MSO/Final/PC-CC-1--ugadi-1x._SY304_CB655851673_.jpg" />                
                </div>
                <div className="home__row">
                    <Product id="785142520" title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXLAPERYQKOL (Glossy Black) with alexa and all latest features updated(2021 Model)
                    " rating={4} price="500" image="https://m.media-amazon.com/images/I/71fEd9glTIL._AC_UY218_.jpg" />  
                </div>
             </div>
        </div>
    )
}

export default Home;
