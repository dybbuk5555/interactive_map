import React, { Component, createRef } from "react";
import PrismaZoom from "react-prismazoom";
import { ScrollBoost } from "react-scrollbooster";

import map from "./assets/map.png";
import cloud from "./assets/cloud.png";
import banner1 from "./assets/banner1.gif";
import banner2 from "./assets/banner2.gif";
import banner3 from "./assets/banner3.gif";
import banner4 from "./assets/banner4.gif";
import banner5 from "./assets/banner5.gif";
import banner6 from "./assets/banner6.gif";
import clock from "./assets/clock.png";
import circle from "./assets/circle.png";

class App extends Component {
    constructor(props) {
        super(props)
        this.prismaZoom = createRef()
        this.state = {
            zoom: 1,
            showModal: false,
            order: -1,
        }
    }

    onZoomChange = (zoom) => {
        this.setState({ zoom })
    }

    onClickOnZoomOut = () => {
        this.prismaZoom.current.zoomOut(1)
    }

    modal1 = () => {
        this.setState({ showModal: true });
        this.setState({ order: 0 });
    }

    modal2 = () => {
        this.setState({ showModal: true });
        this.setState({ order: 1 });
    }

    modal3 = () => {
        this.setState({ showModal: true });
        this.setState({ order: 2 });
    }

    modal4 = () => {
        this.setState({ showModal: true });
        this.setState({ order: 3 });
    }

    modal5 = () => {
        this.setState({ showModal: true });
        this.setState({ order: 4 });
    }

    modal6 = () => {
        this.setState({ showModal: true });
        this.setState({ order: 5 });
    }

    render() {
        return (
            <>
                <ScrollBoost scrollMode="transform" emulateScroll >
                    {({ viewport, scrollbooster }) => (
                        <>
                            <div className="relative left-8 top-12  md:left-20 lg:left-32  space-x-2 z-10">
                                <div className="shadow inline-block">
                                    <button
                                        onClick={(event) => {
                                            if (scrollbooster) {
                                                const layoutRect = event.currentTarget.parentNode.getBoundingClientRect();
                                                const [relX, relY] = [(scrollbooster.getState().position.x / 2) + 7.5 * layoutRect.width, (scrollbooster.getState().position.y / 2) + 9.2 * layoutRect.height];
                                                this.prismaZoom.current.zoomToZone(relX, relY, layoutRect.width, layoutRect.height);
                                            }
                                        }}
                                        className="w-full flex text-[12px] items-center justify-center border-transparent uppercase px-2 py-1 rounded-sm text-button bg-button_color-1"
                                    >
                                        Zoom In
                                    </button>
                                </div>
                                <div className="shadow inline-block">
                                    <button
                                        onClick={this.onClickOnZoomOut}
                                        className="w-full flex text-[12px] items-center justify-center border-transparent uppercase px-2 py-1 rounded-sm text-button bg-button_color-1"
                                    >
                                        Zoom Out
                                    </button>
                                </div>
                                <div className="shadow inline-block">
                                    <button
                                        onClick={() => {
                                            scrollbooster.scrollTo();
                                        }}
                                        className="w-full flex text-[12px] items-center justify-center border-transparent uppercase px-2 py-1 rounded-sm text-button bg-button_color-1"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-hidden w-full md:w-[80vw] 2xl:w-full h-container 2xl:h-[500px] mx-auto" ref={viewport}>
                                <div>
                                    <PrismaZoom className="App-zoom" onZoomChange={this.onZoomChange} maxZoom={2} ref={this.prismaZoom}>
                                        <img className="max-w-none w-map h-auto" src={map} alt="map" />
                                        <img className="animate-cloud max-w-none w-cloud h-auto absolute top-0" src={cloud} id="cloud" alt="cloud" />
                                        <button onClick={this.modal1} className="absolute left-buttonx1 bottom-buttony1 bg-button1 rounded-full py-1 px-3 items-center flex text-white text-lg w-fit">
                                            <img src={circle} className="w-5 h-5 inline mr-1" alt="circle" />
                                            <span>Nuestros Planteles</span>
                                        </button>
                                        <button onClick={this.modal2} className="absolute left-buttonx2 bottom-buttony2 bg-button2 rounded-full px-3 items-center flex text-white py-1 text-lg w-fit">
                                            <img src={circle} className="w-5 h-5 inline mr-1" alt="circle" />
                                            <span>Oficina Central</span>
                                        </button>
                                        <button onClick={this.modal3} className="absolute left-buttonx3 bottom-buttony3 bg-button3 rounded-full px-3 items-center flex text-white py-1 text-lg w-fit">
                                            <img src={circle} className="w-5 h-5 inline mr-1" alt="circle" />
                                            <span>Historia</span>
                                        </button>
                                        <button onClick={this.modal4} className="absolute left-buttonx4 bottom-buttony4 bg-button4 rounded-full px-3 items-center flex text-white py-1 text-lg w-fit">
                                            <img src={circle} className="w-5 h-5 inline mr-1" alt="circle" />
                                            <span>Comunidades</span>
                                        </button>
                                        <button onClick={this.modal5} className="absolute left-buttonx5 bottom-buttony5 bg-button5 rounded-full px-3 items-center flex text-white py-1 text-lg w-fit">
                                            <img src={circle} className="w-5 h-5 inline mr-1" alt="circle" />
                                            <span>Producción Responsable</span>
                                        </button>
                                        <button onClick={this.modal6} className="absolute left-buttonx6 bottom-buttony6 bg-button6 rounded-full px-3 items-center flex text-white py-1 text-lg w-fit">
                                            <img src={circle} className="w-5 h-5 inline mr-1" alt="circle" />
                                            <span>Plantas Industriales</span>
                                        </button>
                                    </PrismaZoom>
                                </div>
                            </div>
                        </>
                    )}
                </ScrollBoost>
                {this.state.showModal ? (
                    <>
                        <div className="bg-black opacity-40 fixed inset-0 z-50"></div>
                        <div
                            className="justify-center items-center flex fixed inset-0 z-50"
                            onClick={() => {
                                this.setState({
                                    showModal: false,
                                })
                            }}
                        >
                            <div
                                className="rounded-lg w-[500px] bg-white pb-6"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <div className="relative flex-auto">
                                    <img src={data[this.state.order].banner} alt="banner1" />
                                </div>
                                <h3 className="text-2xl font-bold px-4 pt-4 pb-2">
                                    {data[this.state.order].title}
                                </h3>
                                <div className="relative px-4 pb-6 flex-auto">
                                    {data[this.state.order].content}
                                </div>
                                <a href="#" className="no-underline p-4 text-title">
                                    <img src={clock} className="w-6 h-6 inline mr-2" alt="clock" />
                                    <span>Agenda Tu Visita</span>
                                </a>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>
        )
    }
}

const data = [
    {
        title: "Nuestros Planteles",
        content: "Nuestros planteles de crianza cuentan con la más avanzada tecnología por que estamos 100% comprometidos con el bienestar animal, velando por el cumplimiento de las 5 libertades propuestas por la Organización Mundial de Sanidad Animal (OIE).",
        banner: banner1,
    },
    {
        title: "Oficina Central",
        content: "Nuestras oficinas centrales están ubicadas en Doñihue. En este lugar se encuentra la mayoria de nuestros departamentos ejecutivos, desde donde controlamos aspectos de la producción, gestión y comunicación de cada una de las marcas de Agrosuper. En conjunto hoy día contamos con una dotación de más de 13.282 colaboradores. ",
        banner: banner2
    },
    {
        title: "Nuestra Historia",
        content: "Nuestro camino comienza en el año 1955 con la producción de huevos frescos en una pequeña granja de Doñihue, en la región de O`Higgins. Con el paso del tiempo incorporamos la producción de pollo, cerdo, salmones y mucho más, hasta construir las marcas que hoy todos conocen.",
        banner: banner3
    },
    {
        title: "Comunidades",
        content: "Somos orgullosos del entorno al que pertenecemos y como nos relacionamos con nuestras comunidades. A través de diferentes programas buscamos ayudar y aportar nuestro grano de arena en el desarrollo de la sociedad en su conjunto y sobre todo de aquellos que más lo necesitan.",
        banner: banner4
    },
    {
        title: "Producción Responsable",
        content: "Somos conscientes que debemos hacernos responsables de los residuos de nuestra producción. Es por ello que contamos con plantas de tratamientos para desechos sólidos y líquidos que nos permiten reducir nuestras emisiones y de paso ayudar a la comunidad con el producto útil del tratamiento de estos elementos. ",
        banner: banner5
    },
    {
        title: "Plantas Industriales",
        content: "En nuestras fabricas ocurren todos los procesos industriales de nuestras diferentes áreas de negocio. Junto a lo último de la tecnología de la mano con altos estandares de calidad nos permiten llevar a las mesas de Chile y el mundo la mejor proteína.",
        banner: banner6
    },
]

export default App