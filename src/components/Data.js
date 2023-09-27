
import fos from './images/fos.png'

const data = [
    {
        id: 100,
        name: 'Fos',
        image: fos,
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
        image,
    };

    data.push(item);
});
console.log(data)

export default data;
