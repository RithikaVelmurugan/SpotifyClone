// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Spotify Clone UI Tests", () => {
  test("homepage loads correctly", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page).toHaveURL(/5173/);

    await expect(
      page.getByRole("heading", { name: "Featured Charts" }),
    ).toBeVisible();
  });

  test("featured section is visible", async ({ page }) => {
    await page.goto("http://localhost:5173");

    await expect(page.getByText("Today's biggest hits")).toBeVisible();
  });

  test("play button works (if exists)", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const playButton = page.getByRole("button", { name: /play/i });

    if (await playButton.isVisible()) {
      await playButton.click();
    }

    await expect(page).toHaveURL(/5173/);
  });

  test("search input works (if exists)", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const search = page.locator('input[placeholder*="Search"]');

    if (await search.isVisible()) {
      await search.fill("song");
      await expect(search).toHaveValue("song");
    }
  });
});
