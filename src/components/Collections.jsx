import "./Collections.css";

import CategoryCard from "./CategoryCard";

import charms from "../assets/jewels.jpg";
import joyas from "../assets/jewels.jpg";

function Collections() {

    return (

        <section className="collections">

            <h2>¿Qué deseas descubrir?</h2>

            <p>

                Cada colección está diseñada para expresar
                tu estilo y acompañar tus momentos especiales.

            </p>

            <div className="collections-grid">

                <CategoryCard

                    icon="✨"

                    title="Charms"

                    description="Pulseras y charms para crear recuerdos únicos."

                    button="Explorar"

                    image={charms}

                />

                <CategoryCard

                    icon="💎"

                    title="Joyas"

                    description="Collares, aros, pulseras y anillos de acero."

                    button="Explorar"

                    image={joyas}

                />

            </div>

        </section>

    )

}

export default Collections;