window.addEventListener("load", (event) => {

    //Create the player improvement line graph
    const ctx = document.getElementById('playerImprovementLine');

    borderwidth = 1

    const datasetBursik = {
        label: 'Josef Bursik',
        data: [10, 15, 30, 50, 60],
        borderwidth: borderwidth,
        backgroundColor: '#19bf32'
    }
    
    const datasetOHora = {
        label: "Warren O'Hora",
        data: [20, 25, 50, 65, 70],
        borderwidth: borderwidth,
        backgroundColor: '#f2fc32'
    }
    
    const datasetEkpiteta = {
        label: "Marvin Ekpiteta",
        data: [5, 30, 45, 45, 60],
        borderwidth: borderwidth,
        backgroundColor: '#7415a3'
    }
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [datasetBursik, datasetOHora, datasetEkpiteta],
            color: 'white'
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    text: 'Average Improvement %',
                    display: true,
                    color: 'white'
                },
                ticks: {
                    color: 'white'
                }
                },
            x : {
                title: {
                    text: 'Year Improvement Occured',
                    display: true,
                    color: 'white'
                },
                ticks: {
                    color: 'white'
                }
            }
        }
        }
    });

    //Making the player lanmarks map
    var map = L.map('playerLandmarksMap').setView([55.96175458228033, -3.1652695560544464], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //Marker to indicate Easter Road Stadium - Players' current ground
    var marker = L.marker([55.96175458228033, -3.1652695560544464], 'green').addTo(map)
    marker.bindPopup("Easter Road - The Holy Ground")

    //Circles to inddicate players' previous clubs
    var circleBursik = L.circle([52.988202833275025, -2.1762441023578996], {
    color: 'green',
    radius: 500
    }).addTo(map)
    circleBursik.bindPopup("bet365 Stadium - Home of Stoke City FC - Josef Burisik's First Professional Club")

    var circleOHora = L.circle([53.361479411231, -6.27503937219156], {
    color: 'orange',
    radius: 500
    }).addTo(map)
    circleOHora.bindPopup("Dalymount Park - Home of Bohemian FC - Warren O'Hora's First Professional Club")

    var circleEkpiteta = L.circle([51.75171528141067, 0.45066768409290636], {
    color: 'purple',
    radius: 500
    }).addTo(map)
    circleEkpiteta.bindPopup("Melbourne Stadium - Home of Chemsford City FC - Marvin Ekpeiteta's First Professional Club")

    //Polygons to indicate players' birthplaces
    var polygonBursik = L.polygon([
    [51.509788428631474, -0.11065157697273585],
    [51.48435370625577, -0.1267877460075674],
    [51.472593366102046, -0.1367441056248039],
    [51.467032876989535, -0.1515069836779477],
    [51.45056129902274, -0.14258059229697706],
    [51.42188230012339, -0.13777407386106977],
    [51.413103784914604, -0.14876040171457205],
    [51.422952735425255, -0.11236819069984558],
    [51.42038364857982, -0.0790658843939166],
    [51.4537705141845, -0.1017251855917652],
    [51.46639123848304, -0.09039553499284088],
    [51.47751169542315, -0.10241183108260905]
    ], {
    color: 'green'
    }).addTo(map)
    polygonBursik.bindPopup("London Borough of Lambeth - Birthplace of Josef Bursik")

    var polygonOHora = L.polygon([
    [53.36356030979078, -6.05345249317084],
    [53.387318929360134, -6.047272683753245],
    [53.391823379356865, -6.116623878328479],
    [53.4212952827982, -6.155762671306581],
    [53.40492452381254, -6.188035009376244],
    [53.40738053937562, -6.297211642420424],
    [53.422932012137885, -6.339097017361902],
    [53.404515174100204, -6.381669037794223],
    [53.42334118462801, -6.38647555623013],
    [53.39714620575039, -6.4475870049152375],
    [53.37789899358991, -6.402955048010384],
    [53.36642843268257, -6.404328338992071],
    [53.368067273363636, -6.380295746812536],
    [53.36478952895764, -6.37754916484916],
    [53.36315056218777, -6.364502900523126],
    [53.353725279740964, -6.355576509142155],
    [53.35864307848636, -6.405701629973759],
    [53.32912777337571, -6.407074920955447],
    [53.29548823158215, -6.444840422951862],
    [53.275373899185446, -6.424927703717389],
    [53.26592921235663, -6.361756318559751],
    [53.27989018578303, -6.277985568676796],
    [53.24990953974938, -6.210007665083249],
    [53.25771474512836, -6.202454564683966],
    [53.244568315510556, -6.183915136431181],
    [53.25196367923613, -6.15026950737983],
    [53.228540642169534, -6.1454629889439225],
    [53.22319675072509, -6.120057105782699],
    [53.2634650378579, -6.113877296365104],
    [53.27373149483155, -6.091217995167255],
    [53.31436245839473, -6.202454564683966],
    [53.335278480175155, -6.2161874745008445],
    [53.33978843485324, -6.180481908976962],
    [53.34552768743917, -6.235413548244472],
    [53.34921679905153, -6.190781591339619],
    [53.3619212957365, -6.22442722039097],
    [53.359462656441934, -6.1900949458487755],
    [53.38690941026998, -6.143403052471391],
    [53.38363311572909, -6.1008310320390695],
    [53.35987243950891, -6.076798439859533],
    [53.3619212957365, -6.054139138661685],
    [53.38322356118376, -6.041779519826495]
    ], {
    color: 'orange'
    }).addTo(map)
    polygonOHora.bindPopup("Irish Capital of Dublin - Birthplace of Warren O'Hora")

    var polygonEkpiteta = L.polygon([
    [51.68058312060565, -0.012104848621991852],
    [51.660674883349614, -0.007813314304217469],
    [51.612411699780495, -0.03562245686156561],
    [51.60590875992179, -0.040943959415605795],
    [51.609000437424086, -0.05347523975501361],
    [51.61102590522953, -0.1393059261105009],
    [51.61614247398952, -0.1447990900372521],
    [51.63148871985777, -0.1291779051205534],
    [51.65449038179741, -0.15432290448176267],
    [51.661944705013546, -0.18659524255142582],
    [51.661944705013546, -0.18659524255142582],
    [51.68706738835857, -0.1635926186081553],
    [51.69196255981397, -0.10522775188642404],
    [51.68281028721957, -0.060595794981570805]
    ], {
    color: 'purple'
    }).addTo(map)
    polygonEkpiteta.bindPopup("London Borough of Enfield - Birthplace of Marvin Ekpiteta")

    //Making the data table
    $(document).ready(function () {
        console.log(
            "test "
        )
        console.log($('#playerData').DataTable({bFilter: false, bInfo: false, bPaginate: false}));
    });

});