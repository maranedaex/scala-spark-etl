import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import "normalize.css/normalize.css";
import "assets/styles/slider-animations.css";
import "assets/styles/styles-slider.css";
 
const slides = [
    {
        title: "Propuesta 1",
        description:
          "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        image: "https://i.imgur.com/ZXBtVw7.jpg",
        user: "Luan Gjokaj",
        userProfile: "https://i.imgur.com/JSW6mEk.png",
        categorias: [
          { 
            nombre: "Inteligencia Artificial"
          }, 
          {
            nombre: "Redes y Seguridad"
          },
          {
            nombre: "Diseño de videojuegos"
          }
        ]

      },
      {
        title: "Propuesta 2", 
        description:
          "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        button: "Discover",
        image: "https://i.imgur.com/DCdBXcq.jpg",
        user: "Erich Behrens",
        userProfile: "https://i.imgur.com/0Clfnu7.png",
        categorias: [
          {
            nombre: "Diseño de videojuegos"
          },
          {
            nombre: "Desarrollo Web"
          }
        ]
      },
      {
        title: "Propuesta 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: "https://i.imgur.com/DvmN8Hx.jpg",
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png",
        categorias: [
          {
            nombre: "Diseño de videojuegos"
          },
          { 
            nombre: "Inteligencia Artificial"
          }, 
          {
            nombre: "Redes y Seguridad"
          },
          {
            nombre: "Desarrollo Web"
          }
        ]
      },
      {
        title: "Propuesta 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: "https://i.imgur.com/DvmN8Hx.jpg",
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png",
        categorias: [
          {
            nombre: "Diseño de videojuegos"
          },
          { 
            nombre: "Inteligencia Artificial"
          }, 
          {
            nombre: "Redes y Seguridad"
          },
          {
            nombre: "Desarrollo Web"
          }
        ]
      },
      {
        title: "Propuesta 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: "https://i.imgur.com/DvmN8Hx.jpg",
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png",
        categorias: [
          {
            nombre: "Diseño de videojuegos"
          },
          { 
            nombre: "Inteligencia Artificial"
          }, 
          {
            nombre: "Redes y Seguridad"
          },
          {
            nombre: "Desarrollo Web"
          }
        ]
      }
];
 
export default function CardSlider() {
    return (
        <Slider className="slider-wrapper">
            {slides.map((slide, index) => (

                <div key={index}>
                    <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${slide.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>

                          
                            {/* badges */}
                            {slide.categorias.map((categoria, index) => (

                              
                              (index % 4 === 0
                                ? 
                                
                                <p>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                  {categoria.nombre}
                                </span> 
                                </p>
                                
                                : 
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                                  {categoria.nombre}
                                </span> 
                                )
                             
                            ))}

                            {/* <p>
                            <button title={slide.button}>Postular</button>
                            </p> */}
                        </div>
                        <section>
                            <img src={slide.userProfile} alt={slide.user} />
                            <span>
                            Ingresado por <strong>{slide.user}</strong>
                            </span>
                        </section>
                    </div>
                    
                    
                </div>
            ))}
        </Slider>
    );
}

