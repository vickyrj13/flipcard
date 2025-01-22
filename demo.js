const cardData = [
    {
        image: "https://rukminim2.flixcart.com/image/210/210/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim2.flixcart.com/image/210/210/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim2.flixcart.com/image/210/210/kz1lle80/smartwatch/m/f/q/-original-imagb54tb6fpurze.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim2.flixcart.com/image/210/210/xif0q/projector/u/d/h/zeb-jlp-2-4-zeb-jlp-2-led-projector-zebronics-original-imah6wbu2vfhrzjm.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim2.flixcart.com/image/210/210/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim2.flixcart.com/image/210/210/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim2.flixcart.com/image/210/210/xif0q/smartwatch/x/l/3/-original-imahy7fh7nbgud85.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
   
    // Add more items if needed...
];

let khali = "";

cardData.map((item, index, array) => {
    khali += `
        <div class="min-w-[200px] flex flex-col justify-center items-center  shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover">
            <div class="flex flex-col items-center">
                <h2 class="text-[15px]  text-gray-800">${item.title}</h2>
                <p class="text-gray-600">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards").innerHTML = khali;


// items main sec 2

const cardData2 = [
    {
        image: "https://rukminim1.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=90",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/xif0q/musical-keyboard/h/v/n/37-0-2-a128-piano-keyboard-with-recording-mic-mobile-charger-original-imah3wpfgguypzb7.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/120/120/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=60",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    
   
    // Add more items if needed...
];

let khali2 = "";

cardData2.map((item, index, array) => {
    khali2 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center  shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover">
            <div class="flex flex-col items-center">
                <h2 class="text-[15px]  text-gray-800">${item.title}</h2>
                <p class="text-gray-600">${item.description}</p>
            </div>
        </div>
    `;
});
document.getElementById("cards2").innerHTML = khali2;

//items main sec 3

const cardData3 = [
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/u/9/12-bfs-590-orange-big-fox-orange-original-imaghg8ywcyerr36.jpeg?q=70",
        title: "Men’s Slippers & Flip Flops",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/shoe/h/d/c/7-grey-7-roaster-grey-original-imah8bzkdjupgaa5.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/backpack/3/s/o/12-men-and-women-backpack-for-school-bag-college-bag-12-hinex-original-imah4rm2sy3dfuap.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/jean/g/f/a/28-t-baggy-grey-tidda-original-imah3ztwtzzyxxhc.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
];

let khali3 = "";
cardData3.map((item) => {
    khali3 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover w-full">
            <div class="flex flex-col  p-2">
                <h2 class="text-[15px] text-gray-800 font-semibold">${item.title}</h2>
                <p class="text-[#2f944e]">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards3").innerHTML = khali3;

//items main sec 4
const cardData4 = [
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/u/9/12-bfs-590-orange-big-fox-orange-original-imaghg8ywcyerr36.jpeg?q=70",
        title: "Men’s Slippers & Flip Flops",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/shoe/h/d/c/7-grey-7-roaster-grey-original-imah8bzkdjupgaa5.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/backpack/3/s/o/12-men-and-women-backpack-for-school-bag-college-bag-12-hinex-original-imah4rm2sy3dfuap.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/jean/g/f/a/28-t-baggy-grey-tidda-original-imah3ztwtzzyxxhc.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
];

let khali4 = "";
cardData4.map((item) => {
    khali4 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover w-full">
            <div class="flex flex-col  p-2">
                <h2 class="text-[15px] text-gray-800 font-semibold">${item.title}</h2>
                <p class="text-[#2f944e]">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards4").innerHTML = khali4;

//items main sec 5
const cardData5 = [
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/u/9/12-bfs-590-orange-big-fox-orange-original-imaghg8ywcyerr36.jpeg?q=70",
        title: "Men’s Slippers & Flip Flops",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/shoe/h/d/c/7-grey-7-roaster-grey-original-imah8bzkdjupgaa5.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/backpack/3/s/o/12-men-and-women-backpack-for-school-bag-college-bag-12-hinex-original-imah4rm2sy3dfuap.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/jean/g/f/a/28-t-baggy-grey-tidda-original-imah3ztwtzzyxxhc.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
];

let khali5 = "";
cardData5.map((item) => {
    khali5 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover w-full">
            <div class="flex flex-col  p-2">
                <h2 class="text-[15px] text-gray-800 font-semibold">${item.title}</h2>
                <p class="text-[#2f944e]">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards5").innerHTML = khali5;

//items main sec 6
const cardData6 = [
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/u/9/12-bfs-590-orange-big-fox-orange-original-imaghg8ywcyerr36.jpeg?q=70",
        title: "Men’s Slippers & Flip Flops",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/shoe/h/d/c/7-grey-7-roaster-grey-original-imah8bzkdjupgaa5.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/backpack/3/s/o/12-men-and-women-backpack-for-school-bag-college-bag-12-hinex-original-imah4rm2sy3dfuap.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/jean/g/f/a/28-t-baggy-grey-tidda-original-imah3ztwtzzyxxhc.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
];

let khali6 = "";
cardData6.map((item) => {
    khali6 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover w-full">
            <div class="flex flex-col  p-2">
                <h2 class="text-[15px] text-gray-800 font-semibold">${item.title}</h2>
                <p class="text-[#2f944e]">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards6").innerHTML = khali6;

//items main sec 7
const cardData7 = [
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/u/9/12-bfs-590-orange-big-fox-orange-original-imaghg8ywcyerr36.jpeg?q=70",
        title: "Men’s Slippers & Flip Flops",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/shoe/h/d/c/7-grey-7-roaster-grey-original-imah8bzkdjupgaa5.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/backpack/3/s/o/12-men-and-women-backpack-for-school-bag-college-bag-12-hinex-original-imah4rm2sy3dfuap.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/jean/g/f/a/28-t-baggy-grey-tidda-original-imah3ztwtzzyxxhc.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
];

let khali7 = "";
cardData7.map((item) => {
    khali7 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover w-full">
            <div class="flex flex-col  p-2">
                <h2 class="text-[15px] text-gray-800 font-semibold">${item.title}</h2>
                <p class="text-[#2f944e]">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards7").innerHTML = khali7;

//items main sec 8
const cardData8 = [
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/u/9/12-bfs-590-orange-big-fox-orange-original-imaghg8ywcyerr36.jpeg?q=70",
        title: "Men’s Slippers & Flip Flops",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/shoe/h/d/c/7-grey-7-roaster-grey-original-imah8bzkdjupgaa5.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/backpack/3/s/o/12-men-and-women-backpack-for-school-bag-college-bag-12-hinex-original-imah4rm2sy3dfuap.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/jean/g/f/a/28-t-baggy-grey-tidda-original-imah3ztwtzzyxxhc.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
];

let khali8 = "";
cardData8.map((item) => {
    khali8 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover w-full">
            <div class="flex flex-col  p-2">
                <h2 class="text-[15px] text-gray-800 font-semibold">${item.title}</h2>
                <p class="text-[#2f944e]">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards8").innerHTML = khali8;


//items main sec 9
const cardData9 = [
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/u/9/12-bfs-590-orange-big-fox-orange-original-imaghg8ywcyerr36.jpeg?q=70",
        title: "Men’s Slippers & Flip Flops",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/shoe/h/d/c/7-grey-7-roaster-grey-original-imah8bzkdjupgaa5.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/backpack/3/s/o/12-men-and-women-backpack-for-school-bag-college-bag-12-hinex-original-imah4rm2sy3dfuap.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/jean/g/f/a/28-t-baggy-grey-tidda-original-imah3ztwtzzyxxhc.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
];

let khali9 = "";
cardData9.map((item) => {
    khali9 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover w-full">
            <div class="flex flex-col  p-2">
                <h2 class="text-[15px] text-gray-800 font-semibold">${item.title}</h2>
                <p class="text-[#2f944e]">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards9").innerHTML = khali9;


// items main sec 10
const cardData10 = [
    {
        image: "https://rukminim1.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=90",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/xif0q/musical-keyboard/h/v/n/37-0-2-a128-piano-keyboard-with-recording-mic-mobile-charger-original-imah3wpfgguypzb7.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/120/120/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=60",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    
   
    // Add more items if needed...
];

let khali10 = "";

cardData10.map((item, index, array) => {
    khali10 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center  shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover">
            <div class="flex flex-col items-center">
                <h2 class="text-[15px]  text-gray-800">${item.title}</h2>
                <p class="text-gray-600">${item.description}</p>
            </div>
        </div>
    `;
});
document.getElementById("cards10").innerHTML = khali10;

// items main sec 11
const cardData11 = [
    {
        image: "https://rukminim1.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=90",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/xif0q/musical-keyboard/h/v/n/37-0-2-a128-piano-keyboard-with-recording-mic-mobile-charger-original-imah3wpfgguypzb7.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/120/120/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=60",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    
   
    // Add more items if needed...
];

let khali11 = "";

cardData11.map((item, index, array) => {
    khali11 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center  shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover">
            <div class="flex flex-col items-center">
                <h2 class="text-[15px]  text-gray-800">${item.title}</h2>
                <p class="text-gray-600">${item.description}</p>
            </div>
        </div>
    `;
});
document.getElementById("cards11").innerHTML = khali11;

// items main sec 12
const cardData12 = [
    {
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/n/u/9/12-bfs-590-orange-big-fox-orange-original-imaghg8ywcyerr36.jpeg?q=70",
        title: "Men’s Slippers & Flip Flops",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/shoe/h/d/c/7-grey-7-roaster-grey-original-imah8bzkdjupgaa5.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/backpack/3/s/o/12-men-and-women-backpack-for-school-bag-college-bag-12-hinex-original-imah4rm2sy3dfuap.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
    {
        image: "https://rukminim1.flixcart.com/image/60/60/xif0q/jean/g/f/a/28-t-baggy-grey-tidda-original-imah3ztwtzzyxxhc.jpeg?q=80",
        title: "Best Truewireless Headphones",
        description: "Min. 70% Off",
    },
];

let khali12 = "";
cardData12.map((item) => {
    khali12 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover w-full">
            <div class="flex flex-col  p-2">
                <h2 class="text-[15px] text-gray-800 font-semibold">${item.title}</h2>
                <p class="text-[#2f944e]">${item.description}</p>
            </div>
        </div>
    `;
});

document.getElementById("cards12").innerHTML = khali12;

// items main sec 13
const cardData13 = [
    {
        image: "https://rukminim1.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=90",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/xif0q/musical-keyboard/h/v/n/37-0-2-a128-piano-keyboard-with-recording-mic-mobile-charger-original-imah3wpfgguypzb7.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/120/120/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=60",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    
   
    // Add more items if needed...
];

let khali13 = "";

cardData13.map((item, index, array) => {
    khali13 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center  shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover">
            <div class="flex flex-col items-center">
                <h2 class="text-[15px]  text-gray-800">${item.title}</h2>
                <p class="text-gray-600">${item.description}</p>
            </div>
        </div>
    `;
});
document.getElementById("cards13").innerHTML = khali13;

// items main sec 14
const cardData14 = [
    {
        image: "https://rukminim1.flixcart.com/image/210/210/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=90",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/xif0q/musical-keyboard/h/v/n/37-0-2-a128-piano-keyboard-with-recording-mic-mobile-charger-original-imah3wpfgguypzb7.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/krtjgcw0/microphone/x/h/j/3-5mm-clip-metal-microphone-for-voice-recording-lapel-mic-mobile-original-imag5gxrug6fcbct.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/210/210/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=90",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    {
        image: "https://rukminim1.flixcart.com/image/120/120/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=60",
        title: "Best Truewireless Headphones",
        description: "Grab Now",
    },
    
   
    // Add more items if needed...
];

let khali14 = "";

cardData14.map((item, index, array) => {
    khali14 += `
        <div class="min-w-[200px] flex flex-col justify-center items-center  shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src="${item.image}" alt="${item.title}" class="object-cover">
            <div class="flex flex-col items-center">
                <h2 class="text-[15px]  text-gray-800">${item.title}</h2>
                <p class="text-gray-600">${item.description}</p>
            </div>
        </div>
    `;
});
document.getElementById("cards14").innerHTML = khali14;