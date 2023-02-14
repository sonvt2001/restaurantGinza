
function toast({title = "", msg = "", type = ""}) {
    const idToast = document.getElementById("toast");
    if(idToast){
        const toast = document.createElement("div");

        const icons = {
            success: "fa-solid fa-check",
            error: "fa-solid fa-circle-xmark",
            warn: "fa-solid fa-brake-warning"
        }

        const icon = icons[type]

        function removeToast() {
            setTimeout(() => {
                idToast.removeChild(toast);
            },5000)
        }
        removeToast()

        toast.classList.add("toast", `toast--${type}`);
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${msg}</p>
            </div>`
            idToast.appendChild(toast)
    }
}