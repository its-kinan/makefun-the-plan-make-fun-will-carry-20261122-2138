import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Sell $49 same-day verified lead lists (50 local dentists, owner emails) to dental marketing agencies on Fiverr. List day 1, deliver in 24h, target 2 orders/day. Spend $100 on promoted gigs. Edge: verified emails and 24h turnaround in a niche others ignore.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
