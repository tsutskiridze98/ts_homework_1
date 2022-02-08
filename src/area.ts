import { Rectangle, Circle, Triangle, Shape, ShapeType } from "./shape";

function getCircleArea({ radius }: Circle): number {
    return Math.PI * Math.pow(radius, 2);
}

function getRectangleArea({ width, height }: Rectangle): number {
    return width*height
}

function getTriangleArea({ base, height }: Triangle): number {
    return base*height/2;
}

export function getArea(shape: Shape) {
    switch(shape.type) {
        case ShapeType.Rectangle:
            return getRectangleArea(shape);
        case ShapeType.Circle:
            return getCircleArea(shape);
        case ShapeType.Triangle:
            return getTriangleArea(shape);
    }
}