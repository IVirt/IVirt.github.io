window.addEventListener("load", (event) => {

    //Create the player stats radar
    var ctx = document.getElementById('playerStatsRadar');

    var borderwidth = 1

    const dataset2024 = {
        label: '2024',
        data: [34, 42, 53, 75, 36],
        borderwidth: borderwidth,
        backgroundColor: 'rgba(128, 0, 128, 0.5)',
        borderColor: 'rgb(128, 50, 128)',
        pointBackgroundColor: 'rgb(128, 0, 128)'
    }

    const dataset2023 = {
        label: '2023',
        data: [37, 42, 56, 76, 36],
        borderwidth: borderwidth,
        backgroundColor: 'rgba(225, 165, 0, 0.5)',
        borderColor: 'rgb(225, 165, 50)',
        pointBackgroundColor: 'rgb(255, 165, 0)'
    }

    const dataset2022 = {
        label: '2023',
        data: [37, 44, 52, 76, 37],
        borderwidth: borderwidth,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        borderColor: 'rgb(0, 255, 50)',
        pointBackgroundColor: 'rgb(0, 225, 0)'
    }

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['ATTACK', 'TECHNICAL', 'TACTICS', 'DEFENCE', 'CREATIVITY'],
            datasets: [dataset2022, dataset2023, dataset2024],
            color: 'white'
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                },
                title: {
                    display: true,
                    text: 'Attributes Radar',
                    color: 'white'
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'white'
                    },
                    grid: {
                        color: 'white',
                    },
                    pointLabels: {
                        color: 'white'
                    },
                    ticks: {
                        color: 'white',
                        backdropColor: 'transparent'
                    }
                }
            }
        }
    })

    //Create the player duels pie
    var ctx = document.getElementById('playerDuelsPie')

    var borderwidth = 2

    const datasetDuels = {
        label: 'Duels Won',
        data: [82, 62],
        borderwidth: borderwidth,
        backgroundColor: ['rgba(128, 0, 128)', 'rgba(225, 165, 0)']
    }

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Ground Duels', 'Arial Duels'],
            datasets: [datasetDuels]
        },
        options: {
            plugins: {
                title: {
                    text: 'Duels Won on Ground and in Air',
                    display: true,
                    color: 'white'
                },
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    })
    
    //Make the player bubble chart
    var ctx = document.getElementById('interceptionsBubble');
    
    const datasetInterceptions = {
        label: "Interceptions",
        data: [{
            x: 1,
            y: 28,
            r: 24
        }, {
            x: 1,
            y: 30,
            r: 37
        }, {
            x: 1,
            y: 41,
            r: 52
        }, {
            x: 1,
            y: 26,
            r: 37
        }, {
            x: 1,
            y: 36,
            r: 31
        }]
    }


    new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [datasetInterceptions]
        },
        options: {
            scales: {
                x: {
                    type: 'category',
                    labels: ['19/20', '20/21', '21/22', '22/23', '23/24'],
                    ticks: {
                        color: 'white'
                    },
                    title: {
                        display: true,
                        color: 'white',
                        text: 'Season'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    title: {
                        display: true,
                        color: 'white',
                        text: 'Number of Games Played'
                    }
                }
            },
            plugins: {
                title: {
                    text: 'Number of Interceptions Made by the Number of Games Played Each Season',
                    color: 'white',
                    display: true
                },
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    })

}); 