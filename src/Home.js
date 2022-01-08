import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
                    alt="" />
                
                <div className="home__row">
                    <Product
                        id="12345678"
                        title="Kenwood Kmix Stand Mixer for Baking, Stylish kitchen mixer with k beater dough hook 5 litre glass bowl and much more aksdnpoasbdibaosibdojaisbdjasbdjibasojibdjaisbdjaisbdjiasbdjibasdjibasbjid"
                        image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
                        price={30}
                        rating={4}
                        />
                    <Product 
                        id="40404040"
                        title="The Lean Startup"
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                        price={19.99}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="10101010"
                        title="Amazon echo smart speaker with alexa charcoal black color"
                        image="https://m.media-amazon.com/images/I/61nCzkCteAL._AC_UY218_.jpg"
                        price={65}
                        rating={4}
                    />
                    <Product 
                        id="20202020"
                        title="New Apple ipad pro as always nothing new but u still gonna buy it"
                        image="https://m.media-amazon.com/images/I/6162WMQWhVL._AC_UY218_.jpg"
                        price={999999}
                        rating={1}
                    />
                    <Product 
                        id="30303030"
                        title="The something which u need to buy......."
                        image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"
                        price={15}
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="98765432"
                        title="SAmsung Monitor 49' curved oled 75hz"
                        image="https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_UL320_.jpg"
                        price={200}
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
