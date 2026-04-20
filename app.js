// Simple script to log site visits for Alex's tracking
console.log("Turtle Rescue Site Initialized...");

const species = ["Eastern Box Turtle", "Snapping Turtle", "Painted Turtle"];

function listSpecies() {
    species.forEach(t => {
        console.log("Currently in rehab: " + t);
    });
}

// TODO: Link this to the AVS-Audit-Alpha API for environmental monitoring
