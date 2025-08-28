/*Chart Code*/

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('placement-chart').getContext('2d');
    const placementChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['MTECH', 'MCA', 'BARCH', 'CSE', 'ECE', 'CE', 'ME', 'EEE'],
            datasets: [{
                label: 'No of Students Placed',
                data: [6, 24, 3, 72, 42, 20, 34, 24],
                backgroundColor: [
                    'rgba(105, 122, 21, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(56, 63, 77, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(201, 203, 207, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});




