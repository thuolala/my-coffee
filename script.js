function showItem(itemId, gifId) {
    const item = document.getElementById(itemId);
    const gifItem = document.getElementById(gifId);

    // Disable the item visually + functionally
    item.style.opacity = "0.4";
    item.style.pointerEvents = "none"; // makes it unclickable

    // Reset + show the gif
    gifItem.src = gifItem.src;
    gifItem.style.visibility = "visible";

    if(itemId === "itemCoffee"){
        let audio = document.getElementById("audio2");
        audio.currentTime = 0; // Restart sound if already playing
        audio.play(); // Play sound
    }

    if(itemId === "itemWater"){
        let audio = document.getElementById("audio1");
        audio.currentTime = 0; // Restart sound if already playing
        audio.play(); // Play sound
    }

    if (itemId === "itemStir") {
        let audio = document.getElementById("audio5");
        audio.currentTime = 0; // Restart sound if already playing
        audio.play(); // Play sound

        const groundCoffee = document.getElementById('groundCoffee');
        const water = document.getElementById('water');
        const coffee = document.getElementById('coffee');

        groundCoffee.style.visibility = "hidden";
        water.style.visibility = "hidden";
        coffee.style.visibility = "visible";

        // Hide the stir gif after 2 seconds
        setTimeout(() => {
            gifItem.style.visibility = "hidden";
        }, 2000); // 2000 milliseconds = 2 seconds
    }

    if (itemId === "itemIce") {
        let audio = document.getElementById("audio3");
        audio.currentTime = 0; // Restart sound if already playing
        audio.play(); // Play sound

        // Coffee is ready 
        setTimeout(() => {
            coffeeReady();
        }, 3000);
    }
}

function coffeeReady() {
    const cupCoffee = document.getElementById('cupCoffee');

    // Add animation class
    cupCoffee.style.animation = "wiggleShake 1.5s";

    // Remove animation after it ends so it can replay next time
    cupCoffee.addEventListener("animationend", () => {
        cupCoffee.style.animation = "";
    }, { once: true });

    const coffeeText = document.getElementById("coffeeText");
    coffeeText.innerHTML = "⋆˙⟡˙⋆ Your coffee is ready! ⋆˙⟡˙⋆"

    // Add animation class
    coffeeText.style.animation = "wiggleShake 1.5s";

    // Remove animation after it ends so it can replay next time
    coffeeText.addEventListener("animationend", () => {
        coffeeText.style.animation = "";
    }, { once: true });

    let audio = document.getElementById("audio4");
    audio.currentTime = 0; // Restart sound if already playing
    audio.play(); // Play sound
}
