import {dataCars} from "../data";

export const main = () => {
    RunForEach();
    RunFilter();
    RunMap();
    RunFind();
    RunReduce();
    RunSome();
};

function RunForEach() {
    dataCars.forEach(element => console.log(element.model));
}

function RunFilter() {
    console.log(dataCars.filter(element => element.color === "Rojo"));
}

function RunMap() {
    let result = dataCars.map(element => element);
    console.log(result);
}

function RunFind() {
    console.log(dataCars.find(element => element.color === "Rojo"));
}

function RunReduce() {
    let result = dataCars.reduce((total, element) => total + element.price, 0);
    console.log(result);
}

function RunSome() {
    let result = dataCars.some(element => element.color === "Negro");
    console.log(result);
}
