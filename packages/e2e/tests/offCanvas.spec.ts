import { expect, test } from "@playwright/test";

test.describe("OffCanvas", () => {
  test("open menu", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByTestId("menu")).toHaveCSS("right", "-1280px");
    await expect(page.getByTestId("overlay")).toHaveCSS("z-index", "-1");

    await page.getByLabel("Burger").click();

    await expect(page.getByTestId("menu")).toHaveCSS("right", "0px");
    await expect(page.getByTestId("overlay")).toHaveCSS("z-index", "1");
  });

  test("close menu by click", async ({ page }) => {
    await page.goto("/");

    await page.getByLabel("Burger").click();
    await page.getByLabel("Cross").click();

    await expect(page.getByTestId("menu")).toHaveCSS("right", "-1280px");
    await expect(page.getByTestId("overlay")).toHaveCSS("z-index", "-1");
  });

  test("close menu by ESC", async ({ page }) => {
    await page.goto("/");

    await page.getByLabel("Burger").click();
    await page.keyboard.press("Escape");

    await expect(page.getByTestId("menu")).toHaveCSS("right", "-1280px");
    await expect(page.getByTestId("overlay")).toHaveCSS("z-index", "-1");
  });
});
