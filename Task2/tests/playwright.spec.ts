import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Переход на страницу
  await page.goto('https://playwright.dev/');

  // Проверка заголовка страницы
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});