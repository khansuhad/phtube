const loadCatagory = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const catagory = data.data;
    catagorydisplay(catagory)
    // console.log(catagory);
}
loadCatagory();
const catagorydisplay = (catagory) => {
    // console.log(catagory)
    const catagoryButton = document.getElementById('video-catagory-button-container');

    catagory.forEach((catagory) => {
        console.log();
        const div = document.createElement('div');
        div.innerHTML = ` <button class="text-base font-bold text-black bg-[#25252533] rounded py-2 px-5 ml-10">${catagory.category}</button>`;
        catagoryButton.appendChild(div);
    })
}
const loadVideo = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const video = data.data ;
    videoDisplay(video);
    console.log(video);
}
loadVideo();
const videoDisplay = (video) => {
    const videoContainer = document.getElementById('video-content-container');

    video.forEach((video) => {
        const div = document.createElement('div');
        console.log(video)
        div.innerHTML = ` <div class="card w-full ">
      
        <img src="${video.thumbnail}" alt="Shoes" class="rounded w-full h-48 " />
      
        <div class="flex">
            
     <img src="${video?.authors[0]?.profile_picture}" id="profile-image" class="h-10 w-30 ml-8 mt-8 rounded-full" /> 
            <div class="card-body">
                <h2 class="card-title text-base">
                ${video?.title}
                </h2>
                <div>
                    <p class="text-sm font-normal">
                    ${video?.authors[0]?.profile_name} <span>suhad</span>
                    </p>
                </div>
                <p class="text-sm font-normal">${video?.others?.views} <span> views</span></p>
            </div>
        </div>
    </div>`;
    videoContainer.appendChild(div);
    })
}

