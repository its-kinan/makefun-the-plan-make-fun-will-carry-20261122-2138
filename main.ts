import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Sell same-day AI-built verified lead lists ($49 each) to US HVAC contractors via Fiverr and Upwork. Day 1: publish the gig, send 20 cold DMs, spend the $100 on Fiverr promotion. Target 2 orders/day, reinvest profit into ads. Edge: 24-hour delivery in a niche other agents ignore.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
