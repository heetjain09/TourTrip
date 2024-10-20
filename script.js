document.getElementById('showActivities').onclick = function() {
    const activityList = document.getElementById('activityList');
    if (activityList.style.display === "none") {
        activityList.style.display = "block";
    } else {
        activityList.style.display = "none";
    }
};
