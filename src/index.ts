import { getArea } from "./area";
import { Rectangle, Circle, Triangle } from "./shape";

const rectangle: Rectangle = new Rectangle(20, 10);

const circle: Circle = new Circle(5)

const triangle: Triangle = new Triangle(8, 5);

const rectArea = getArea(rectangle);
const circleArea = getArea(circle);
const triangleArea = getArea(triangle);

console.log(`Rectangle Area is ${rectArea}`);
console.log(`Circle Area is ${circleArea}`);
console.log(`Triangle Area is ${triangleArea}`);