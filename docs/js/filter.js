const d = document;

export default function filter(btn, classHidden){
    const $fronActive = d.querySelector(".front"),
        $backActive = d.querySelector(".back"),
        $allActive = d.querySelector(".todos"),
        $frontend = d.querySelectorAll("[data-frontend]"),
        $backend = d.querySelectorAll("[data-backend]");

    const hiddenBackend= () =>{
        $backend.forEach(el => el.classList.add(classHidden));
        $frontend.forEach(el => el.classList.remove(classHidden));
        $fronActive.classList.add("active");
        $backActive.classList.remove("active");
        $allActive.classList.remove("active");
    }

    const hiddenFrontend = () => {
        $frontend.forEach(el => el.classList.add(classHidden));
        $backend.forEach(el => el.classList.remove(classHidden));
        $fronActive.classList.remove("active");
        $backActive.classList.add("active");
        $allActive.classList.remove("active");
    }

    const visibleAll = () => {
        $backend.forEach(el => el.classList.remove(classHidden));
        $frontend.forEach(el => el.classList.remove(classHidden));
        $fronActive.classList.remove("active");
        $backActive.classList.remove("active");
        $allActive.classList.add("active");
    }



    d.addEventListener("click", e => {
            let content = e.target.outerText; // contenido del boton
            if(content === "Frontend") {
                hiddenBackend();
            }
            if(content === "Backend") {
                hiddenFrontend();
            }
            if(content === "Todos") {
                visibleAll();
            }
    });

}