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

        const count = document.querySelectorAll('#job-container .job-card').length;
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



document.getElementById('interview').addEventListener("click", (e) => {
    showOnly('interview-list');
    setActive(e.target);
    updateJobCount('interview');
    updateEmptyStates();
});

document.getElementById('reject').addEventListener("click", (e) => {
    showOnly('reject-list');
    setActive(e.target);
    updateJobCount('reject');
    updateEmptyStates();
});

document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('interview-btn') && !e.target.classList.contains('reject-btn')) return;

    const clickedCard = e.target.closest('.job-card');
    if (!clickedCard) return;

    const companyName = clickedCard.querySelector('h3').innerText;

    const originalCards = Array.from(document.querySelectorAll('#job-container .job-card'));
    const originalCard = originalCards.find(c => c.querySelector('h3').innerText === companyName);
    
    if (!originalCard) return;

    const applyBtn = originalCard.querySelector('.apply-btn');
    const currentStatus = applyBtn.innerText;
    
    let newStatus = '';
    if (e.target.classList.contains('interview-btn')) newStatus = 'INTERVIEW';
    if (e.target.classList.contains('reject-btn')) newStatus = 'REJECTED';

    if (currentStatus === newStatus) return;

    // 2. Update Counters
    const totalInterview = document.getElementById('total-interview');
    const totalRejected = document.getElementById('total-rejected');
    let interviewCount = parseInt(totalInterview.innerText);
    let rejectedCount = parseInt(totalRejected.innerText);

    if (currentStatus === 'INTERVIEW') interviewCount--;
    if (currentStatus === 'REJECTED') rejectedCount--;

    if (newStatus === 'INTERVIEW') interviewCount++;
    if (newStatus === 'REJECTED') rejectedCount++;

    totalInterview.innerText = interviewCount;
    totalRejected.innerText = rejectedCount;

    
    applyBtn.innerText = newStatus;
    applyBtn.classList.remove('btn-success', 'btn-error');
    if (newStatus === 'INTERVIEW') {
        applyBtn.classList.add('btn-soft', 'btn-success');
    } else if (newStatus === 'REJECTED') {
        applyBtn.classList.add('btn-soft', 'btn-error');
    }

    
    document.getElementById('interview-cards').querySelectorAll('.job-card').forEach(c => {
        if (c.querySelector('h3').innerText === companyName) c.remove();
    });
    document.getElementById('reject-cards').querySelectorAll('.job-card').forEach(c => {
        if (c.querySelector('h3').innerText === companyName) c.remove();
    });

   
    const clone = originalCard.cloneNode(true);
    if (newStatus === 'INTERVIEW') {
        clone.querySelector('.interview-btn').disabled = true;
        clone.querySelector('.reject-btn').disabled = false;
        document.getElementById('interview-cards').appendChild(clone);
    } else if (newStatus === 'REJECTED') {
        clone.querySelector('.reject-btn').disabled = true;
        clone.querySelector('.interview-btn').disabled = false;
        document.getElementById('reject-cards').appendChild(clone);
    }

    
    updateEmptyStates();
});