import React, { useContext, useEffect, useState } from 'react'
import "./Home.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { MainContextBasket } from '../../context/MainProvaiderBasket';
import { MainContextwishlist } from '../../context/MainProvaiderWishList';
import { Link } from 'react-router-dom';

function Home() {
  const { addBasket } = useContext(MainContextBasket)
  const {wishlist,addwishlist,isExist} = useContext(MainContextwishlist)
  const [search, setsearch] = useState("")
  
  const [product, setproduct] = useState([])

  async function getProduct() {
    const res = await fetch("http://localhost:3000/product")
    const data = await res.json()
    setproduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  function inc(item) {
    setproduct([...product].sort((a,b) => (a[item] > b[item]) ? 1 : ((b[item] > a[item]) ? -1 : 0)))
  }
  function dec(item) {
    setproduct([...product].sort((a,b) => (a[item] < b[item]) ? 1 : ((b[item] < a[item]) ? -1 : 0)))
  }
  return (
    <main>
      <section className='main_section'>
        <div className='main_div_text'>
          <h1>Welcome To EatWell</h1>
          <p>Come and eat well with our delicious & healthy foods.</p>
          <div className='button'>Reservation</div>
        </div>
      </section>
      <section className='welcome_section'>
        <div className='container'>
          <div className='text_div'>
            <p className='p_1'>OUR STORY</p>
            <h1>Welcome</h1>
            <p className='p_2'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <br /> <br />
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div className='button_div'>Learn More About Us</div>
          </div>
          <div className='image_div'>
            <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className='fetch_section'>
        <div className='main_container'>
          <div className='container_1'>
            <input type="text" placeholder='search' value={search} onChange={(e)=>setsearch(e.target.value)} />
            <div className='text_div'>
              <p className='p_1'>OUR OFFERS</p>
              <h1>Our Offer This Summer</h1>
              <p className='p_2'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className='sort_button'><button onClick={()=>inc("name")}>A-z</button > <button onClick={()=>dec("name")}>Z-a</button></div>
          </div>
          <div className='container_2'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper" slidesPerView={1} loop
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }
              }
            >
              {product
              .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
              .map((x) => (

                <SwiperSlide style={{ backgroundColor: "white" }}>
                  <div className='text_div'>
                    <img src={x.image} alt="" style={{ height: "200px", width: "100%" }} />
                    <div className='text_div2' style={{ padding: "1rem", textAlign: "center ", }}>
                      <h5>{x.price}</h5>
                      <h3>{x.name}</h3>
                      <p>{x.title}</p>
                      <div onClick={()=>addwishlist(x)}>{isExist(x) ? <i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</div>
                      <button onClick={() => addBasket(x)}>basket</button>
                      <Link to={`/detail/${x._id}`}>detail</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>

          </div>
        </div>
      </section>
      <section className='end_section'>
        <div className='container_end'>
          <div className='text_div_gallery'>
            <h1>Gallery</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className='end_img_div'>
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home