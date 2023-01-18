// File Name Show On Upload
// $(".toggle-password").on('click', function () {
//   alert("Ok")
//   $(this).toggleClass("show");
//   let input = $(this).parent().find(".password-field")
//   if (input.attr("type") == "password") {
//     input.attr("type", "text");
//   } else {
//     input.attr("type", "password");
//   }
// });

// File Name Show On Upload
$(".upload").change(function () {
  $(this).parent().parent().find(".document-upload___title span").text(this.files[0].name);
});

// Header Top Slider
// $(".propertyImgSlider").slick({
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: false,
// });

// Chart Js
function coinChartProfit(canvasId) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397]
      }]
    },
    options: {
      responsive: false,
      legend: {
        display: false
      },
      elements: {
        line: {
          borderColor: '#0AFF96',
          borderWidth: 2
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    }
  });
}
function coinChartLoss(canvasId) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397]
      }]
    },
    options: {
      responsive: false,
      legend: {
        display: false
      },
      elements: {
        line: {
          borderColor: '#FF002E',
          borderWidth: 2
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    }
  });
}
coinChartProfit('myChart1')
coinChartLoss('myChart2')
coinChartLoss('myChart3')
coinChartProfit('myChart4')
coinChartLoss('myChart5')
coinChartLoss('myChart6')