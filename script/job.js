const acceptReject = document.getElementById('accept-reject');
document.addEventListener("DOMContentLoaded", () => {
    showOnly("job-container");
    // acceptReject.classList.add('hidden');
    const firstTab = document.querySelector(".tab-btn");
    if (firstTab) setActive(firstTab);
    updateJobCount('all');
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
    updateJobCount('all');

});


document.getElementById('job-container').addEventListener('click', function (e) {

    const card = e.target.closest('.job-card');

    if (!card) return;
    const clone = card.cloneNode(true);

    // 🔥 EI KHANE likhba
    clone.querySelector('.interview-btn').disabled = true;
    // Interview click → COPY
    if (e.target.classList.contains('interview-btn')) {

        const clone = card.cloneNode(true);
        document.getElementById('interview-cards').appendChild(clone);
    }

    // Reject click → COPY
    if (e.target.classList.contains('reject-btn')) {

        const clone = card.cloneNode(true);
        document.getElementById('reject-cards').appendChild(clone);
    }

});

document.getElementById('interview').addEventListener("click", (e) => {
    showOnly('interview-list');
    setActive(e.target);
    updateJobCount('interview');

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
    updateJobCount('reject');

    const rejectCards = document.getElementById('reject-cards');

    if (rejectCards.children.length === 0) {
        document.getElementById('reject-empty').classList.remove('hidden');
    }
    else {
        document.getElementById('reject-empty').classList.add('hidden');
    }
});

document.querySelectorAll('.interview-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        const card = btn.closest('.job-card');
        const applyBtn = card.querySelector('.apply-btn');

        const totalInterview = document.getElementById('total-interview');
        const totalRejected = document.getElementById('total-rejected');
        const acceptReject = document.getElementById('accept-reject');

        let interviewCount = parseInt(totalInterview.innerText);
        let rejectedCount = parseInt(totalRejected.innerText);

        if (applyBtn.innerText === 'INTERVIEW') {
            return;
        }


        if (applyBtn.innerText === 'REJECTED') {
            rejectedCount--;
        }

        interviewCount++;

        applyBtn.innerText = 'INTERVIEW';
        applyBtn.classList.remove('btn-error');
        applyBtn.classList.add('btn-soft', 'btn-success');
        if (applyBtn.innerText == 'INTERVIEW') {

        }
        totalInterview.innerText = interviewCount;
        totalRejected.innerText = rejectedCount;
        // acceptReject.innerText = processedCount + ' of ';
    });
});

document.querySelectorAll('.reject-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        const card = btn.closest('.job-card');
        const applyBtn = card.querySelector('.apply-btn');

        const totalInterview = document.getElementById('total-interview');
        const totalRejected = document.getElementById('total-rejected');
        const acceptReject = document.getElementById('accept-reject');

        let interviewCount = parseInt(totalInterview.innerText);
        let rejectedCount = parseInt(totalRejected.innerText);

        if (applyBtn.innerText === 'REJECTED') {
            return;
        }

        if (applyBtn.innerText === 'INTERVIEW') {
            interviewCount--;
        }

        rejectedCount++;

        applyBtn.innerText = 'REJECTED';
        applyBtn.classList.remove('btn-success');
        applyBtn.classList.add('btn-soft', 'btn-error');

        totalInterview.innerText = interviewCount;
        totalRejected.innerText = rejectedCount;
    });
});


document.getElementById('interview-cards').addEventListener('click', function (e) {

    const card = e.target.closest('.job-card');

    if (!card) return;

    // Reject click → MOVE to reject
    if (e.target.classList.contains('reject-btn')) {
        document.getElementById('reject-cards').appendChild(card);
    }

});


document.getElementById('reject-cards').addEventListener('click', function (e) {

    const card = e.target.closest('.job-card');

    if (!card) return;

    // Interview click → MOVE to interview
    if (e.target.classList.contains('interview-btn')) {
        document.getElementById('interview-cards').appendChild(card);
    }

});