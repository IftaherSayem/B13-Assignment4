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


function updateStatus(btn, text, removeClass, addClasses) {
  const card = btn.closest('.job-card');
  const apply = card.querySelector('.apply-btn');

  const prevState = apply.innerText;
  if(prevState == text) return null;
  apply.innerText = text;

  if (removeClass) apply.classList.remove(removeClass);

  if (addClasses) {
    apply.classList.add(...addClasses);
  }
  return prevState;
}

function changeCount(id, value){
  const el = document.getElementById(id);
  let count = parseInt(el.innerText);
  el.innerText = count + value;
}



function clearEmpty(containerId) {
  const container = document.getElementById(containerId);
  const empty = container.querySelector('.empty-state');

  if (empty) {
    empty.remove();
  }
}


function removeClass(id,className){
  const getId = document.getElementbyId(id);
  getId.classList.remove(className);
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
