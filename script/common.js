function notAvailable(id){
    const container = document.getElementById(id);

    if(container.querySelector('.empty-state')){
        return;
    }

    const newEl = document.createElement('div');
    newEl.classList.add('empty-state');

    newEl.innerHTML = `
    <div class="bg-white h-[400px] flex flex-col justify-center items-center py-[60px] px-[40px]">
        <img src="assets/no.png" alt="">
        <h2 class="font-bold text-2xl mt-[20px]">No jobs available</h2>
        <p>Check back soon for new job opportunities</p>
    </div>
    `;

    container.appendChild(newEl);
}

function showOnly(id){
    const jobContainer = document.getElementById('job-container');
    const interviewList = document.getElementById('interview-list');
    const rejectList = document.getElementById('reject-list');

    jobContainer.classList.add('hidden');
    interviewList.classList.add('hidden');
    rejectList.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}

const buttons = document.querySelectorAll(".tab-btn");
function setActive(btn) {
  buttons.forEach((b) => {
    b.classList.remove("btn-primary", "bg-blue-500", "text-white");
    b.classList.add("btn-outline", "bg-white", "text-gray-500");
  });

  btn.classList.remove("btn-outline", "bg-white", "text-gray-500");
  btn.classList.add("btn-primary", "bg-blue-500", "text-white");
}


function updateJobCount(type) {
    const jobCount = document.getElementById('job-count');

    const totalJobs = document.querySelectorAll('#job-container .job-card').length;
    const interviewCount = parseInt(document.getElementById('total-interview').innerText);
    const rejectedCount = parseInt(document.getElementById('total-rejected').innerText);

    if (type === 'all') {
        jobCount.innerText = `${totalJobs}`;
    }
    else if (type === 'interview') {
        jobCount.innerText = `${interviewCount} of ${totalJobs}`;
    }
    else if (type === 'reject') {
        jobCount.innerText = `${rejectedCount} of ${totalJobs}`;
    }
}

function updateEmptyStates() {
    const interviewCards = document.getElementById('interview-cards');
    const interviewEmpty = document.getElementById('interview-empty');
    if (interviewCards && interviewEmpty) {
        if (interviewCards.children.length === 0) {
            interviewEmpty.classList.remove('hidden');
        } else {
            interviewEmpty.classList.add('hidden');
        }
    }

    const rejectCards = document.getElementById('reject-cards');
    const rejectEmpty = document.getElementById('reject-empty');
    if (rejectCards && rejectEmpty) {
        if (rejectCards.children.length === 0) {
            rejectEmpty.classList.remove('hidden');
        } else {
            rejectEmpty.classList.add('hidden');
        }
    }
}