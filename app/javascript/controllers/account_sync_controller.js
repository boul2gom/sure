import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { 
    i18n: Object 
  }
  static targets = ["button"]

  async sync(event) {
    event.preventDefault()
    const i18n = this.i18nValue
    const originalText = this.buttonTarget.textContent
    
    this.buttonTarget.textContent = i18n.syncing
    
    // Simulate a sync delay for the PoC
    setTimeout(() => {
      this.buttonTarget.textContent = i18n.success
      setTimeout(() => {
        this.buttonTarget.textContent = originalText
      }, 2000)
    }, 1500)
  }
}