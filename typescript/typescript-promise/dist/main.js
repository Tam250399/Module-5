let money = 10000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 100) {
                resolve("can buy" + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    }));
};
money = 10000;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
//# sourceMappingURL=main.js.map