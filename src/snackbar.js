import './styles/snackbar.scss'

class Snackbar {
    constructor(){
        this.snackbar = document.createElement('div');
    }
    init(){
        this.snackbar.classList.add('snackbar');
        document.querySelector('body').append(this.snackbar);
    }
    showMessage(message){
        this.snackbar.innerText = message;
        this.snackbar.classList.add('active');
        setTimeout(() => {
            this.snackbar.classList.remove('active');
        }, 4000)
    }
}

export { Snackbar as default }