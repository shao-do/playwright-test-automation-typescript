import { test, expect } from '@playwright/test';

test('login to \'sauce demo site\' as standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  expect(await page.locator('[data-test="title"]').innerText()).toBe('Products');
});