"use strict";

{
    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
        });
    }

    const observer = new IntersectionObserver(callback, {
        threshold: 0.2,
    });

    document.querySelectorAll(".animate").forEach(target => {
        observer.observe(target);
    });
}


{
    function callback2(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
        });
    }

    const observer2 = new IntersectionObserver(callback2, {
        threshold: 0.9,
    });

    document.querySelectorAll(".abc").forEach(target => {
        observer2.observe(target);
    });
}
