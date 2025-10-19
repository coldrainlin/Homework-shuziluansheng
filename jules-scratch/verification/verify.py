from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:8000/homework2/")
        page.wait_for_timeout(5000)  # Wait for the model to load
        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

run()
