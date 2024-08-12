import { loadFeature, defineFeature } from 'jest-cucumber'
import { Builder, By } from 'selenium-webdriver'

const feature = loadFeature('__tests__/bdd/features/checkin.feature')

defineFeature(feature, (test) => {
  let driver: any

  beforeEach(async () => {
    driver = await new Builder().forBrowser('firefox').build()
  })

  afterEach(async () => {
    await driver.quit()
  })

  test('I enter a correct visitor number to check in', ({ given, when, then, and }) => {
    given('I am on the visitor number screen', async () => {
      await driver.get('http://localhost:4173/auth')
    })

    when('I enter a correct visitor number', async () => {
      const input = await driver.findElement(By.css('input'))
      await input.sendKeys('123456789')
    })
    and('I click the check-in button', async () => {
      const button = await driver.findElement(By.xpath("//button[text()='CHECK IN']")).click()
    })

    then('I proceed to the next screen', async () => {
      const currentUrl = await driver.getCurrentUrl()
      const expectedUrl = 'http://localhost:4173/data'
      expect(currentUrl).toBe(expectedUrl)
    })
  })
})
