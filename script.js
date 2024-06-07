const uploadBtn = document.querySelector('#upload_Btn');
var uploadImg = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
const submitBtn = document.querySelector('#submitBtn');

var element = document.createElement("div");
element.id = "loader";

const upload_Img = document.querySelector("#upload_Img");
var ele2 = document.createElement("div");
ele2.id = upload_Img;


uploadBtn.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadImg = reader.result;
        document.querySelector('#upload_Img').style.backgroundImage = `url(${uploadImg})`;
    });
    reader.readAsDataURL(this.files[0]);
    var ele2 = document.createElement("div");
    ele2.id = upload_Img;
    var ele3 = document.createElement("input");
    ele3.type = "button";
    ele3.id = submitBtn;
    var ele4 = document.createElement("label");
    ele4.for = "submitBtn";
    ele4.id = "submit_Btn";
    ele4.innerText = "Predict Disease"
    document.querySelector(".files").appendChild(ele2);
    document.querySelector(".files").appendChild(ele3);

    if (document.querySelector("#submit_Btn")) return;
    else
        document.querySelector(".files").appendChild(ele4);
})


submitBtn.addEventListener('click', function () {
    submitBtn.remove();
    document.querySelector("#submit_Btn").remove();
    document.querySelector(".files").appendChild(element);

})