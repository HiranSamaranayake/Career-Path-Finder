/* Optional: Adding a smooth pulse effect for emphasis */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05); /* Slightly increase size */
    }
    100% {
        transform: scale(1);
    }
}

nav:active {
    animation: pulse 0.5s ease-out; /* Pulse effect on click */
}

