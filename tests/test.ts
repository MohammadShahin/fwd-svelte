import { expect, test } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test('Education page has expected heading2', async ({ page }) => {
	await page.goto('/education');
	expect(await page.textContent('.heading2')).toBe('Education');
});

test('Technical Skills page has expected heading2', async ({ page }) => {
	await page.goto('/tech-skills');
	expect(await page.textContent('.heading2')).toBe('Technical Skills');
});

test('Home page has expected heading4 (sol price)', async ({ page }) => {
	await page.goto('/');
	await page.waitForLoadState('networkidle');
	expect(await page.textContent('.heading4')).toContain('Here goes the conversion rate of Sol');
});

test('Animation box exists and alerts when clicked', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('#css-animation')).toBe('Hover');
	page.on('dialog', async (dialog) => {
		expect(dialog.message()).toEqual('I said hover not click!');
		await dialog.accept();
	});
	await page.locator('#css-animation').click({ force: true });
});
