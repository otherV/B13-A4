let jobsList = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salaryMin: "130,000",
        salaryMax: "175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "not applied"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salaryMin: "80,000",
        salaryMax: "120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "not applied"
    },
    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salaryMin: "125,000",
        salaryMax: "165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "not applied"
    },
    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salaryMin: "140,000",
        salaryMax: "190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "not applied"
    },
    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salaryMin: "110,000",
        salaryMax: "150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "not applied"
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salaryMin: "130,000",
        salaryMax: "170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "not applied"
    },
    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salaryMin: "120,000",
        salaryMax: "160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "not applied"
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salaryMin: "130,000",
        salaryMax: "175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "not applied"
    }
];

let interview = [];
let rejected = [];
let currentTab = "all";

const totalCount = document.querySelector('#total-count');
const interviewCount = document.querySelector('#interview-count');
const rejectedCount = document.querySelector('#rejected-count');
const filteCount = document.querySelector('#filter-count');

function updateStats() {

    interview = jobsList.filter(job => job.status === "interview");
    rejected = jobsList.filter(job => job.status === "rejected");

    totalCount.innerHTML = jobsList.length;
    interviewCount.innerHTML = interview.length;
    rejectedCount.innerHTML = rejected.length;

    switch (currentTab) {
        case "all":
            filteCount.innerHTML = jobsList.length;
            break;
        case "interview":
            filteCount.innerHTML = interview.length;
            break;
        case "rejected":
            filteCount.innerHTML = rejected.length;
            break;
        default:
            break;
    }
}

const jobListUl = document.querySelector('#job-list');

function injectLists(jobArray) {
    jobListUl.innerHTML = "";
    let emptyLi = document.createElement('li');
    emptyLi.className = "h-96 bg-white list-row px-15 py-10 mt-4 mb-18 flex justify-center items-center";
    emptyLi.innerHTML = `<div class="text-center">

                        <div class="list-icon flex justify-center items-center">
                            <img class="w-24 h-24" src="./assets/no_job.webp" alt="">
                        </div>

                        <div class="list-title mt-5">
                            <h4 class="text-2xl font-semibold color-black mb-1">No jobs available</h4>
                            <p class="text-base">Check back soon for new job opportunities</p>
                        </div>
                        
                    </div>`;
    if (filteCount.innerHTML == "0") {
        jobListUl.appendChild(emptyLi);
        return;
    }
    for (const job of jobArray) {
        let li = document.createElement('li');
        li.id = "job-" + job.id;
        li.className = "bg-white list-row p-6 mt-4";
        let checkedValue = `checked="checked"`;
        let nonAppStr = "";
        if (job.status === "not applied") {
            nonAppStr = `<span id="non-${job.id}" class="non-applied text-sm font-medium uppercase rounded-sm w-28 h-9 px-3 py-2">
                                    NOT APPLIED
                                </span>`;
        }
        li.innerHTML = `<div class="list-col-grow">

                        <div class="list-title">
                            <h4 class="company-name text-lg font-semibold color-black mb-1">${job.companyName}</h4>
                            <p class="position text-base">${job.position}</p>
                        </div>

                        <p class="list-info mt-5 text-sm">
                            <span class="location">${job.location}</span> • <span class="type">${job.type}</span> • $<span
                                class="salary-min">${job.salaryMin}</span> - $<span class="salary-max">${job.salaryMax}</span>
                        </p>

                        <div class="mt-5">
                            <p class="mb-3">
                                ${nonAppStr}
                            </p>
                            <p class="list-col-wrap text-xs color-DGray text-sm">
                                ${job.description}
                            </p>
                        </div>
                        <div id="status-toggle-group" class="mt-5 tabs flex gap-x-2">
                            <input id="interview-toggle" type="radio" name="${job.id}"
                                class="status-toggle btn btn-outline btn-success text-sm font-semibold uppercase"
                                aria-label="Interview" ${(job.status == "interview") ? checkedValue : ""} />
                            <input id="rejected-toggle" type="radio" name="${job.id}"
                                class="status-toggle btn btn-outline btn-error text-sm font-semibold uppercase"
                                aria-label="Rejected" ${(job.status == "rejected") ? checkedValue : ""} />
                        </div>
                    </div>

                    <button id="${job.id}" class="trash-btn btn btn-circle bg-white hover:bg-red-100 border-[1px]">
                        <svg fill="#000000" width="16px" height="16px" viewBox="0 0 0.48 0.48"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.38 0.12v0.25A0.05 0.05 0 0 1 0.33 0.42h-0.18A0.05 0.05 0 0 1 0.1 0.37V0.12H0.09a0.01 0.01 0 0 1 0 -0.02H0.18V0.09A0.03 0.03 0 0 1 0.21 0.06h0.06A0.03 0.03 0 0 1 0.3 0.09V0.1h0.09a0.01 0.01 0 1 1 0 0.02zm-0.26 0v0.25A0.03 0.03 0 0 0 0.15 0.4h0.18A0.03 0.03 0 0 0 0.36 0.37V0.12zM0.28 0.1V0.09A0.01 0.01 0 0 0 0.27 0.08h-0.06A0.01 0.01 0 0 0 0.2 0.09V0.1zm0 0.09a0.01 0.01 0 1 1 0.02 0v0.14a0.01 0.01 0 1 1 -0.02 0zm-0.1 0a0.01 0.01 0 0 1 0.02 0v0.14a0.01 0.01 0 1 1 -0.02 0z" />
                        </svg>
                    </button>`;

        jobListUl.appendChild(li);
    }
    let trashButtons = document.querySelectorAll('.trash-btn');

    for (const button of trashButtons) {
        button.addEventListener('click', function () {
            jobListUl.removeChild(document.querySelector('#job-' + this.id));
            jobsList = jobsList.filter(job => job.id != this.id);
            updateStats();
            if (filteCount.innerHTML == "0") {
                jobListUl.appendChild(emptyLi);
                return;
            }
        });
    }

    let statusToggle = document.querySelectorAll('.status-toggle');

    for (const button of statusToggle) {
        button.addEventListener('click', function () {
            if (this.id == "interview-toggle") {
                jobsList.find(job => job.id == this.name).status = "interview";
                if (currentTab == "rejected") {
                    document.querySelector('#job-' + this.name).remove();
                }
            } else {
                jobsList.find(job => job.id == this.name).status = "rejected";
                if (currentTab == "interview") {
                    document.querySelector('#job-' + this.name).remove();
                }
            }
            let nonApp = document.querySelector('#non-' + this.name);
            if (nonApp) {
                nonApp.remove();
            }
            updateStats();
            if (filteCount.innerHTML == "0") {
                jobListUl.appendChild(emptyLi);
                return;
            }
        });
    }
}

injectLists(jobsList);
updateStats();

const filterButtons = document.querySelectorAll('.filter-btn');

for (const button of filterButtons) {
    button.addEventListener('click', function () {
        switch (this.id) {
            case "all":
                currentTab = "all";
                filteCount.innerHTML = jobsList.length;
                injectLists(jobsList);
                break;
            case "interview":
                currentTab = "interview";
                filteCount.innerHTML = interview.length;
                injectLists(interview);
                break;
            case "rejected":
                currentTab = "rejected";
                filteCount.innerHTML = rejected.length;
                injectLists(rejected);
                break;
            default:
                break;
        }
    });
}




