var data =
[
			{
			    "metric":"MB",
				"label": "Hygiène Dentaire",
				"value": 1892,
				"color": "#2484c1"
			},
			{
			    "metric":"MB",
				"label": "Parfum",
				"value": 2342,
				"color": "#0c6197"
			},
			{
			    "metric":"MB",
				"label": "Macquillage",
				"value": 3242,
				"color": "#4daa4b"
			},
			{   "metric":"MB",
				"label": "Test de grossesse",
				"value": 11484,
				"color": "#90c469"
			},
			{   "metric":"MB",
				"label": "Lait infantile",
				"value": 95002,
				"color": "#daca61"
			},
			{   "metric":"MB",
				"label": "Compléments alimentaires",
				"value": 23231,
				"color": "#e4a14b"
			},
			{   "metric":"MB",
				"label": "Lunettes de soleil",
				"value": 67706,
				"color": "#e98125"
			},
			{   "metric":"MB",
				"label": "Crèmes hydradantes",
				"value": 36344,
				"color": "#cb2121"
			},
			{   "metric":"MB",
				"label": "Lunettes de soleil",
				"value": 2821,
				"color": "#830909"
			},
			{   "metric":"MB",
				"label": "Médication légère",
				"value": 24131,
				"color": "#923e99"
			},
			{   "metric":"MB",
				"label": "Diététique",
				"value": 12010,
				"color": "#ae83d5"
			},
			{   "metric":"MB",
				"label": "Maux  de gorges",
				"value": 6812,
				"color": "#bf273e"
			},
			{   "metric":"MB",
				"label": "Hygiène corporelle",
				"value": 21882,
				"color": "#ce2aeb"
			},
			{   "metric":"MB",
				"label": "Hygiène audition",
				"value": 15768,
				"color": "#bca44a"
			},
			{   "metric":"MB",
				"label": "Perte de cheveux",
				"value": 114384,
				"color": "#618d1b"
			},
			{   "metric":"MB",
				"label": "Problèmes respiratoires",
				"value": 95002,
				"color": "#1ee67b"
			},
			{   "metric":"MB",
				"label": "Lunettes de vues",
				"value": 36234,
				"color": "#b0ec44"
			},
			{   "metric":"CA",
				"label": "Dispositifs médicaux",
				"value": 32170,
				"color": "#a4a0c9"
			},
			{
			    "metric":"CA",
				"label": "Hygiène Dentaire",
				"value": 1892,
				"color": "#2484c1"
			},
			{
			    "metric":"CA",
				"label": "Parfum",
				"value": 2342,
				"color": "#0c6197"
			},
			{
			    "metric":"CA",
				"label": "Macquillage",
				"value": 3242,
				"color": "#4daa4b"
			},
			{   "metric":"CA",
				"label": "Test de grossesse",
				"value": 11484,
				"color": "#90c469"
			},
			{   "metric":"CA",
				"label": "Lait infantile",
				"value": 95002,
				"color": "#daca61"
			},
			{   "metric":"CA",
				"label": "Compléments alimentaires",
				"value": 23231,
				"color": "#e4a14b"
			},
			{   "metric":"CA",
				"label": "Lunettes de soleil",
				"value": 67706,
				"color": "#e98125"
			},
			{   "metric":"CA",
				"label": "Crèmes hydradantes",
				"value": 36344,
				"color": "#cb2121"
			},
			{   "metric":"CA",
				"label": "Lunettes de soleil",
				"value": 2821,
				"color": "#830909"
			},
			{   "metric":"CA",
				"label": "Médication légère",
				"value": 24131,
				"color": "#923e99"
			},
			{   "metric":"CA",
				"label": "Diététique",
				"value": 12010,
				"color": "#ae83d5"
			},
			{   "metric":"CA",
				"label": "Maux  de gorges",
				"value": 6812,
				"color": "#bf273e"
			},
			{   "metric":"CA",
				"label": "Hygiène corporelle",
				"value": 21882,
				"color": "#ce2aeb"
			},
			{   "metric":"CA",
				"label": "Hygiène audition",
				"value": 15768,
				"color": "#bca44a"
			},
			{   "metric":"CA",
				"label": "Perte de cheveux",
				"value": 1384,
				"color": "#618d1b"
			},
			{   "metric":"CA",
				"label": "Problèmes respiratoires",
				"value": 95002,
				"color": "#1ee67b"
			},
			{   "metric":"CA",
				"label": "Lunettes de vues",
				"value": 36234,
				"color": "#b0ec44"
			},
			{   "metric":"CA",
				"label": "Dispositifs médicaux",
				"value": 32170,
				"color": "#a4a0c9"
			}
		];

var result = data.map(function(a) {return a.value;});
function compareNumbers(a, b)
{
    return b - a ;
}

var datapareto = result.sort(compareNumbers);
console.log('pareto' + datapareto)
var dataSum = [];
for (var i=0;i < datapareto.length;i++) {
 if(i == 0) {
    dataSum[0] = datapareto[0]
}
else {
dataSum[i] = dataSum[i-1] + datapareto[i]

}
}
console.log('datasum' + dataSum)
var max = Math.max.apply(Math, dataSum);
var chart = new Highcharts.Chart({
    chart: {
        renderTo:'pareto',
    },
    title:{
        text:'Chart Title'
    },
    credits:{enabled:false},
    legend:{
    },
    plotOptions: {
        series: {
            shadow:false,
            borderWidth:0,
            dataLabels:{
                enabled:true,
                formatter:function() {
                    var pcnt = (this.y / max) * 100;
                    return Highcharts.numberFormat(pcnt) + '%';
                }
            }
        }
    },
    xAxis:{
        lineColor:'#999',
        lineWidth:1,
        tickColor:'#666',
        tickLength:3,
        title:{
            text:'X Axis Title'
        }
    },
    yAxis:{
        lineColor:'#999',
        lineWidth:1,
        tickColor:'#666',
        tickWidth:1,
        tickLength:3,
        gridLineColor:'#ddd',
        title:{
            text:'Y Axis Title',
            rotation:0,
            margin:50,
        }
    },
    series: [{
        data: dataSum
    }]


});

Highcharts.chart('pareto', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Average Monthly Temperature and Rainfall in Tokyo'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Rainfall',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Contribution // Pourcentage cumule',
        type: 'column',
        yAxis: 1,
        data: datapareto,
        tooltip: {
            valueSuffix: '€'
        }

    }, {
        name: 'Valeur',
        type: 'spline',
        data: dataSum,
        tooltip: {
            valueSuffix: '%'
        }
    }]
});