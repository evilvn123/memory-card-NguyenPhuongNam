import _ from "lodash";
import { GameCard } from "../interfaces";

const objectsImages = [
    "https://media.istockphoto.com/vectors/simple-apple-in-flat-style-vector-illustration-vector-id1141529240?k=20&m=1141529240&s=170667a&w=0&h=G_dGhWRFpSZmfXrJKG-UDhAG59HRXVxO_QocPBqxVlM=",
    "https://media.istockphoto.com/vectors/peach-fruit-icon-vector-id1171397723?k=20&m=1171397723&s=612x612&w=0&h=1kTKSaX7x7uwvp8-YAwMVZIDZIf2DTgKu4snxDxdrHw=",
    "https://i.pinimg.com/originals/62/d6/2c/62d62c1af3c252f1ae58e7344a544458.png ",
    "https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-tasty-strawberry-illustration-vector-on-white-background-png-image_2044324.jpg",
    "https://static.vecteezy.com/system/resources/previews/005/484/273/original/pineapple-illustration-free-vector.jpg",
    "https://media.istockphoto.com/vectors/realistic-3d-detailed-whole-coconut-half-and-green-leaf-vector-vector-id1133948238?k=20&m=1133948238&s=612x612&w=0&h=ue8a3kEHN2iQ8nF1IQqFi48tqOoKc3_mqESUNo0Stcg=",
    "https://i.pinimg.com/originals/f6/bc/df/f6bcdf1cb1031c7fd2c66a5d6a0bda59.jpg",
    "https://img.freepik.com/premium-vector/orange-whole-slices-oranges-vector-illustration-oranges-flat-design_545793-746.jpg?w=2000",
    "https://i.pinimg.com/originals/ae/a3/11/aea311b0b67d4ffc1cf160ad98f007e6.jpg",
  ];
  
  export const initGameBoard = (): GameCard[] => {
    const allCards: GameCard[] = objectsImages.flatMap((objectsImage, index) => {
      return [
        {
          image: objectsImage,
          id: `${index}-0`,
          status: "close",
          cardName: `${index}`,
        },
        {
          image: objectsImage,
          id: `${index}-1`,
          status: "close",
          cardName: `${index}`,
        },
      ];
    });
    return _.shuffle(allCards);
  };