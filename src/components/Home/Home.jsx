
import React, { useState } from "react";
import "./Home.css";
import Photo from "../image/logo-2.png";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [email] = useState();

  return (
    <>
      <div>
        <section className="beginer">
          <video
            className="background-video"
            width="100%"
            autoPlay
            loop
            muted
            src="https://eu-wotp.wgcdn.co/static/5.121.0_6a0de2/wotp_static/img/core/frontend/scss/common/blocks/video-bg/img/video-bg.mp4"
          ></video>
          <img
            className="logo-image"
            width="50%"
            src={Photo}
            alt="Логотип World of Tanks"
          />
          <p className="intro-text">
            World of Tanks — культовая ММО-игра о бронетехнике, покорившая
            миллионы игроков по всему миру. Разнообразие игровых карт, исторически
            достоверные машины, реалистичный геймплей — присоединяйтесь к армии
            танкистов и окунитесь в атмосферу легендарных сражений.
          </p>
        </section>
      </div>
      <section className="word">
        <h2>ИГРА С ИСТОРИЕЙ</h2>
        <div className="carousel-section">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <p className="award-title">ЧЕТЫРЕ НАГРАДЫ GOLDEN JOYSTICK</p>
              <h3 className="award-description">
                «Лучшая MMO» (2012), «Лучшая онлайн-игра» (2013), <br />
                «По-прежнему в тренде» (2017, 2018)
              </h3>
            </Carousel.Item>
            <Carousel.Item>
              <p className="award-title">ДВА МИРОВЫХ РЕКОРДА ГИННЕССА</p>
              <h3 className="award-description">
                За наибольшее количество игроков, <br />
                одновременно пребывающих на игровом сервере
              </h3>
            </Carousel.Item>
            <Carousel.Item>
              <p className="award-title">КРИ 2011</p>
              <h3 className="award-description">
                Звание лучшей игры года и приз зрительских симпатий
              </h3>
            </Carousel.Item>
          </Carousel>
        </div>
        <p className="description">
          World of Tanks — это более 600 бронированных машин середины ХХ века. В
          ваших руках окажутся лучшие танки эпохи - от легендарных Т-34 и ИС,
          ковавших победу Красной армии, до безумных идей гениев инженерной
          мысли, так и не добравшихся до конвейерной ленты. Это несколько
          десятков уникальных боевых локаций, гарантирующих тактическое
          разнообразие геймплея. Это 160-миллионная армия поклонников по всему
          миру. Присоединяйтесь!
        </p>
      </section>
      <section className="before-scrin">
        <h1>Скриншоты</h1>
        <p>
          Реалистичная графика и звук дают возможность почувствовать себя частью
          настоящего танкового боя
        </p>
      </section>
      <section className="screenshots">
        <Carousel controls>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/1_a66_m103_redshir_1024x.jpg"
              alt="Скриншот 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/3_f18_bat_chatillon25t_pereval_1024x.jpg"
              alt="Скриншот 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/4_r45_is_7_mannerheim_line_1024x.jpg"
              alt="Скриншот 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/5_a116_xm551_prohorovka_1024x.jpg"
              alt="Скриншот 4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/6_a120_m48a5_patton_aerodrom_1024x.jpg"
              alt="Скриншот 5"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/7_a116_xm551_mannerheim_line_1024x.jpg"
              alt="Скриншот 6"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/8_lt08_progetto_m40_mod_65_el-halluf_1024x.jpg"
              alt="Скриншот 7"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/9_r133_kv_122_02_murovanka_1024x.jpg"
              alt="Скриншот 8"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eu-wotp.wgcdn.co/dcont/fb/image/tmb/10_gb31_conqueror_gc_rudniki_1024x.jpg"
              alt="Скриншот 9"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="nationality">
        <h1>Более 600 боевых машин от крупнейших танкостроительных держав</h1>
        <p>Каждая модель воссоздана до мельчайших деталей</p>
        <Carousel
          indicators={false}
          className="text-center nat_inner"
        >
          <Carousel.Item>
            <div className="carousel-item-content">
              <h1 className="nat">СССР</h1>
              <img
                className="d-block w-100"
                src="https://eu-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/ussr.webp"
                alt="СССР"
              />
              <p>Т-34, ИС, ИС-7, КВ-1, ИСУ-152</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h1 className="nat">ГЕРМАНИЯ</h1>
              <img
                className="d-block w-100"
                src="https://eu-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/germany.webp"
                alt="Германия"
              />
              <p>StuG III, Panther, Maus, Tiger, Pz. III</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h1 className="nat">США</h1>
              <img
                className="d-block w-100"
                src="https://eu-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/usa.webp"
                alt="США"
              />
              <p>Sherman, Pershing, Patton, T32, Hellcat</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h1 className="nat">ФРАНЦИЯ</h1>
              <img
                className="d-block w-100"
                src="https://eu-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/france.webp"
                alt="Франция"
              />
              <p>Somua S35, AMX 13, B1, ARL 44</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h1 className="nat">ВЕЛИКОБРИТАНИЯ</h1>
              <img
                className="d-block w-100"
                src="https://eu-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/uk.webp"
                alt="Великобритания"
              />
              <p>Churchill, Cromwell, Centurion, Conqueror</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h1 className="nat">ИТАЛИЯ</h1>
              <img
                className="d-block w-100"
                src="https://eu-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/italy.webp"
                alt="Италия"
              />
              <p>Carro P.88, P40, Semovente M41, P26/40</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h1 className="nat">ЯПОНИЯ</h1>
              <img
                className="d-block w-100"
                src="https://eu-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/japan.webp"
                alt="Япония"
              />
              <p>Chi-Nu, Type 4 Heavy, Type 5 Heavy, O-I</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h1 className="nat">ПОЛЬША</h1>
              <img
                className="d-block w-100"
                src="https://eu-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/poland.webp"
                alt="Польша"
              />
              <p>7TP, 10TP, 14TP, 25TP</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Home;
