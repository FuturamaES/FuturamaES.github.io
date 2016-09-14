/* global $*/
/* global a */
/* global on */

window.defaultStatus = "Welcome to the large URL page"

function changeStatus() {
    window.status = "Click me to go to the Unleashed home page"
}

function changeDefaultStatus() {
    window.defaultStatus = window.document.statusForm.messageList.options[window.document.statusForm.messageList.selectedIndex].text
}
