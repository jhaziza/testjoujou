  var data_TVA =
  [
			{   "metric":"MB",
				"label": "TVA 2,1%",
				"value": 289374,
				"color": "#2484c1"
			},
			{   "metric":"MB",
				"label": "TVA 8,5%",
				"value": 129389,
				"color": "#0c6197"
			},
			{   "metric":"MB",
				"label": "TVA 10%",
				"value": 90833,
				"color": "#4daa4b"
			},
			{   "metric":"MB",
				"label": "TVA 20%",
				"value": 50943,
				"color": "#90c469"
			},
            {   "metric":"CA",
				"label": "TVA 2,1%",
				"value": 2894,
				"color": "#2484c1"
			},
			{   "metric":"CA",
				"label": "TVA 8,5%",
				"value": 12389,
				"color": "#0c6197"
			},
			{   "metric":"CA",
				"label": "TVA 10%",
				"value": 90833,
				"color": "#4daa4b"
			},
			{   "metric":"CA",
				"label": "TVA 20%",
				"value": 50943,
				"color": "#90c469"
			}
		];

var dataFiltered_TVA = data_TVA.filter(function (d) { return d.metric === 'MB' });

 pieTVA  = new d3pie("TVA", {/*
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
		"content": dataFiltered_TVA
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



function updateData_TVA(value) {
    dataFiltered_TVA = data_TVA.filter(function (d) { return d.metric === value })

if (value=="MB"){
label = "Marge brute"
} else {
label = "Chiffre d'affaires"
}
pieTVA.destroy();
pieTVA =null;
 pieTVA = new d3pie("TVA", {
	"header": {
		"title": {
			"text": label + " // Répartition par TVA",
			"color": "#000",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "Voici la décomposition (%) par TVA",
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
		"content": dataFiltered_TVA
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
var resultTVA = dataFiltered_TVA.map(function(a) {return a.value;});
function compareNumbers(a, b)
{
    return b - a ;
}

var dataparetoTVA = resultTVA.sort(compareNumbers);
var dataSumTVA = [];
var pourcTVA = [];
for (var i=0;i < dataparetoTVA.length;i++) {
 if(i == 0) {
    dataSumTVA[0] = dataparetoTVA[0]
}
else {
dataSumTVA[i] = dataSumTVA[i-1] + dataparetoTVA[i]

}
}
var max = Math.max.apply(Math, dataSumTVA);

for (var i=0;i < dataSumTVA.length;i++) {
pourcTVA[i] = 100*(dataSum[i]/max)
}
var pareto = Highcharts.chart('paretoTVA', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text:   label + " //  Valeur (€) et contribution cumulée des catégories de TVA (%)"
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
        data: dataparetoTVA,
        tooltip: {
            valueSuffix: '€'
        }

    }, {
        name: 'Valeur',
        type: 'spline',
        data: pourcTVA,
        tooltip: {
            valueSuffix: '%'
        }
    }]
});
pareto.setSize(1200, 600);
   };




			    var dataTableTVA = [["MB",
				"Hygiène Dentaire",
				1892,
				"#2484c1"]];

$(document).ready(function() {
    $('#TVATable').DataTable( {
     autoFill: true,
        data: dataTableTVA,
        columns: [
            { title: "Metric" },
            { title: "Catégorie" },
            { title: "Valeur (€) " }        ]
    } );
} );


