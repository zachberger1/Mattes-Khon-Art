function dynamicImage() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = 'assets/Images/' + urlParams.get('item');

    // Set the 'src' attribute of the image element
    if (imageUrl) {
        const imageElement1 = document.getElementById('image1');
        const imageElement2 = document.getElementById('image2');
        imageElement1.src = imageUrl + '-A.jpg' ;
        imageElement2.src = imageUrl + '-B.jpg';
        console.error(imageUrl);
    } else {
        console.error('Image URL not provided in the query parameters.');
    }
}