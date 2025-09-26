var updateBtns = document.getElementsByClassName('update-cart');

for (var i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product;
        var action = this.dataset.action;

        console.log('productId:', productId, 'Action:', action);
        console.log('USER:', user);

        if (user == 'AnonymousUser') {
            console.log('User is not authenticated');
        } else {
            updatUserOrder(productId, action);
        }
    });
}

function updatUserOrder(productId, action) {
    console.log('User is authenticated, sending data...');
    var url = '/update-item/';  // add trailing slash


    fetch(url, {
    method:'POST',
    headers:{
        'Content-type':'application/json',
        'X-CSRFToken': csrftoken  // add this line
    },
    body: JSON.stringify({ 'productId': productId, 'action': action })
})
.then((responsre) => {
    return responsre.json();
})
.then((data) => {
    console.log('Data:', data);
    location.reload();
});
}