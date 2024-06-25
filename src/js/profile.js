document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const profileName = urlParams.get('name');
    
    const profiles = {
        ThaillaMoura: {
            img: "../assets/img/yilmaz-akin-FPKtCl74Hfs-unsplash.jpg",
            name: "Thailla Moura",
            description: "Nutricionista esportivo."
        },
        CaioRodrigo: {
            img: "../assets/img/conscious-design-nMG20MmJV-4-unsplash.jpg",
            name: "Caio Rodrigo",
            description: "Fisioterapeuta quiropraxista."
        },
        JeisonMataraca: {
            img: "../assets/img/people-training-athletics.jpg",
            name: "Jeison Mataraca",
            description: "Personal trainer especializado em pliometria."
        },
        JohnDoe: {
            img: "../assets/img/woman-working-out-with-dumbbells-medium-shot.jpg",
            name: "John Doe",
            description: "Personal trainer do CBUM."
        },
        LaraJuliane: {
            img: "../assets/img/pexels-yaroslav-shuraev-8844378.jpg",
            name: "Lara Juliane",
            description: "Nutricionista formada na UFRN, conhecimento em vitaminas e dietas para diabéticos."
        },
        AmandaKathleen: {
            img: "../assets/img/young-people-using-message-gun.jpg",
            name: "Amanda Kathleen",
            description: "Fisioterapeuta esportiva especializada em LCA."
        }
    };

    const profile = profiles[profileName];

    if (profile) {
        document.getElementById('profile-img').src = profile.img;
        document.getElementById('profile-name').textContent = profile.name;
        document.getElementById('profile-description').textContent = profile.description;
    }

    document.getElementById('contact-button').addEventListener('click', () => {
        window.location.href = "contact.html"; // Substitua pelo link da página de contato ou ação desejada
    });

    const price = (Math.random() * (500 - 100) + 100).toFixed(2);
    document.getElementById('price').innerText = price;
});
