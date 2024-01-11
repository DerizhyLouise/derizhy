const snowfallContainer = document.getElementById("snowfall");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;

    snowflake.addEventListener("animationend", () => {
        snowflake.remove();
        createSnowflake();
    });

    snowfallContainer.appendChild(snowflake);
}

for (let i = 0; i < 50; i++) {
    createSnowflake();
}