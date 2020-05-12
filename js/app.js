const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');

// FORM FIELDS
const user = document.getElementById('user-field');
const message = document.getElementById('message-field');
const send = document.getElementById('send');

// ALERT BANNER 
alertBanner.innerHTML = 
`
 <div class='alert-banner'>
   <div class='alert-half-banner'><p>Alert: You have 6 overdue task to complete <span class="alert-banner-close">X</span></p></div>
 </div>
`
  alertBanner.addEventListener('click', (event) => {
      if(event.target.classList.contains('alert-banner-close')) {
        alert.style.display= 'none';
      }
  });

  // TRAFFIC OBJECTS
  let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17' , '18-24' , '25-31'],
    datasets: [{
       data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250,1500, 2500],

       backgroundColor: 'rgba(116,119,191,.3)',
       borderWidth: 1,
  }]
  };
  let trafficOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2.5,
    animation: {
      duration:0
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
    legend: {
      display: false
    }
  };

  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });


  // DAILY TRAFFIC OBJECTS
const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'], 
  datasets: [{
    label: '# of Hits',
    data: ['75', '15', '175', '125', '225', '200', '100'],
  backgroundColor: '#7477bf',
  borderWidth: 1
  }]
};
const dailyOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
}
let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
})

// MOBILE TRAFFIC OBJECTS

const mobileData = {
  labels: ['Desktop', 'Tablet', 'Desktop'],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
       '#7477BF',
       '78CF82',
       '51B6C8'
    ]

  }]
};

const mobileOptions = {
  legend: {
    responsive: true,
    maintainAspectRatio: false,
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
}
let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

 send.addEventListener('click', () => {

  if(user.value === '' && message.value === '') {
    alert('Please send out user and message field before sending');
  } else if (user.value === '') {
    alert('Please fill out user field before sending');
  } else if (message.value === '') {
    alert('Please fill out message field before sending');
  } else {
    alert(`Message was successfully sent to ${user.value}`);
  }
})