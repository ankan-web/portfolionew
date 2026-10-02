import { chromium } from "playwright";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const SCREENSHOT_DIR = "./screenshots";
const BASE_URL = "http://localhost:3000";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startDevServer() {
  console.log("Starting dev server...");
  const child = exec("npm run dev", { cwd: "." });

  // Wait for server to be ready
  for (let i = 0; i < 30; i++) {
    try {
      const response = await fetch(BASE_URL);
      if (response.ok) {
        console.log("Dev server ready!");
        return child;
      }
    } catch {
      await sleep(1000);
    }
  }
  throw new Error("Dev server failed to start");
}

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  try {
    // 1. Screenshot: Initial intro state (newspaper background)
    console.log("1. Capturing intro initial state...");
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await sleep(1000);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/01-intro-initial.png`,
      fullPage: false,
    });
    console.log("   -> 01-intro-initial.png");

    // 2. Screenshot: Move mouse to show magnifying glass over newspaper
    console.log("2. Capturing intro with magnifying glass...");
    // Move mouse around to simulate searching
    await page.mouse.move(200, 200);
    await sleep(300);
    await page.mouse.move(400, 300);
    await sleep(300);
    await page.mouse.move(600, 400);
    await sleep(300);
    await page.mouse.move(800, 350);
    await sleep(300);
    await page.mouse.move(700, 450);
    await sleep(500);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/02-intro-magnifying-glass.png`,
      fullPage: false,
    });
    console.log("   -> 02-intro-magnifying-glass.png");

    // 3. Screenshot: Move mouse near center to trigger "Confirmed" stamp
    console.log("3. Capturing intro with Confirmed stamp...");
    // Move to center (where masthead is)
    await page.mouse.move(720, 450);
    await sleep(200);
    await page.mouse.move(720, 440);
    await sleep(200);
    await page.mouse.move(720, 460);
    await sleep(500);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/03-intro-confirmed-stamp.png`,
      fullPage: false,
    });
    console.log("   -> 03-intro-confirmed-stamp.png");

    // 4. Wait for intro to finish, then screenshot the main page
    console.log("4. Waiting for intro to complete...");
    await sleep(2500);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/04-main-hero.png`,
      fullPage: false,
    });
    console.log("   -> 04-main-hero.png");

    // 5. Screenshot: Full page
    console.log("5. Capturing full page...");
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/05-main-fullpage.png`,
      fullPage: true,
    });
    console.log("   -> 05-main-fullpage.png");

    // 6. Screenshot: Works section
    console.log("6. Capturing Works section...");
    await page.evaluate(() => {
      document.querySelector("#work")?.scrollIntoView({ behavior: "instant" });
    });
    await sleep(500);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/06-works-section.png`,
      fullPage: false,
    });
    console.log("   -> 06-works-section.png");

    // 7. Screenshot: Stack section
    console.log("7. Capturing Stack section...");
    await page.evaluate(() => {
      document.querySelector("#stack")?.scrollIntoView({ behavior: "instant" });
    });
    await sleep(500);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/07-stack-section.png`,
      fullPage: false,
    });
    console.log("   -> 07-stack-section.png");

    // 8. Screenshot: Contact section
    console.log("8. Capturing Contact section...");
    await page.evaluate(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "instant" });
    });
    await sleep(500);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/08-contact-section.png`,
      fullPage: false,
    });
    console.log("   -> 08-contact-section.png");

    // 9. Screenshot: Footer
    console.log("9. Capturing Footer...");
    await page.evaluate(() => {
      document.querySelector("footer")?.scrollIntoView({ behavior: "instant" });
    });
    await sleep(500);
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/09-footer.png`,
      fullPage: false,
    });
    console.log("   -> 09-footer.png");

    console.log("\nAll screenshots saved to ./screenshots/");
  } finally {
    await browser.close();
  }
}

// Main
const server = await startDevServer();
try {
  await takeScreenshots();
} finally {
  server.kill("SIGTERM");
  process.exit(0);
}
