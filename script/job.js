document.addEventListener("DOMContentLoaded", () => {
    showOnly("job-container");
    const firstTab = document.querySelector(".tab-btn");
    if (firstTab) setActive(firstTab);
});

document.querySelectorAll('.dlt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.job-card').remove();

        const count = document.querySelectorAll('.job-card').length;
        document.getElementById('total-job').innerText = count;
        document.getElementById('job-count').innerText = count;
        if (count < 1) {
            notAvailable('job-container');
        }
    });
});

document.getElementById('all-job').addEventListener("click", () => {
    showOnly("job-container");
    const firstTab = document.querySelector(".tab-btn");
    if (firstTab) setActive(firstTab);
});


const acceptReject = document.getElementById('accept-reject');

document.getElementById('interview').addEventListener("click", (e) => {
    showOnly('interview-list');
    setActive(e.target);
    acceptReject.classList.remove('hidden');
    
    const interviewCards = document.getElementById('interview-cards');

    if (interviewCards.children.length === 0) {
        document.getElementById('interview-empty').classList.remove('hidden');
    }
    else {
        document.getElementById('interview-empty').classList.add('hidden');
    }
});

document.getElementById('reject').addEventListener("click", (e) => {
    showOnly('reject-list');
    setActive(e.target);

    const rejectCards = document.getElementById('reject-cards');

    if (rejectCards.children.length === 0) {
        document.getElementById('reject-empty').classList.remove('hidden');
    }
    else {
        document.getElementById('reject-empty').classList.add('hidden');
    }
});

document.querySelectorAll('.dlt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.job-card').remove();

        const count = document.querySelectorAll('.job-card').length;
        document.getElementById('total-job').innerText = count;
        document.getElementById('job-count').innerText = count;
        if (count < 1) {
            notAvailable('job-container');
        }
    });
});

document.getElementById('all-job').addEventListener("click", () => {
    showOnly("job-container");
    const firstTab = document.querySelector(".tab-btn");
    if (firstTab) setActive(firstTab);
});
