


var data_cat =
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


var dataFiltered_cat = data_cat.filter(function (d) { return d.metric === 'MB' });

 piecat = new d3pie("Cat", {/*
	"header": {
		"title": {
			"text": "Répartition du Chiffre d'affaire par Univers",
			"color": "#ffffff",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Voici comment se décompose le CA (€) par Univers",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},*/
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 690,
		"pieInnerRadius": "24%",
		"pieOuterRadius": "93%"
	},
	"data": {
	    "sortOrder": "value-desc",
		"content": dataFiltered_cat
	},
	"labels": {
		"outer": {
			"format": "label-value1",
			"pieDistance": 32
		},

		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"color": "#000",
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": false
		}
	},
	"effects": {
	    "load":{
	    "speed":800
	    },
		"pullOutSegmentOnClick": {
			"effect": "elastic",
			"speed": 280,
			"size": 12
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 200
		}
	},


"callbacks": {}
});
//$('pie').append();



function updateData_cat(value) {
    dataFiltered_cat = data_cat.filter(function (d) { return d.metric === value })

if (value=="MB"){
label = "Marge brute"
} else {
label = "Chiffre d'affaires"
}

piecat.destroy();
piecat =null;
 piecat = new d3pie("Cat", {
	"header": {
		"title": {
			"text": label + " // Répartition par Catégories",
			"color": "#000",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Voici la décomposition (%) par Catégories",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 690,
		"pieInnerRadius": "24%",
		"pieOuterRadius": "93%"
	},
	"data": {
	    "sortOrder": "value-desc",
		"content": dataFiltered_cat
	},
	"labels": {
		"outer": {
			"format": "label-value1",
			"pieDistance": 32
		},

		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"color": "#000",
			"fontSize": 11
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		},
		"truncation": {
			"enabled": false
		}
	},
	"effects": {
	    "load":{
	    "speed":800
	    },
		"pullOutSegmentOnClick": {
			"effect": "elastic",
			"speed": 280,
			"size": 12
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 200
		}
	},


"callbacks": {}
});
//$('pie').append();





// Pareto Chart //
var result = dataFiltered_cat.map(function(a) {return a.value;});
function compareNumbers(a, b)
{
    return b - a ;
}

var datapareto = result.sort(compareNumbers);
var dataSum = [];
var pourc = [];
for (var i=0;i < datapareto.length;i++) {
 if(i == 0) {
    dataSum[0] = datapareto[0]
}
else {
dataSum[i] = dataSum[i-1] + datapareto[i]

}
}
var max = Math.max.apply(Math, dataSum);
for (var i=0;i < dataSum.length;i++) {
pourc[i] = 100*(dataSum[i]/max)
}
var pareto = Highcharts.chart('pareto', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text:  label + " // Valeur (€) et contribution cumulée des catégories (%)"
    },
    subtitle: {
        text: ''
    },
    /*xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],*/
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}%',
            style: {
                color: Highcharts.getOptions().colors[1]
            }

        },
        max: 100,
        endOnTick:false,
        title: {
            text: 'Valeur',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Contribution marginale',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} €',
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
        data: pourc,
        tooltip: {
            valueSuffix: '%'
        }
    }]
});
pareto.setSize(1200, 600);

   };




			    var test = [["MB",
				"Hygiène Dentaire",
				1892,
				"#2484c1"]];

$(document).ready(function() {
    $('#CategorieTable').DataTable( {
     autoFill: true,
        data: test,
        columns: [
            { title: "Metric" },
            { title: "Catégorie" },
            { title: "Valeur (€) " }        ]
    } );
} );


