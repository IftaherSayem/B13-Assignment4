const acceptReject = document.getElementById('accept-reject');
document.addEventListener("DOMContentLoaded", () => {
    showOnly("job-container");
    acceptReject.classList.add('hidden');
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
    acceptReject.classList.add('hidden');
    const firstTab = document.querySelector(".tab-btn");
    if (firstTab) setActive(firstTab);
});




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
    acceptReject.classList.remove('hidden');

    const rejectCards = document.getElementById('reject-cards');

    if (rejectCards.children.length === 0) {
        document.getElementById('reject-empty').classList.remove('hidden');
    }
    else {
        document.getElementById('reject-empty').classList.add('hidden');
    }
});

let interviewClicked = false;
let rejectClicked = false;
document.querySelectorAll('.interview-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        interviewClicked = true;
        const card = btn.closest('.job-card');
        const applyBtn = card.querySelector('.apply-btn');

        if (applyBtn.innerText === 'INTERVIEW') {
            return;
        }

        applyBtn.innerText = 'INTERVIEW';
        applyBtn.classList.add('btn-soft', 'btn-success');

        if(rejectClicked){
            const totalRejected = document.getElementById('total-rejected');
            const acceptReject = document.getElementById('accept-reject');

            let totalRejectCount = parseInt(totalRejected.innerText);
            let acceptRejectCount = parseInt(acceptReject.innerText);
            
            totalRejectCount++;
            acceptRejectCount++;

            totalRejected.innerText = totalRejectCount;
            acceptReject.innerText = acceptRejectCount + ' of ';
        }
        const totalInterview = document.getElementById('total-interview');
        const acceptReject = document.getElementById('accept-reject');

        let totalInterviewCount = parseInt(totalInterview.innerText);
        let acceptRejectCount = parseInt(acceptReject.innerText);
        
        totalInterviewCount++;
        acceptRejectCount++;

        totalInterview.innerText = totalInterviewCount;
        acceptReject.innerText = acceptRejectCount + ' of ';
    });
});


document.querySelectorAll('.reject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        reejctClicked = true;
        const card = btn.closest('.job-card');
        const applyBtn = card.querySelector('.apply-btn');

        if (applyBtn.innerText === 'REJECTED') {
            return;
        }

        applyBtn.innerText = 'REJECTED';
        applyBtn.classList.add('btn-soft', 'btn-error');

        if(interviewClicked){
            const totalInterview = document.getElementById('total-interview');
            const acceptReject = document.getElementById('accept-reject');

            let totalInterviewCount = parseInt(totalInterview.innerText);
            let acceptRejectCount = parseInt(acceptReject.innerText);
            
            totalInterviewCount--;
            acceptRejectCount--;

            totalInterview.innerText = totalInterviewCount;
            acceptReject.innerText = acceptRejectCount + ' of ';
        }
        const totalRejected = document.getElementById('total-rejected');
        const acceptReject = document.getElementById('accept-reject');

        let totalRejectCount = parseInt(totalRejected.innerText);
        let acceptRejectCount = parseInt(acceptReject.innerText);
        
        totalRejectCount++;
        acceptRejectCount++;

        totalRejected.innerText = totalRejectCount;
        acceptReject.innerText = acceptRejectCount + ' of ';

        
        
    });
});

