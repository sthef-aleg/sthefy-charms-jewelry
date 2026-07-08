import "./Collections.css";

import CategoryCard from "./CategoryCard";

import logoSthefy from "../assets/logo-sthefy.jpg";

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

                    image={logoSthefy}
                

                />

                <CategoryCard

                    icon="💎"

                    title="Joyas"

                    description="Collares, aros, pulseras y anillos de acero."

                    button="Explorar"

                    image={logoSthefy}

                />

            </div>

        </section>

    )

}

export default Collections;