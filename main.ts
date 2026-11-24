import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Very soon your keeper will finally remember your watering day — you were thirsty, not dramatic, and the sun agrees.", "utf8");
