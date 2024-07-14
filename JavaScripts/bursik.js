window.addEventListener("load", (event) => {

    //Create the player stats radar
    var ctx = document.getElementById('playerStatsRadar');

    var borderwidth = 1

    const dataset2024 = {
        label: '2024',
        data: [30, 64, 55, 78, 40],
        borderwidth: borderwidth,
        backgroundColor: 'rgba(128, 0, 128, 0.5)',
        borderColor: 'rgb(128, 50, 128)',
        pointBackgroundColor: 'rgb(128, 0, 128)'
    }

    const dataset2023 = {
        label: '2023',
        data: [27, 60, 50, 70, 30],
        borderwidth: borderwidth,
        backgroundColor: 'rgba(225, 165, 0, 0.5)',
        borderColor: 'rgb(225, 165, 50)',
        pointBackgroundColor: 'rgb(255, 165, 0)'
    }

    const dataset2022 = {
        label: '2023',
        data: [20, 50, 45, 63, 22],
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

    //Create the player saved pie
    var ctx = document.getElementById('playerSavedPie')

    var borderwidth = 3

    const datasetSaved = {
        label: 'Save Percentage',
        data: [(15 / 24) * 100, (7 / 10) * 100],
        borderWidth: borderwidth,
        backgroundColor: ['rgba(128, 0, 128)', 'rgba(225, 165, 0)']
    }

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Shots Inside the Box', 'Shots Outside the Box'],
            datasets: [datasetSaved]
        },
        options: {
            plugins: {
                title: {
                    text: 'Save Success From Shots Inside and Outside the Box',
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

    //Make the player bubble chartc
    var ctx = document.getElementById('cleansheetsBar')

    var borderwidth = 3

    const datasetClean = {
        label: 'CleanSheets',
        data: [4, 12, 6, 5],
        borderWidth: borderwidth,
        backgroundColor: ['rgba(225, 165, 0)']
    }

    const datasetAll = {
        label: 'Rest of Games',
        data: [12, 23, 14, 16],
        borderWidth: borderwidth,
        backgroundColor: ['rgba(128, 0, 128)']
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['19/20', '20,21', '21/22', '22/23'],
            datasets: [datasetClean, datasetAll]
        },
        options: {
            plugins: {
                title: {
                    text: 'Clean Sheets Over the Seasons',
                    display: true,
                    color: 'white'
                },
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: 'white',
                        backdropColor: 'transparent'
                    },
                    title: {
                        display: true,
                        color: 'white',
                        text: 'Season'
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: 'white'
                    },
                    title: {
                        display: true,
                        color: 'white',
                        text: 'Clean Sheets'
                    }
                }
            }
        }
    })
}); 