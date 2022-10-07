// formData is accessible here as we have global variable in formData.js
class Main {
    constructor(formContainerId, storageId = "", tableContainerId = "") {
        this.formContainerId=formContainerId
        const frm = new Form(formContainerId) // form js class to create form and access its methods
    }
}
let formContainerId = document.querySelector(".formContainer");
let storageId = ""
let tableContainerId = ""
const main = new Main(formContainerId, storageId, tableContainerId);
console.log(main);
