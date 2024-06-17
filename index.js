const getBtn = document.getElementById("get-btn")
const activity =document.getElementById("activity")
getBtn.addEventListener("click",function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        activity.textContent = data.activity
        activity.classList.toggle("new-activity")

        setTimeout(function(){
            activity.classList.toggle("new-activity")
        },500)
    })
})
