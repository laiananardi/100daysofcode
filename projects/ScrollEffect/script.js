
let options = {
    threshold: 0
}

let callback = (entries) => {

    entries.forEach(entry => {
        let element = entry.target;
        if (entry.isIntersecting) {
            element.classList.remove("hide");
            element.classList.add("show");
        } else {
            element.classList.remove("show");
            element.classList.add("hide");
        }
    });
}

var observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector("#first-element"));
observer.observe(document.querySelector("#second-element"));
observer.observe(document.querySelector("#third-element"));
observer.observe(document.querySelector("#fourth-element"));
observer.observe(document.querySelector("#fifth-element"));
observer.observe(document.querySelector("#sixth-element"));
observer.observe(document.querySelector("#seventh-element"));
observer.observe(document.querySelector("#eighth-element"));