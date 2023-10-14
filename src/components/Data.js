
import fos from './images/fos.png'
import fruits from './images/str444.png'
import frozenfruits from './images/fruits.jpeg'
import frozenpom from './images/frozenpom.png'
import dateA from './images/dateA.png'
import dateB from './images/date b.png'
import vegetables from './images/vegetables.png'
import mixvegetables from './images/veg.png'
import okra from './images/okra3.png'
import onion from './images/onion.png'
import garlic from './images/garlic.png'
import beans from './images/peas.png'
import Grape from './images/spanich.png'
const data = [
    {
        id: 100,
        name: 'Fos',
        detils: 'This makeup product is a versatile and long-lasting foundationthat provides a smooth and flawless complexion',
        image: fos,
    },
    {
        id: 101,
        name: 'Fruits',
        detils: 'we offer diffrent kind of fruits such as fresh , frozen and dried ones.',
        image: fruits,
    },
    {
        id: 102,
        name: 'Frozen Strawbery',
        detils: 'we offer diffrent kind of frozen fruits and dried ones.',
        image: frozenfruits,
    },
    {
        id: 103,
        name: 'Frozen Pomogranate',
        detils: 'we offer diffrent kind of frozen fruits and dried ones.',
        image: frozenpom,
    },
    {
        id: 104,
        name: 'Medjool Dates Grade A',
        detils: 'we offer diffrent kind of Medjool Dates.',
        image: dateA,
    },
    {
        id: 105,
        name: 'Medjool Dates Grade B',
        detils: 'we offer diffrent kind of Medjool Dates.',
        image: dateB,
    },
    {
        id: 106,
        name: 'Fresh Vegetables',
        detils: 'we offer diffrent kind of Fresh Vegetables from Farm To your plate.',
        image: vegetables,
    },
    {
        id: 107,
        name: 'Mix Vegetables',
        detils: 'we offer diffrent kind of Fresh Vegetables from Farm To your plate.',
        image: mixvegetables,
    },
    {
        id: 108,
        name: 'Okra Zero',
        detils: 'we offer diffrent kind of Fresh Vegetables from Farm To your plate.',
        image: okra,
    },
    {
        id: 109,
        name: 'Onion',
        detils: 'we offer diffrent kind of Fresh Vegetables from Farm To your plate.',
        image: onion,
    },
    {
        id: 110,
        name: 'Garlic',
        detils: 'we offer diffrent kind of Fresh Vegetables from Farm To your plate.',
        image: garlic,
    },
    {
        id: 111,
        name: 'Green Peas & Carrot',
        detils: 'we offer diffrent kind of Fresh Vegetables from Farm To your plate.',
        image: mixvegetables,
    },
    {
        id: 112,
        name: 'Green Beans',
        detils: 'we offer diffrent kind of Fresh Vegetables from Farm To your plate.',
        image: beans,
    },
    {
        id: 113,
        name: 'Grape Leaves',
        detils: 'we offer diffrent kind of Frozen Vegetables from Farm To your plate.',
        image: Grape,
    },

    // Add more items as needed
];


const imageContext = require.context('./images', false, /\.(png|jpe?g|svg)$/)

function importAll(r) {
    let images = {}
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item)
        console.log(images, "imagse")
    })
    return images
}
const images = importAll(imageContext)
console.log("context", images)



imageContext.keys().forEach((imagePath, index) => {

    // Generate a unique ID for each image (you can use any method you prefer)
    const id = index + 1;

    // Get the image path

    console.log("path", imagePath)
    // imagePath.replace('./', '')
    const image = imageContext(imagePath);


    console.log(image)
    // Create an object and push it to the data array
    const item = {
        id,
        name: `Item ${id}`,
        detils: `Item ${id} This makeup product is a versatile and long-lasting foundation
        that provides a smooth and flawless complexion`,
        image,
    };

    data.push(item);
});
console.log(data)

export default data;
