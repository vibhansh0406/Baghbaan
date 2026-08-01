import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        await page.goto("http://localhost:5173")

        # Wait a bit for the page to load, video to play, and animations to run
        await page.wait_for_timeout(3000)

        await page.screenshot(path="/home/jules/verification/hero_video_autoplay_logo_cropped.png")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
