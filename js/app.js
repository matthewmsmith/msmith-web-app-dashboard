const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');

// FORM FIELDS
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

// ALERT BANNER 
alertBanner.innerHTML = 
`<div class='alert-banner>
<p><strong>Alert:</strong> You have <strong>6</strong> overdue task
to complete</p>
       <p class='alert-close'>x</p>
       </div>`
  alertBanner.addEventListener('click', (event) => {
      if(event.target.classList.contains('alert-close')) {
        alert.style.display= 'none';
      }
  })

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