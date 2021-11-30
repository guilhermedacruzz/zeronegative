let fanart = document.querySelector("#fanart")
let images = ["https://scontent.fbfh1-1.fna.fbcdn.net/v/t1.6435-9/105557663_3358880787508115_7280895835115467060_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mjzLIN6AKEsAX81oqD6&_nc_ht=scontent.fbfh1-1.fna&oh=b5d528385271e4548c4b8ec5ee0bd20d&oe=61C9EE98",
    "https://64.media.tumblr.com/f8ec6e02ec37bca50eaa2398b4cfd524/876a99d2972a0d5a-99/s1280x1920/3e8d585546f3d605101005267ce8b819a9be0033.png"]

fanart.addEventListener("click", () => {
    fanart.src = images.reverse()[0]
})