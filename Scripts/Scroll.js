const container = document.getElementById('serverContainer');
const counter = document.getElementById('server-counter');

function updateCounter() {
    const boxes = container.querySelectorAll(':scope > div');
    const total = boxes.length;
   
    const boxWidth = boxes[0].offsetWidth + 25;
    
    let currentIndex = Math.round((container.scrollLeft) / boxWidth);

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        currentIndex = total - 1;
    }

    counter.innerText = `${currentIndex + 1} / ${total}`;
}

function scrollServers(direction) {
    const boxes = container.querySelectorAll(':scope > div');
    const scrollAmount = boxes[0].offsetWidth + 25;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function copy_discord() {

    const text = "jortoo";
    const copyButton = document.getElementById("discord");

    navigator.clipboard.writeText(text).then(() => {
            copyButton.innerText = "Copied!";

            setTimeout(() => {
                copyButton.innerText = "Copy Discord";
            }, 2000);
        });

}

function toggleContact() {
    const overlay = document.getElementById('contactOverlay');
    overlay.classList.toggle('active');
}

container.addEventListener('scroll', updateCounter);

function openProject(card) {
    // Pak de inhoud van de geklikte kaart
    const content = card.innerHTML;
    // Zet het in de popup
    document.getElementById('projectContent').innerHTML = content;
    // Toon de popup
    document.getElementById('projectOverlay').classList.add('active');
}

function toggleProject() {
    document.getElementById('projectOverlay').classList.remove('active');
}