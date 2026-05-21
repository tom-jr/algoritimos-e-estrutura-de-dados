class Browser {
    #currentPage;
    #backStack;
    #forwardStack;

    constructor(page = 'home') {
        this.#currentPage = page;
        this.#backStack = [];
        this.#forwardStack = [];

    }
    getCurrentPage() {
        return this.#currentPage;
    }

    access(page) {
        this.#forwardStack = [];
        this.#backStack.push(this.#currentPage);
        this.#currentPage = page;
    }

    back() {
        if (this.getCurrentPage() === 'home') {
            console.log('Error: Back error');
            return;
        }
        this.#forwardStack.unshift(this.#currentPage);
        this.#currentPage = this.#backStack.pop();
    }

    forward() {
        if (!this.#forwardStack.length) {
            console.log('Error: Forward error');
            return;
        }
        this.#backStack.push(this.getCurrentPage());
        this.#currentPage = this.#forwardStack.shift();
    }
}

function testNavigation(browser, commands) {
    for (const command of commands) {
        if (command.startsWith('access,')) {
            browser.access(command.split(',')[1]);
        }
        else if (command === 'back') {
            browser.back();
        }
        else if (command === 'forward') {
            browser.forward();
        }
        else if (command === 'get-current') {
            console.log(browser.getCurrentPage());
        } else {
            console.error('Input error');
        }
    }
}

console.log('\n## case 1 ##');

testNavigation(new Browser(),
    [
        "get-current",
        "access,https://amazon.com",
        "access,https://cnn.com",
        "get-current", "back",
        "get-current",
        "back",
        "get-current",
        "back"
    ]);


console.log('\n## case 2 ##');
testNavigation(new Browser(),
    [
        "access,https://amazon.com",
        "access,https://cnn.com",
        "get-current",
        "forward"
    ]);

console.log('\n## case 3 ##');
testNavigation(new Browser(), [
    "access,https://amazon.com",
    "access,https://cnn.com",
    "access,https://gmail.com",
    "access,https://outlook.com",
    "get-current",
    "back",
    "back",
    "back",
    "get-current",
    "forward",
    "forward",
    "get-current"
]);

console.log('\n## case 4 ##');

testNavigation(new Browser(), [
    "access,https://amazon.com",
    "access,https://cnn.com",
    "access,https://gmail.com",
    "access,https://outlook.com",
    "get-current",
    "back",
    "back",
    "back",
    "get-current",
    "forward",
    "forward",
    "get-current",
    "access,https://devsuperior.com.br",
    "back",
    "forward",
    "get-current",
    "forward"
]);